const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const articles9Ctrl = require('../controllers/articles9');

router.post('/', multer, articles9Ctrl.addArticle);

router.put('/:id', articles9Ctrl.updateArticle);

router.delete('/:id', articles9Ctrl.deleteOneArticle);

router.get('/:id', articles9Ctrl.getOneArticle);

router.get('/', articles9Ctrl.getAllArticle);

module.exports = router;