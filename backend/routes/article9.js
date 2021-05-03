const express = require('express');
const router = express.Router();

const articles9Ctrl = require('../controllers/articles9');

router.post('/', articles9Ctrl.addArticle);

router.put('/:id', articles9Ctrl.updateArticle);

router.delete('/:id', articles9Ctrl.deleteOneArticle);

router.get('/:id', articles9Ctrl.getOneArticle);

router.get('/', articles9Ctrl.getAllArticle);

module.exports = router;