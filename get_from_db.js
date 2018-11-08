var mongo = require('mongodb').MongoClient;
var urldb = "mongodb://localhost:27017/";

mongo.connect(urldb, {useNewUrlParser: true}, function (err, database) {
    if (err) throw err;
    var dbo = database.db("database");
    exports.db = dbo;
});