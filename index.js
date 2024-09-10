const express = require('express');

require('dotenv').config();

require('./database/mongodb');

const userController = require('./routes/user');

const app = express();

app.use(express.json());

app.get('/users', userController.index);
app.get('/users/removeds', userController.removeds);
app.post('/users', userController.store);
app.get('/users/:id', userController.show);
app.put('/users/:id', userController.update);
app.delete('/users/:id', userController.destroy);
app.delete('/users/all', userController.destroyAll);
app.listen(process.env.APP_PORT || 3000, () => {
	console.log('Server is running in port:', process.env.APP_PORT || 3000);
});