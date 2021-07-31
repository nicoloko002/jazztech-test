
test('Irrigação sendo incluída na lista de ações', () => {
   let robot = new Robot({
      x: 0,
      y: 0
   }, Robot.FACING_NORTH);

   robot.irrigate();

   expect(robot.actions[robot.actions.length - 1]).toBe(Robot.IRRIGATE);
});
