import Robot from '../facades/Robot.mjs';
import Movable from '../models/Movable.mjs';

const index = function (req, res) {
   res.render('pages/index', {
      orientations: Movable.orientations,
      orientationLetters: Movable.orientationLetters
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
