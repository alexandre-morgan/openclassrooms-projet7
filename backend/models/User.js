const db = require('../services/db');

export default class User {
        idUser = null;
        email = '';
        password = '';
        lastName = '';
        firstName = '';

        addUser() {
            let sql = `INSERT INTO users (idUser, email, password, lastName, firstName) 
            VALUES (NULL, "${this.email}", "${this.password}", "${this.lastName}", "${this.firstName}")`;
            console.log(sql);
            db.query(sql);
        }
}