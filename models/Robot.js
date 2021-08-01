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
        return this._actionsHistory;
    }

    constructor(position, orientation) {
        this.position = position;
        this.orientation = orientation;
        this._actionsHistory = [];
    }

    turnLeft() {
        this.orientation = this.orientation - 1;

        if (this.orientation < orientations.FACING_NORTH)
            this.orientation = orientations.FACING_WEST;

        this._actionsHistory.push(actions.TURN_LEFT);
    }

    turnRight() {
        this.orientation = (this.orientation + 1) % (orientations.FACING_WEST + 1);
        this._actionsHistory.push(actions.TURN_RIGHT);
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
}
