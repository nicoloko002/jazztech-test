const index = function (req, res) {
   res.render('index');
}

const turnOn = function (req, res) {
   // validateInput();
   // TODO: Criar validação de dados

   let robot = new Robot(req.initialPosition, req.initialOrientation);

   req.flowerbedsToIrrigate.forEach(item => robot.moveTo(item));

   // Facade para movimentação do robo
   res.json({
      actions: robot.actionsHistory
   });
}

export default {index, turnOn};
