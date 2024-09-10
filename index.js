const express = require('express');

const cors = require('cors');

require('dotenv').config();

require('./database/mongodb');

const userController = require('./routes/user');

const app = express();

app.use(cors({
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

app.get('/users', userController.index);
app.get('/users/removeds', userController.removeds);
app.post('/users', userController.store);
app.get('/users/:id', userController.show);
app.put('/users/:id', userController.update);
app.delete('/users/all', userController.destroyAll);
app.delete('/users/:id', userController.destroy);

module.exports = app;