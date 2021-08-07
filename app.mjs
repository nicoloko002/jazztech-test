import RobotController from './app/controllers/RobotController.mjs';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', RobotController.index);

app.post('/turn-on-robot', RobotController.turnOn);

export default app;
