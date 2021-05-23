const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const usersCtrl = require('../controllers/users');

router.post('/signup', usersCtrl.signUp);

router.post('/login', usersCtrl.logIn);

router.delete('/:id', auth, usersCtrl.desactivateUser);

router.put('/:id', auth, usersCtrl.updateUser);

router.put('/log/:id', auth, usersCtrl.updateUserLog);

router.get('/:id', auth, usersCtrl.findOne);

// router.put('/:id', articlesRCtrl.updateArticle);

// router.delete('/:id', articlesRCtrl.deleteOneArticle);

// router.get('/:id', articlesRCtrl.getOneArticle);

// router.get('/', articlesRCtrl.getAllArticle);

module.exports = router;