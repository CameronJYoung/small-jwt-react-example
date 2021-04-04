const router = require('express').Router();
const products = require('../controllers/products.controller.js');

module.exports = (app) => {
	router.get('/', products.getAll);
	router.post('/', products.create);

	app.use('/products', router);
};
