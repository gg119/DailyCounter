

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

const Counter = mongoose.model('Counter')
exports.handler = (event, context, callback) => {
    Counter.findOne({AustinC}, (err, res) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(res),
        })
    })
    // database.GetByName(event.headers.name).then((result) => {
    //     callback(null, {
    //         statusCode: 200,
    //         body: JSON.stringify(result),
    //     })
    // })


}