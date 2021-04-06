const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../models');

const User = db.user;
const jwtSecret = 'secret123';

exports.logIn = (req, res) => {
	User.findOne({
		where: {
			name: req.body.name,
		},
	}).then((users) => {
		if (!users) {
			return res.status(404).send({ message: 'User not found!' });
		}

		const passwordIsValid = bcrypt.compareSync(
			req.body.password,
			users.password,
		);

		if (!passwordIsValid) {
			return res.status(401).send({
				accessToken: null,
				message: 'Invalid Password!',
			});
		}

		const token = jwt.sign({ id: users.id }, jwtSecret, {
			expiresIn: 86400,
		});
		return res.status(200).send({
			id: users.id,
			usersname: users.name,
			email: users.email,
			accessToken: token,
		});
	}).catch((err) => {
		res.status(500).send({ message: err.message });
	});
};

exports.signUp = (req, res) => {
	if (!req.body.name && !req.body.email && !req.body.password) {
		res.status(400).send({
			message: 'Content cannot be empty!',
		});
		return;
	}

	const user = {
		name: req.body.name,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
	};

	User.create(user)
		.then(() => {
			res.send('User Registered!');
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Error occured while creating user!',
			});
		});
};
