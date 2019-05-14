const mysql = require('mysql');

var connection = mysql.createConnection({
    database: "dailycounter",
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
})

module.exports = {
    GetByName: (name) => {
        return new Promise((resolve, reject) => {
            connection.query("Select " + name + " from Counter",((err, result) => {
                if (err) reject(err);
                var data = result[0][name].toString()
                resolve(data);
            }))
        })
    },

    UpdateValueByName: (name, value) => {
        return new Promise((resolve, reject) => {
            connection.query("Update Counter set " + name + " = ?", [value], ((err, result) => {
                if (err) reject(err);
                return resolve(result);
            }))
        })
        
    },
}