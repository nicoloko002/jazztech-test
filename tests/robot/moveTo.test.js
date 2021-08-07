import Robot from '../../app/models/Robot.mjs';
import Movement from '../../app/facades/Movement.mjs';

test('Output utilizando moveTo (MMDMMM)', () => {
   let robot = new Robot({
      x: 1,
      y: 1
   }, Robot.orientations.FACING_NORTH);

   Movement.moveTo(robot, {
      x: 4,
      y: 3
   });

   expect(robot.actionsHistory).toBe('MMDMMM');
});

test('Output utilizando moveTo (MMEM)', () => {
   let robot = new Robot({
      x: 1,
      y: 1
   }, Robot.orientations.FACING_NORTH);

   Movement.moveTo(robot, {
      x: 0,
      y: 3
   });

   expect(robot.actionsHistory).toBe('MMEM');
});

test('Output utilizando moveTo (EEM)', () => {
   let robot = new Robot({
      x: 1,
      y: 1
   }, Robot.orientations.FACING_NORTH);

   Movement.moveTo(robot, {
      x: 1,
      y: 0
   });

   expect(robot.actionsHistory).toBe('EEM');
});
