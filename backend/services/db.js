const mysql = require('mysql');

// Connexion à la base données MySQL locale
const db = mysql.createConnection({

    host: process.env.host_bd,
 
    user: process.env.id_bd,
 
    password: process.env.pwd_bd,

    database:process.env.database_bd
 
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

exports.db;

// Configuration d'une promesse pour les requêtes SQL
exports.executeSql = (sql) => {
    return new Promise((resolve, reject) => {
        db.query(sql, (error, data) => {
            if(error) reject(error);
            resolve(data);
        });
    });    
};

exports.preparer = function(mysql, sqlQuery, params) {
    sqlQuery = mysql.format(sqlQuery, params)
    .replace(/`/g, "'")
    .replace(/'\.'/g, ".")
    return sqlQuery
}