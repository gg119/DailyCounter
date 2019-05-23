const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = "mongodb://root:root123@ds157516.mlab.com:57516/dailycounter";
const dbName = "dailycounter"


const findDocuments = async function (db, name ,callback) {
    // Get the documents collection
    const collection = db.collection('Counter');
    // Find some documents
    const query = await collection.find({}).toArray()
    // .project({"counters.AustinCounter": 1, _id: 0}).toArray()
    callback(query[0].counters[name])
}


exports.handler = (event, context, callback) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(dbName);

        findDocuments(db, event.headers.name, (docs) => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(docs),
            })
        })
        client.close();
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