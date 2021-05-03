const ArticleR = require('../models/ArticleR');

exports.getAllArticle = (req, res, next) => {
    const articleObject = new ArticleR();
    articleObject.getAllArticle().then(articles => {
        res.status(200).json(articles)
    }).catch(error => res.status(400).json({ error }));
};

exports.getOneArticle = (req, res, next) => {
    const articleObject = new ArticleR();
    articleObject.getOneArticle(req.params.id).then(article => {
        res.status(200).json(article)
    }).catch(error => res.status(400).json({ error }));
};

exports.deleteOneArticle = (req, res, next) => {
    const articleObject = new ArticleR();
    articleObject.deleteOneArticle(req.params.id).then(() => {
        res.status(200).end();
    }).catch(error => res.status(400).json({ error }));
};

exports.addArticle = (req, res, next) => {
    const articleObject = new ArticleR(req.body);
    articleObject.addArticle().then((article) => {
        res.status(200).json(article);
    }).catch(error => res.status(400).json({ error }));
};

exports.updateArticle = (req, res, next) => {
    const articleObject = new ArticleR(req.body);
    articleObject.updateArticle(req.params.id).then((article) => {
        res.status(200).json(article);
    }).catch(error => res.status(400).json({ error }));

}