const jwt = require('express-jwt');
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
	})
};

exports.signUp = (req, res) => {
	
};