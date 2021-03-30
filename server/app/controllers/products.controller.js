const db = require('../models');
const Product = db.product;

exports.getAll = (req, res) => {
    Product.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error finding all products!`,
                errMessage: err.message || 'unknown error'
            })
        })
}

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: 'Content cannot be empty!'
        });
        return
    }

    const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    };

    Product.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while creating user!"
            });
        });
};