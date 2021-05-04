// Importation du modele user de la base de données
const User = require('../models/user');
// Package pour crypter les password des utilisateurs et pour les comparer
const bcrypt = require('bcrypt');
// Package pour la création et la comparaison des tokens d'authentification pour les requêtes
const jwt = require('jsonwebtoken');


exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then( hash => {
        const userObject = new User({
            email: req.body.email,
            password: hash  
        });
        userObject.addUser()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(401).json({ error: 'Utilisateur déjà utilisé.' }));
      }).catch(error => res.status(500).json({ error }));
};

exports.logIn = (req, res, next) => {
    const userObject = new User(req.body);
    userObject.findOne().then((response) => {
        if(response.length != 1) {
            return res.status(401).json({ error: 'Utilisateur non-trouvé!'})
        }
        bcrypt.compare(req.body.password, response[0].password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !'});
            }
            res.status(200).json({
                userId: response[0].idUser,
                token: jwt.sign(
                    { userId: response[0].idUser },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                  )
            });
        }).catch(error => res.status(500).json({ error }));
    }).catch(error => res.status(500).json({ error }));
};
