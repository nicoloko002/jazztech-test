import Robot from '../models/Robot'

test('Movimentar robô com ele voltado para o Norte', () => {
   let robot = new Robot({
      x: 1,
      y: 1
   }, Robot.orientations.FACING_NORTH);

   robot.move();

   expect(robot.position).toEqual({
      x: 1,
      y: 2
   });
});

test('Movimentar robô com ele voltado para o Sul', () => {
   let robot = new Robot({
      x: 1,
      y: 1
   }, Robot.orientations.FACING_SOUTH);

   robot.move();

   expect(robot.position).toEqual({
      x: 1,
      y: 0
   });
});

test('Movimentar robô com ele voltado para o Leste', () => {
   let robot = new Robot({
      x: 1,
      y: 1
   }, Robot.orientations.FACING_EAST);

   robot.move();

   expect(robot.position).toEqual({
      x: 2,
      y: 1
   });
});

test('Movimentar robô com ele voltado para o Oeste', () => {
   let robot = new Robot({
      x: 1,
      y: 1
   }, Robot.orientations.FACING_WEST);

   robot.move();

   expect(robot.position).toEqual({
      x: 0,
      y: 1
   });
});
