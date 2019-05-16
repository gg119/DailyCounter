const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = "mongodb://root:root123@ds157516.mlab.com:57516/dailycounter";
const dbName = "dailycounter"


const findDocuments = function (db, name, callback) {
    // Get the documents collection
    
    const collection = db.collection('Counter');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs[0].counters[name]);
    });
}

exports.handler = (event, context, callback) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        assert.equal(null, err);
        const db = client.db(dbName);

        findDocuments(db, event.headers.name, (docs) => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(docs),
            })
        })
    });

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