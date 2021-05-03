const express = require('express');
const router = express.Router();

const articlesRCtrl = require('../controllers/articlesR');

router.post('/', articlesRCtrl.addArticle);

router.put('/:id', articlesRCtrl.updateArticle);

router.delete('/:id', articlesRCtrl.deleteOneArticle);

router.get('/:id', articlesRCtrl.getOneArticle);

router.get('/', articlesRCtrl.getAllArticle);

module.exports = router;