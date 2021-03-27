module.exports = app => {
	const products = require("../controllers/products.controller.js");

	var router = require("express").Router();

	// Create a new Tutorial
	router.get("/", products.getAll);
	router.get("/:id", products.getById);

	app.use("/products", router);
};