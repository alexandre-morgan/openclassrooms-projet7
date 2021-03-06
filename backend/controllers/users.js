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
            password: hash,
            lastname: req.body.lastname,  
            firstname: req.body.firstname,
            lastLog : Date.now()
        });
        userObject.addUser()
          .then((response) => {
              res.status(201).json({   
                userId: response.insertId,
                token: jwt.sign(
                    { 
                        userId: response.insertId,
                    },
                    process.env.security_token,
                    { expiresIn: '3h' }
                )
        })
          })
          .catch(error => res.status(401).json({ error: 'Email déjà utilisé.' }));
      }).catch(error => res.status(500).json({ error }));
};

exports.logIn = (req, res, next) => {
    const userObject = new User(req.body);
    userObject.findOne().then((response) => {
        if(response.length != 1) {
            return res.status(401).json({ error: "Nom d'utilisateur incorrect."})
        }
        if(response[0].isActive == 0){
            return res.status(401).json({ error: 'Compte supprimé. Contacter le service informatique'})
        }
        bcrypt.compare(req.body.password, response[0].password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect.'});
            }
            res.status(200).json({
                userId: response[0].userId,
                firstname: response[0].firstname,
                lastname: response[0].lastname,
                lastLog: response[0].lastLog,
                token: jwt.sign(
                    { 
                        userId: response[0].userId,
                    },
                    process.env.security_token,
                    { expiresIn: '3h' }
                  )
            });
        }).catch(error => res.status(500).json({ error }));
    }).catch(error => res.status(500).json({ error }));
};

exports.findOne = (req, res, next) => {
    const userObject = new User();
    userObject.findOneById(req.params.id).then((response) => {
        res.status(200).json({
            firstname: response[0].firstname,
            lastname: response[0].lastname,
            email: response[0].email
        })
    }).catch(error => res.status(500).json({ error }));
};

exports.updateUser = (req, res, next) => {
    if(req.body.password){
        bcrypt.hash(req.body.password, 10).then( hash => {
            const userObject = new User({
                email: req.body.email,
                password: hash,
                lastname: req.body.lastname,  
                firstname: req.body.firstname
            });
            userObject.updateUserWPassword(req.params.id)
            .then(() => res.status(201).json({ message: 'Utilisateur modifié !' }))
            .catch(error => res.status(400).json({ error }));
        }).catch(error => res.status(500).json({ error }));
    }else {
        const userObject = new User({
            ...req.body
        });
        userObject.updateUser(req.params.id).then((response) => {
            res.status(200).json({ message: 'Utilisateur modifié !'});
        }).catch(error => res.status(400).json({ error }));    
    }
};

exports.updateUserLog = (req, res, next) => {
    const userObject = new User({
        lastLog: req.body.lastLog
    });
    userObject.updateUserLog(req.params.id).then(() => {
        res.status(200).json({ message: 'lastLog enregistré.'})
    }).catch(error => res.status(400).json({ error }));
};

exports.desactivateUser = (req, res, next) => {
    const userObject = new User();
    userObject.desactivateUser(req.params.id).then(() => {
        res.status(200).end();
    }).catch(error => res.status(400).json({ error }));
};