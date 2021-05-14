const {executeSql} = require('../services/db');

class Article {
        idArticle = null;
        title = '';
        content = '';
        imageUrl = '';
        isGif = null;
        idUser = null;
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
                if(data.idUser) this.idUser = data.idUser;    
            }
        };

        addArticle() {
            let sqlQuery = `INSERT INTO Articles (idArticle, title, content, imageUrl, isGif, idUser, dateOfCreation, dateOfModification, likes, dislikes) 
            VALUES (NULL, "${this.title}", "${this.content}", "${this.imageUrl}", "${this.isGif}", "${this.idUser}", NOW(), NOW(), "${this.likes}", "${this.dislikes}")`;
            return executeSql(sqlQuery);
        };
        getAllArticle() {
            let sqlQuery = 'SELECT * FROM Articles ORDER BY dateOfCreation DESC';
            return executeSql(sqlQuery);
        };
        getOneArticle(id) {
            let sqlQuery = `SELECT * FROM Articles WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        };
        updateArticle(id) {
            let sqlQuery = `UPDATE Articles SET title="${this.title}", imageUrl="${this.imageUrl}", content="${this.content}",dateOfModification=NOW() WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        }
        deleteOneArticle(id) {
            let sqlQuery = `DELETE FROM Articles WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        }
}
module.exports = Article;