module.exports = app => {
	const users = require("../controllers/users.controller.js");

	var router = require("express").Router();

	// Create a new Tutorial
	router.post("/", users.create);
	router.get("/", users.getAll);
	router.delete("/:id", users.delete);
	router.get("/:id", users.getById);
	router.put("/:id", users.update);

	app.use("/users", router);
};