const router = require('express').Router();
const auth = require('../controllers/auth.controller.js');

module.exports = (app) => {
	router.post('/login', auth.logIn);

	app.use('/auth', router);
};
