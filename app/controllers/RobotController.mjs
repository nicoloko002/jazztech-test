import Robot from '../models/Robot.mjs'

const index = function (req, res) {
   res.render('pages/index', {
      orientations: Robot.orientations
   });
}

const turnOn = function (req, res) {
   // validateInput();
   // TODO: Criar validação de dados

   let robot = new Robot(req.body.initialPosition, req.body.initialOrientation);

   req.body.flowerbedsToIrrigate.forEach(item => {
      robot.moveTo(item);
      robot.irrigate();
   });

   // Facade para movimentação do robo
   res.json({
      actions: robot.actionsHistory
   });
}

export default {index, turnOn}
