const {executeSql} = require('../services/db');

class User {
        idUser = null;
        email = '';
        password = '';

        constructor(data = null) {
            if(data != null) {
                if(data.email) this.email = data.email;
                if(data.password) this.password = data.password;
            }
        };



        addUser() {
            let sqlQuery = `INSERT INTO users (idUser, email, password) 
            VALUES (NULL, "${this.email}", "${this.password}")`;
            return executeSql(sqlQuery);
        }
}
module.exports = User;