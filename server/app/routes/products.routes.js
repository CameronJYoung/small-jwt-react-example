module.exports = app => {
	const products = require("../controllers/products.controller.js");

	var router = require("express").Router();

	router.get("/", products.getAll);
	router.post("/", products.create);

	app.use("/products", router);
};