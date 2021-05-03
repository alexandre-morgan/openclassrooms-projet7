const {executeSql} = require('../services/db');

class Article9 {
        idArticle = null;
        idUser = '';
        title = '';
        imageUrl = '';
        likes = 0;
        dislikes = 0;
        dateOfCreation = '';
        dateOfModification = '';

        constructor(data = null) {
            if(data != null) {
                if(data.idUser) this.idUser = data.idUser;    
                if(data.title) this.title = data.title;
                if(data.imageUrl) this.imageUrl = data.imageUrl;
            }
        };

        addArticle() {
            let sqlQuery = `INSERT INTO Articles9 (idArticle, idUser, title, imageUrl, likes, dislikes, dateOfCreation, dateOfModification) 
            VALUES (NULL, "${this.idUser}", "${this.title}", "${this.imageUrl}", "${this.likes}", "${this.dislikes}", NOW(), NOW())`;
            return executeSql(sqlQuery);
        };
        getAllArticle() {
            let sqlQuery = 'SELECT * FROM Articles9';
            return executeSql(sqlQuery);
        };
        getOneArticle(id) {
            let sqlQuery = `DELETE FROM Articles9 WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        };
        updateArticle(id) {
            let sqlQuery = `UPDATE Articles9 SET title="${this.title}", imageUrl="${this.imageUrl}", idUser="${this.idUser}", dateOfModification=NOW() WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        }
        deleteOneArticle(id) {
            let sqlQuery = `DELETE FROM Articles9 WHERE idArticle = ${id}`;
            return executeSql(sqlQuery);
        }
}
module.exports = Article9;