const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const { getAllArticle, getOneArticle, deleteOneArticle, addArticle } = require('./controllers/articles');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/articles', addArticle);

app.get('/api/articles', getAllArticle);

app.get('/api/articles/:id', getOneArticle);

app.delete('/api/articles/:id', deleteOneArticle);


module.exports = app;