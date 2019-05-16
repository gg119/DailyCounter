

const mongoose = require('mongoose');

mongoose.connect("mongodb://root:root123@ds157516.mlab.com:57516/dailycounter", { useNewUrlParser: true })

const schema = new mongoose.Schema({
    _id: {
        $oid: String,
    },
    AustinCounter: String,
    ZachCounter: String,
    AustinCounter: String
})

const Counter = mongoose.model('Counter', schema)
exports.handler = (event, context, callback) => {
    Counter.findOne({AustinC}, (err, res) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(res),
        })
    })
    // app.get(["/getAustin/:name", "/getZach/:name", "/getKarl/:name"], (req, res) => {
    //     database.GetByName(req.params.name).then((result) => {
    //         res.end(result)
    //     })
        
    // })
    
    // app.post(["/postAustin/:name", "/postZach/:name", "/postKarl/:name"], (req) => {
    //     var name = req.params.name
    //     var value = req.headers.countervalue
    
    //     database.UpdateValueByName(name, value).then((result) => {
    //         return result;
    //     })
}