const Article = require('../models/Article');

const fs = require('fs');

exports.getAllArticle = (req, res, next) => {
    const params = req.originalUrl.split("?")[1];
    const nbOfArticles = params.split('=')[1];
    const articleObject = new Article();
    articleObject.getAllArticle(nbOfArticles).then(articles => {
        res.status(200).json(articles)
    }).catch(error => res.status(400).json({ error }));
};

exports.getOneArticle = (req, res, next) => {
    const articleObject = new Article();
    articleObject.getOneArticle(req.params.id).then(article => {
        res.status(200).json(article)
    }).catch(error => res.status(400).json({ error }));
};

exports.deleteOneArticle = (req, res, next) => {
    const articleObject = new Article();
    articleObject.getOneArticle(req.params.id).then((article) => {
        const filename = article[0].imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
            articleObject.deleteOneArticle(req.params.id)
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.addArticle = (req, res, next) => {
    const articleObject = new Article({
        title: req.body.title,
        isGif: req.body.isGif,
        userId: req.body.userId
    });
    if(req.body.isGif == 1) {
        articleObject.imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    } else {
        let formatedContent = req.body.content.replaceAll(`"`,`\\"`)
        articleObject.content = formatedContent;
    }
    articleObject.addArticle().then((article) => {
        res.status(200).json(article);
    }).catch(error => res.status(400).json({ error }));
};

exports.updateArticle = (req, res, next) => {
    let formatedContent = req.body.content.replaceAll(`"`,`\\"`)
    const articleObject = new Article({
        title: req.body.title,
        content: formatedContent,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    articleObject.updateArticle(req.params.id).then((article) => {
        res.status(200).json(article);
    }).catch(error => res.status(400).json({ error }));
};