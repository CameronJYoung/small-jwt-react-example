const router = require('express').Router();
const users = require('../controllers/users.controller.js');

module.exports = (app) => {
	router.post('/', users.create);
	router.get('/', users.getAll);
	router.delete('/:id', users.delete);
	router.get('/:id', users.getById);
	router.put('/:id', users.update);

	app.use('/users', router);
};
