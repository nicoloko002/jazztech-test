import Robot from '../app/models/Robot'

test('Orientação para todos os lados está correta', () => {
   let robot = new Robot({
      x: 1,
      y: 1
   }, Robot.orientations.FACING_NORTH);

   expect(robot.getAxisFromOrientation(robot.orientation)).toBe('y');

   robot.turnRight();

   expect(robot.getAxisFromOrientation(robot.orientation)).toBe('x');

   robot.turnRight();

   expect(robot.getAxisFromOrientation(robot.orientation)).toBe('y');

   robot.turnRight();

   expect(robot.getAxisFromOrientation(robot.orientation)).toBe('x');
});
