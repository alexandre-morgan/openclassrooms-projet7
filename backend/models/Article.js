const {executeSql} = require('../services/db');

class Article {
        idArticle = null;
        title = '';
        content = '';
        idUser = '';
        dateOfCreation = '';
        dateOfModification = '';

        constructor(data = null) {
            if(data != null) {
                if(data.title) this.title = data.title;
                if(data.content) this.title = data.content;
                if(data.idUser) this.title = data.idUser;    
            }
        };

        addArticle() {
            let sqlQuery = `INSERT INTO Articles (idArticle, title, content, idUser, dateOfCreation, dateOfModification) 
            VALUES (NULL, "${this.title}", "${this.content}", "${this.idUser}", NOW(), NOW())`;
            return executeSql(sqlQuery);

        };
        getAllArticle() {
            let sqlQuery = 'SELECT * FROM Articles';
            return executeSql(sqlQuery);
        };
        getOneArticle(id) {
            let sqlQuery = `DELETE FROM Articles WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        };
        updateArticle(id) {
            let sqlQuery = `UPDATE Articles SET title="${this.title}", content="${this.content}", idUser="${this.idUser}", dateOfModification=NOW() WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        }
        deleteOneArticle(id) {
            let sqlQuery = `DELETE FROM Articles WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        }
}
module.exports = Article;