const db = require('../services/db');

export default class Stuff {
        idStuff = null;
        title = '';
        description = '';
        imageUrl = '';
        price = 0;
        userId = '';

        getAllStuff() {
            let sql = `SELECT * FROM stuff`;
            db.query(sql, (error, result) => {
                if (error) throw error;
                return result
            });
        }
        
}