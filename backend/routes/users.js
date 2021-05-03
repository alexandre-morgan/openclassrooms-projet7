const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');

router.post('/', usersCtrl.addUser);

// router.put('/:id', articlesRCtrl.updateArticle);

// router.delete('/:id', articlesRCtrl.deleteOneArticle);

// router.get('/:id', articlesRCtrl.getOneArticle);

// router.get('/', articlesRCtrl.getAllArticle);

module.exports = router;