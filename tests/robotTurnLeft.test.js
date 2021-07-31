test('Virando 90° para a esquerda olhando para o Norte', () => {
   let robot = new Robot({
      x: 0,
      y: 0
   }, Robot.FACING_NORTH);

   robot.turnLeft();

   expect(robot.facing).toBe(Robot.FACING_WEST);
});

test('Virando 90° para a esquerda olhando para o Oeste', () => {
   let robot = new Robot({
      x: 0,
      y: 0
   }, Robot.FACING_WEST);

   robot.turnLeft();

   expect(robot.facing).toBe(Robot.FACING_SOUTH);
});

test('Virando 90° para a esquerda olhando para o Sul', () => {
   let robot = new Robot({
      x: 0,
      y: 0
   }, Robot.FACING_SOUTH);

   robot.turnLeft();

   expect(robot.facing).toBe(Robot.FACING_EAST);
});

test('Virando 90° para a esquerda olhando para o Leste', () => {
   let robot = new Robot({
      x: 0,
      y: 0
   }, Robot.FACING_EAST);

   robot.turnLeft();

   expect(robot.facing).toBe(Robot.FACING_NORTH);
});
