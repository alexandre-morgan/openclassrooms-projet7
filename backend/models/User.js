const { response } = require('express');
const {executeSql} = require('../services/db');

class User {
        userId = null;
        email = '';
        password = '';
        dateOfCreation = '';
        lastname = '';
        firstname = '';

        constructor(data = null) {
            if(data != null) {
                if(data.email) this.email = data.email;
                if(data.password) this.password = data.password;
                if(data.lastname) this.lastname = data.lastname;
                if(data.firstname) this.firstname = data.firstname;
            }
        };

        addUser() {
            let sqlQuery = `INSERT INTO users (userId, email, password, dateOfCreation, lastname, firstname) 
            VALUES (NULL, "${this.email}", "${this.password}", NOW(), "${this.lastname}","${this.firstname}")`;
            return executeSql(sqlQuery);
        }
        findOne() {
            let sqlQuery = `SELECT * FROM users WHERE email = "${this.email}" `;
            return executeSql(sqlQuery);
        }
        findOneById(userId) {
            let sqlQuery = `SELECT * FROM users WHERE userId = "${userId}" `;
            return executeSql(sqlQuery);
        }    
        updateUser(userIdt) {
            let sqlQuery = `UPDATE Users SET firstname="${this.firstname}", lastname="${this.lastname}", email="${this.email}" WHERE userId = ${userIdt}`;
            return executeSql(sqlQuery);
        }   
}
module.exports = User;