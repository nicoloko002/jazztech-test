import { body, validationResult} from 'express-validator';
import Movable from '../models/Movable.mjs';

const isValidCoordinateValue = function (value, { req }) {
   return value >= 0 && value <= req.body.map.width;
}

const isValidMapSize = function (value) {
   return value >= 0;
}

export default [
   body('map.width').notEmpty().withMessage('O campo largura do mapa é obrigatório')
                    .bail()
                    .custom(isValidMapSize).withMessage('O campo largura do mapa deve ser maior ou igual a zero'),

   body('map.height').notEmpty().withMessage('O campo altura do mapa é obrigatório')
                     .bail()
                     .custom(isValidMapSize).withMessage('O campo altura do mapa deve ser maior ou igual a zero'),

   body('initialPosition.x').notEmpty().withMessage('O campo coordenada x da posição inicial é obrigatório')
                            .bail()
                            .custom(isValidCoordinateValue).withMessage('O campo coordenada x da posição inicial deve ser maior ou igual a zero e menor ou igual à largura do mapa'),

   body('initialPosition.y').notEmpty().withMessage('O campo coordenada y da posição inicial é obrigatório')
                            .bail()
                            .custom(isValidCoordinateValue).withMessage('O campo coordenada y da posição inicial deve ser maior ou igual a zero e menor ou igual à altura do mapa'),

   body('initialOrientation').notEmpty().withMessage('O campo orientação inicial é obrigatório')
                             .bail()
                             .custom(value => Movable.orientationLetters.includes(value)).withMessage('A orientação inicial deve ser \'N\', \'S\', \'L\' ou \'O\''),

   body('flowerbedsToIrrigate').notEmpty().withMessage('É obrigatório informar os canteiros a irrigar')
                               .bail()
                               .isArray({ min: 1 }).withMessage('É necessário informar ao menos um canteiro a irrigar')
                               .bail()
                               .custom((value, validator) => value.every(item => isValidCoordinateValue(item.x, validator) && isValidCoordinateValue(item.y, validator))).withMessage('Os canteiros devem ter as coordenadas entre zero e altura/largura informados para o mapa')
];
