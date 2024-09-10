const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	createAt: {
		type: Date,
		default: Date.now
	},
	updateAt: {
		type: Date,
		default: Date.now,
	},
	deleteAt: {
		type: Date,
		default: null
	}
});

module.exports = mongoose.model('User', dataSchema);