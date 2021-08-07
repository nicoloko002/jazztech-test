import Robot from '../facades/Robot.mjs';
import Movable from '../models/Movable.mjs';

const index = function (req, res) {
   console.log(Movable.orientations);

   res.render('pages/index', {
      orientations: Movable.orientations
   });
}

const turnOn = function (req, res) {
   // validateInput();
   // TODO: Criar validação de dados
   // TODO: a entrada da orientação inicial deve ser NSLO
   res.json({
      actions: Robot.irrigateFlowerbeds(req.body.initialPosition, req.body.initialOrientation, req.body.flowerbedsToIrrigate)
   });
}

export default {index, turnOn}
