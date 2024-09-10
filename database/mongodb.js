
const mongoose = require('mongoose');

const mongoString = process.env.MONGO_URI;

try {
	mongoose.connect(mongoString);

	const database = mongoose.connection;

	database.on('error', console.error.bind(console, 'connection error:'));

	database.once('connected', () => {
		console.log('Connected to MongoDB');
	});
	
} 
catch (err) {
	console.error(err);
}

