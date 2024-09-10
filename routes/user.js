
const User = require('../models/user');

const bcrypt = require('bcrypt');

exports.index = async (req, res) => {
	try {
		const data = await User.find({
			deleteAt: null
		});
		res.status(200).json(data);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
}

exports.removeds = async (req, res) => {
	try {
		const data = await User.find({
			deleteAt: {
				$ne: null
			}
		});
		res.status(200).json(data);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
}

exports.store = async (req, res) => {

	const data = new User({
		name: req.body.name,
		email: req.body.email,
		password: await bcrypt.hash(req.body.password, 8),
		age: req.body.age,
		phone: req.body.phone,
	});

	try {
		const newData = await data.save();
		res.status(201).json(newData);
	} 
	catch (err) {
		res.status(400).json({ message: err.message });
	}

}

exports.show = (req, res) => {

	try {
		const data = User.findById(req.params.id);
		res.status(200).json(data);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}

}

exports.update = async (req, res) => {

	try {

		const id = req.params.id;

		const data = {
			name: req.body.name,
			email: req.body.email,
			age: req.body.age,
			phone: req.body.phone,
			updateAt: Date.now()
		};

		const options = {
			new: true,
		};

		const updatedData = await User.findByIdAndUpdate(id, data, options);

		res.status(200).json(updatedData);

	} 
	catch (err) {
		res.status(500).json({ message: err.message });
	}


}

exports.destroy = async (req, res) => {

	try {

		const id = req.params.id;

		const data = {
			deleteAt: Date.now()
		};

		const options = {
			new: true,
		};

		const updatedData = await User.findByIdAndUpdate(id, data, options);

		res.status(200).json(data);
		
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
}

exports.destroyAll = async (req, res) => {
	try {
		const data = await User.deleteMany({});
		res.status(200).json(data);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
}
