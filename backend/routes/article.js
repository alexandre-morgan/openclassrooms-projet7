const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const articlesCtrl = require('../controllers/articles');

router.post('/', auth, multer, articlesCtrl.addArticle);

router.put('/:id', auth, multer, articlesCtrl.updateArticle);

router.delete('/:id', auth, articlesCtrl.deleteOneArticle);

router.get('/:id', auth, articlesCtrl.getOneArticle);

router.get('/', auth, articlesCtrl.getAllArticle);

module.exports = router;