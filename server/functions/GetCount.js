
const database = require('./database');

exports.handler = (event, context, callback) => {
    database.GetByName(event.headers.name).then((result) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(result),
        }) 
    })
    

}