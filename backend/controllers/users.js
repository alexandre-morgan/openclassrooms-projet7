const User = require('../models/User');


exports.addUser = (req, res, next) => {
    const userObject = new User(req.body);
    userObject.addUser().then((user) => {
        res.status(200).json(user);
    }).catch(error => res.status(400).json({ error }));
};