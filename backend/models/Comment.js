const {executeSql} = require('../services/db');

class Comment {
        commentId = null;
        content = '';
        userId = null;
        idArticle = null;
        dateOfCreation = null;
        dateOfModification = null;

        constructor(data = null) {
            if(data != null) {
                if(data.content) this.content = data.content;
                if(data.idArticle) this.idArticle = data.idArticle;
                if(data.userId) this.userId = data.userId;    
            }
        };

        addComment() {
            let sqlQuery = `INSERT INTO Comments (commentId, content, idArticle, userId, dateOfCreation, dateOfModification) 
            VALUES (NULL, "${this.content}", "${this.idArticle}", "${this.userId}", NOW(), NOW())`;
            return executeSql(sqlQuery);
        };
        getAllComments(idArticle, nbOfComments) {
            let sqlQuery = `SELECT comments.commentId, comments.content, comments.dateOfModification, 
            comments.idArticle, comments.userId, users.firstname 
            AS firstname, users.lastname AS lastname FROM Comments 
            INNER JOIN Users ON comments.userId = users.userId WHERE comments.idArticle = "${idArticle}" 
            ORDER BY dateOfModification DESC LIMIT ${nbOfComments}`;
            return executeSql(sqlQuery);
        };
        updateComment(commentId) {
            let sqlQuery = `UPDATE Comments SET content="${this.content}",dateOfModification=NOW() WHERE idComments = "${commentId}"`;
            return executeSql(sqlQuery);
        }
        deleteOneComment(commentId) {
            let sqlQuery = `DELETE FROM Comments WHERE commentId = ${commentId}`;
            return executeSql(sqlQuery);
        }
}
module.exports = Comment;