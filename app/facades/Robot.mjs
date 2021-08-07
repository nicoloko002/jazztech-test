import RobotModel from '../models/Robot.mjs';
import Movement from './Movement.mjs';

export default class Robot {
   static irrigateFlowerbeds(initialPosition, initialOrientation, flowerbedsToIrrigate) {
      let robot = new RobotModel(initialPosition, initialOrientation);

      flowerbedsToIrrigate.forEach(item => {
         Movement.moveTo(robot, item);
         robot.irrigate();
      });

      return robot.actionsHistory;
   }
}
