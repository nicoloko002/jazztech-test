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

export default class Movable {
    position;
    orientation;
    _actionsHistory;

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

    turnAround() {
        this.turnLeft();
        this.turnLeft();
    }
}
