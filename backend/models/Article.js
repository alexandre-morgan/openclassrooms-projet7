const {executeSql} = require('../services/db');

class Article {
        idArticle = null;
        title = '';
        content = '';
        imageUrl = '';
        isGif = null;
        userId = null;
        dateOfCreation = null;
        dateOfModification = null;
        likes = 0;
        dislikes = 0;

        constructor(data = null) {
            if(data != null) {
                if(data.title) this.title = data.title;
                if(data.content) this.content = data.content;
                if(data.imageUrl) this.imageUrl = data.imageUrl;
                if(data.isGif) this.isGif = data.isGif;
                if(data.userId) this.userId = data.userId;    
            }
        };

        addArticle() {
            let sqlQuery = `INSERT INTO Articles (idArticle, title, content, imageUrl, isGif, userId, dateOfCreation, dateOfModification, likes, dislikes) 
            VALUES (NULL, "${this.title}", "${this.content}", "${this.imageUrl}", "${this.isGif}", "${this.userId}", NOW(), NOW(), "${this.likes}", "${this.dislikes}")`;
            return executeSql(sqlQuery);
        };
        getAllArticle(nbOfArticle) {
            let sqlQuery = `SELECT articles.idArticle, articles.title, articles.content,
            articles.imageUrl, articles.isGif, articles.dateOfModification, users.userId, users.firstname 
            AS firstname, users.lastname AS lastname FROM Articles
            INNER JOIN Users ON articles.userId = users.userId 
            ORDER BY dateOfModification DESC LIMIT ${nbOfArticle}`;
            return executeSql(sqlQuery);
        };
        getOneArticle(id) {
            let sqlQuery = `SELECT articles.idArticle, articles.title, articles.content,
            articles.imageUrl, articles.isGif, articles.dateOfModification, users.userId, users.firstname 
            AS firstname, users.lastname AS lastname FROM Articles 
            INNER JOIN Users ON articles.userId = users.userId 
            WHERE idArticle = "${id}"
            ORDER BY dateOfModification DESC`;
            return executeSql(sqlQuery);
        };
        updateArticle(id) {
            let sqlQuery = `UPDATE Articles SET title="${this.title}", imageUrl="${this.imageUrl}", content="${this.content}",dateOfModification=NOW() WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        };
        deleteOneArticle(id) {
            let sqlQuery = `DELETE FROM Articles WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        };
        
}
module.exports = Article;