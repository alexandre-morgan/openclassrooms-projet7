const mysql = require('mysql');



const db = mysql.createConnection({

    host: "localhost",
 
    user: "root",
 
    password: "Ookk",

    database:"opcr_projet7"
 
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

exports.executeSql = (sql) => {
    return new Promise((resolve, reject) => {
        db.query(sql, (error, data) => {
            if(error) reject(error);
            resolve(data);
        });
    });    
};