import Robot from '../facades/Robot.mjs'

const index = function (req, res) {
   res.render('pages/index', {
      orientations: Robot.orientations
   });
}

const turnOn = function (req, res) {
   // validateInput();
   // TODO: Criar validação de dados
   res.json({
      actions: Robot.irrigateFlowerbeds(req.body.initialPosition, req.body.initialOrientation, req.body.flowerbedsToIrrigate)
   });
}

export default {index, turnOn}
