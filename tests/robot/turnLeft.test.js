import Robot from '../../app/models/Robot'

test('Virando 90° para a esquerda olhando para o Norte', () => {
   let robot = new Robot({
      x: 0,
      y: 0
   }, Robot.orientationLetters[Robot.orientations.FACING_NORTH]);

   robot.turnLeft();

   expect(robot.orientation).toBe(Robot.orientations.FACING_WEST);
});

test('Virando 90° para a esquerda olhando para o Oeste', () => {
   let robot = new Robot({
      x: 0,
      y: 0
   }, Robot.orientationLetters[Robot.orientations.FACING_WEST]);

   robot.turnLeft();

   expect(robot.orientation).toBe(Robot.orientations.FACING_SOUTH);
});

test('Virando 90° para a esquerda olhando para o Sul', () => {
   let robot = new Robot({
      x: 0,
      y: 0
   }, Robot.orientationLetters[Robot.orientations.FACING_SOUTH]);

   robot.turnLeft();

   expect(robot.orientation).toBe(Robot.orientations.FACING_EAST);
});

test('Virando 90° para a esquerda olhando para o Leste', () => {
   let robot = new Robot({
      x: 0,
      y: 0
   }, Robot.orientationLetters[Robot.orientations.FACING_EAST]);

   robot.turnLeft();

   expect(robot.orientation).toBe(Robot.orientations.FACING_NORTH);
});
