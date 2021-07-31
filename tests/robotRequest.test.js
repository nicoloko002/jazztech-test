// Não deve ser possível sair para fora do mapa (verificar todos os cantos)
// TODO: A validação de limites do mapa deve ficar no controller, não na model do robot
test('Não pode sair do limite no Norte', () => {
   let robot = new Robot({
      x: 1,
      y: 1
   }, Robot.FACING_NORTH);

   expect(() => robot.move()).toThrow();
});

test('Não pode sair do limite no Sul', () => {
   let robot = new Robot({
      x: 1,
      y: 0
   }, Robot.FACING_SOUTH);

   expect(() => robot.move()).toThrow();
});

test('Não pode sair do limite no Leste', () => {
   let robot = new Robot({
      x: 1,
      y: 0
   }, Robot.FACING_EAST);

   expect(() => robot.move()).toThrow();
});

test('Não pode sair do limite no Oeste', () => {
   let robot = new Robot({
      x: 1,
      y: 0
   }, Robot.FACING_WEST);

   expect(() => robot.move()).toThrow();
});

// Testar trajeto percorrido
//    const initialPosition = { x: 3, y: 2 };
//    const initialOrientation = 'N';
//    const flowerbeds = [
//       {
//          x: 4,
//          y: 1
//       },
//       {
//          x: 4,
//          y: 5
//       },
//       {
//          x: 3,
//          y: 4
//       },
//    ];
