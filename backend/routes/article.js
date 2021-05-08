const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const articlesCtrl = require('../controllers/articles');

router.post('/', multer, articlesCtrl.addArticle);

router.put('/:id', multer, articlesCtrl.updateArticle);

router.delete('/:id', articlesCtrl.deleteOneArticle);

router.get('/:id', articlesCtrl.getOneArticle);

router.get('/', articlesCtrl.getAllArticle);

module.exports = router;