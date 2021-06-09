const { response } = require('express');
const {executeSql} = require('../services/db');

class User {
        userId = null;
        email = '';
        password = '';
        dateOfCreation = '';
        lastname = '';
        firstname = '';
        isActive = 1;
        lastLog = 0;

        constructor(data = null) {
            if(data != null) {
                if(data.email) this.email = data.email;
                if(data.password) this.password = data.password;
                if(data.lastname) this.lastname = data.lastname;
                if(data.firstname) this.firstname = data.firstname;
                if(data.lastLog) this.lastLog = data.lastLog;
            }
        };

        addUser() {
            let sqlQuery = `INSERT INTO users (userId, email, password, dateOfCreation, lastname, firstname, isActive, lastLog) 
            VALUES (NULL, "${this.email}", "${this.password}", NOW(), "${this.lastname}","${this.firstname}", 1, ${this.lastLog})`;
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
        updateUser(userId) {
            let sqlQuery = `UPDATE Users SET firstname="${this.firstname}", lastname="${this.lastname}", email="${this.email}" WHERE userId = ${userId}`;
            return executeSql(sqlQuery);
        }
        updateUserWPassword(userId) {
            let sqlQuery = `UPDATE Users SET firstname="${this.firstname}", lastname="${this.lastname}", email="${this.email}", password="${this.password}" WHERE userId = ${userId}`;
            return executeSql(sqlQuery);
        }  
        updateUserLog(userId) {
            let sqlQuery = `UPDATE Users SET lastLog="${this.lastLog}" WHERE userId = ${userId}`;
            return executeSql(sqlQuery);
        } 
        desactivateUser(userId) {
            let sqlQuery = `UPDATE Users SET isActive=0 WHERE userId = ${userId}`;
            return executeSql(sqlQuery); 
        } 
}
module.exports = User;