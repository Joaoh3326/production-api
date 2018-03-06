const userModel = require('../models/user');

const user = {
    get: (req, res) => {
        userModel.find({})
            .then(data => res.send(data))
            .catch(err => res.status(400).send(err.message));
    },
    create: (req, res) => {
        const newUser = new userModel(req.body);
        newUser.save()
            .then(data => res.send(newUser))
            .catch(err => res.status(400).send(err.message));
    },
    update: (req, res) => {
        const id = req.params.id;
        userModel.findOneAndUpdate({ _id: id }, req.body)
            .then(data => res.send(data))
            .catch(err => res.status(400).send(err.message));
    },
    delete: (req, res) => {
        const id = req.params.id;
        userModel.remove({_id: id})
            .then(data => res.send(data))
            .catch(err => res.status(400).send(err.message));
    }
};

module.exports = user;