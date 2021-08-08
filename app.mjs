import RobotController from './app/controllers/RobotController.mjs';
import express from 'express';
import bodyParser from 'body-parser';
import { validationResult} from 'express-validator';
import RobotTurnOnValidator from './app/validators/RobotTurnOnValidator.mjs';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const defaultValidationMiddleware = function (req, res, next) {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   next();
};

app.get('/', RobotController.index);

app.post('/turn-on-robot', RobotTurnOnValidator, defaultValidationMiddleware, RobotController.turnOn);

export default app;
