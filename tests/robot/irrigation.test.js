import Robot from '../../app/models/Robot'

test('Irrigação sendo incluída na lista de ações', () => {
   let robot = new Robot({
      x: 0,
      y: 0
   }, Robot.orientationLetters[Robot.orientations.FACING_NORTH]);

   robot.irrigate();

   expect(robot.actionsHistory[robot.actionsHistory.length - 1]).toBe(Robot.actions.IRRIGATE);
});
