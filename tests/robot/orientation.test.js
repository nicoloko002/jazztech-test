import Robot from '../../app/models/Robot';
import Movement from '../../app/facades/Movement';

test('Orientação para todos os lados está correta', () => {
   let robot = new Robot({
      x: 1,
      y: 1
   }, Robot.orientations.FACING_NORTH);

   expect(Movement.getAxisFromOrientation(robot.orientation)).toBe('y');

   robot.turnRight();

   expect(Movement.getAxisFromOrientation(robot.orientation)).toBe('x');

   robot.turnRight();

   expect(Movement.getAxisFromOrientation(robot.orientation)).toBe('y');

   robot.turnRight();

   expect(Movement.getAxisFromOrientation(robot.orientation)).toBe('x');
});
