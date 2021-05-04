const { response } = require('express');
const {executeSql} = require('../services/db');

class User {
        idUser = null;
        email = '';
        password = '';
        dateOfCreation = '';

        constructor(data = null) {
            if(data != null) {
                if(data.email) this.email = data.email;
                if(data.password) this.password = data.password;
            }
        };

        addUser() {
            let sqlQuery = `INSERT INTO users (idUser, email, password, dateOfCreation) 
            VALUES (NULL, "${this.email}", "${this.password}", NOW())`;
            return executeSql(sqlQuery);
        }
        findOne() {
            let sqlQuery = `SELECT * FROM users WHERE email = "${this.email}" `;
            return executeSql(sqlQuery);
        }       
}
module.exports = User;