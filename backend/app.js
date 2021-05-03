const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const { getAllArticle, getOneArticle, deleteOneArticle, addArticle, updateArticle } = require('./controllers/articlesR');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/articlesR', addArticle);

app.put('/api/articlesR/:id', updateArticle);

app.get('/api/articlesR', getAllArticle);

app.get('/api/articlesR/:id', getOneArticle);

app.delete('/api/articlesR/:id', deleteOneArticle);

module.exports = app;