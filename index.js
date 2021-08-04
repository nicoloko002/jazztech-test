import RobotController from 'controllers/RobotController';

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', RobotController.index);

app.post('/turn-on-robot', RobotController.turnOn);

app.listen(port);
