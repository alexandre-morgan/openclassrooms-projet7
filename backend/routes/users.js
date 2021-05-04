const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const usersCtrl = require('../controllers/users');

router.post('/signup', usersCtrl.signUp);

router.post('/login', usersCtrl.logIn);


// router.put('/:id', articlesRCtrl.updateArticle);

// router.delete('/:id', articlesRCtrl.deleteOneArticle);

// router.get('/:id', articlesRCtrl.getOneArticle);

// router.get('/', articlesRCtrl.getAllArticle);

module.exports = router;