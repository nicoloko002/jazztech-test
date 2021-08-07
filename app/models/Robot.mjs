const orientations = {
    FACING_NORTH: 0,
    FACING_EAST: 1,
    FACING_SOUTH: 2,
    FACING_WEST: 3
};

const actions = {
    TURN_LEFT: 'E',
    TURN_RIGHT: 'D',
    IRRIGATE: 'I',
    MOVE: 'M'
};

export default class Robot {
    position
    orientation
    #_actionsHistory

    static get orientations() {
        return orientations;
    }

    static get actions() {
        return actions;
    }

    get actionsHistory() {
        return this._actionsHistory.join('');
    }

    constructor(position, orientation) {
        this.position = position;
        this.orientation = orientation;
        this._actionsHistory = [];
    }

    turnLeft() {
        this.orientation = this.calcTurnLeft();
        this._actionsHistory.push(actions.TURN_LEFT);
    }

    turnRight() {
        this.orientation = this.calcTurnRight();
        this._actionsHistory.push(actions.TURN_RIGHT);
    }

    calcTurnLeft() {
        let orientation = this.orientation - 1;

        if (orientation < orientations.FACING_NORTH)
            orientation = orientations.FACING_WEST;

        return orientation;
    }

    calcTurnRight() {
        return (this.orientation + 1) % (orientations.FACING_WEST + 1);
    }

    irrigate() {
        this._actionsHistory.push(actions.IRRIGATE);
    }

    move() {
        switch (this.orientation) {
            case orientations.FACING_NORTH:
                this.position.y += 1;
                break;
            case orientations.FACING_EAST:
                this.position.x += 1;
                break;
            case orientations.FACING_SOUTH:
                this.position.y -= 1;
                break;
            case orientations.FACING_WEST:
                this.position.x -= 1;
                break;
        }

        this._actionsHistory.push(actions.MOVE);
    }

    // TODO: moveTo deve ficar em um facade
    // O primeiro parâmetro deve ser uma classe que implementa a interface movable
    // O segundo é um objeto com props x e y
    moveTo(position) {
        let targetOrientations = this.possibleOrientations(position);

        while (targetOrientations.length) {
            let correctOrientationIndex = targetOrientations.indexOf(this.orientation);

            if (correctOrientationIndex < 0) {
                if ((correctOrientationIndex = targetOrientations.indexOf(this.calcTurnLeft())) >= 0) {
                    this.turnLeft();
                } else if ((correctOrientationIndex = targetOrientations.indexOf(this.calcTurnRight())) >= 0) {
                    this.turnRight();
                } else {
                    correctOrientationIndex = 0;
                    this.turnAround();
                }
            }

            let axis = this.getAxisFromOrientation(targetOrientations.splice(correctOrientationIndex, 1)[0])
            let moves = Math.abs(position[axis] - this.position[axis]);

            for (let i = 0; i < moves; i++) {
                this.move();
            }
        }
    }

    turnAround() {
        this.turnLeft();
        this.turnLeft();
    }

    getAxisFromOrientation(orientation) {
        switch (orientation) {
            case orientations.FACING_NORTH:
            case orientations.FACING_SOUTH:
                return 'y';
            case orientations.FACING_EAST:
            case orientations.FACING_WEST:
                return 'x';
        }
    }

    possibleOrientations(position) {
        let possibleOrientations = [];

        if (position.x > this.position.x)
            possibleOrientations.push(orientations.FACING_EAST);
        else if (position.x < this.position.x)
            possibleOrientations.push(orientations.FACING_WEST);

        if (position.y > this.position.y)
            possibleOrientations.push(orientations.FACING_NORTH);
        else if (position.y < this.position.y)
            possibleOrientations.push(orientations.FACING_SOUTH);

        return possibleOrientations;
    }
}
