const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const path = require('path');

const articlesRRoutes = require('./routes/articleR');
const articles9Routes = require('./routes/article9');
const articlesRoutes = require('./routes/article');
const usersRoutes = require('./routes/users');
const commentsRoutes = require('./routes/comments');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
app.use('/api/articlesR', articlesRRoutes);

app.use('/api/articles9', articles9Routes);

app.use('/api/articles', articlesRoutes);

app.use('/api/comments', commentsRoutes);

app.use('/api/users', usersRoutes);


module.exports = app;