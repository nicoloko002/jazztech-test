import RobotModel from '../models/Robot.mjs';

export default class Robot {
   irrigateFlowerbeds(initialPosition, initialOrientation, flowerbedsToIrrigate) {
      let robot = new RobotModel(initialPosition, initialOrientation);

      flowerbedsToIrrigate.forEach(item => {
         Movement.moveTo(robot, item);
         robot.irrigate();
      });

      return robot.actionsHistory;
   }
}
