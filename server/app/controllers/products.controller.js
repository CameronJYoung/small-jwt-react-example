const db = require('../models');
const Product = db.product;

exports.getById = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: `Error finding user with id: ${id}!`,
                errMessage: err.message || 'unknown error'
            })
        })
}

exports.getAll = (req, res) => {
    Product.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error finding all users!`,
                errMessage: err.message || 'unknown error'
            })
        })
}