const { response } = require('express');
const {executeSql} = require('../services/db');

class User {
        idUser = null;
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
            let sqlQuery = `INSERT INTO users (idUser, email, password, dateOfCreation, lastname, firstname) 
            VALUES (NULL, "${this.email}", "${this.password}", NOW(), "${this.lastname}","${this.firstname}")`;
            return executeSql(sqlQuery);
        }
        findOne() {
            let sqlQuery = `SELECT * FROM users WHERE email = "${this.email}" `;
            return executeSql(sqlQuery);
        }       
}
module.exports = User;