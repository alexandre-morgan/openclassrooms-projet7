const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const articlesRRoutes = require('./routes/articleR');

const articles9Routes = require('./routes/article9');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// Routes
app.use('/api/articlesR', articlesRRoutes);

app.use('/api/articles9', articles9Routes);


module.exports = app;