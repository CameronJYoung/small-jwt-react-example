const db = require('../models');
const User = db.user;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: 'Content cannot be empty!'
        });
        return
    }

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while creating user!"
            });
        });
};

exports.delete = (req, res) => {
    const id = parseInt(req.params.id)

    User.destroy({
        where: {id:id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: 'User deleted'
            })
        } else if (num == 2) {
            res.send({
                message: `Cannot delete user with id: ${id}, maybe not found`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error deleting user with id: ${id}!`,
            errMessage: err.message || 'unknown error'
        })
    })
}

exports.getById = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
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
    User.findAll()
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

exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: {id:id}
    }).then(num => {
        if (num == 1) {
            res.send(`User with id of ${id} has been updated`);
        } else {
            res.send({
                message: `Cannot update user with ID of ${id}. Maybe not found.`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error updating user!`,
            errMessage: err.message || 'unknown error'
        })
    })
}