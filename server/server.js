const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const database = require('./database');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get(["/getAustin/:name", "/getZach/:name", "/getKarl/:name"], (req, res) => {
    database.GetByName(req.params.name).then((result) => {
        res.end(result)
    })
    
})

app.post(["/postAustin/:name", "/postZach/:name", "/postKarl/:name"], (req) => {
    var name = req.params.name
    var value = req.headers.countervalue

    database.UpdateValueByName(name, value).then((result) => {
        return result;
    })

})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

module.exports = app;
module.exports.handler = serverless(app);

