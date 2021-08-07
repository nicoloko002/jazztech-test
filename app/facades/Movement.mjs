import Movable from '../models/Movable.mjs';

export default class Movement {
    static moveTo(movable, position) {
        let targetOrientations = this.possibleOrientations(movable, position);

        while (targetOrientations.length) {
            let correctOrientationIndex = targetOrientations.indexOf(movable.orientation);

            if (correctOrientationIndex < 0) {
                if ((correctOrientationIndex = targetOrientations.indexOf(movable.calcTurnLeft())) >= 0) {
                    movable.turnLeft();
                } else if ((correctOrientationIndex = targetOrientations.indexOf(movable.calcTurnRight())) >= 0) {
                    movable.turnRight();
                } else {
                    correctOrientationIndex = 0;
                    movable.turnAround();
                }
            }

            let axis = this.getAxisFromOrientation(targetOrientations.splice(correctOrientationIndex, 1)[0])
            let moves = Math.abs(position[axis] - movable.position[axis]);

            for (let i = 0; i < moves; i++) {
                movable.move();
            }
        }
    }

    static possibleOrientations(movable, position) {
        let possibleOrientations = [];

        if (position.x > movable.position.x)
            possibleOrientations.push(Movable.orientations.FACING_EAST);
        else if (position.x < movable.position.x)
            possibleOrientations.push(Movable.orientations.FACING_WEST);

        if (position.y > movable.position.y)
            possibleOrientations.push(Movable.orientations.FACING_NORTH);
        else if (position.y < movable.position.y)
            possibleOrientations.push(Movable.orientations.FACING_SOUTH);

        return possibleOrientations;
    }

    static getAxisFromOrientation(orientation) {
        switch (orientation) {
            case Movable.orientations.FACING_NORTH:
            case Movable.orientations.FACING_SOUTH:
                return 'y';
            case Movable.orientations.FACING_EAST:
            case Movable.orientations.FACING_WEST:
                return 'x';
        }
    }
}
