MongoClient = require('mongodb').MongoClient;
urldb = "mongodb://localhost:27017/";

MongoClient.connect(urldb, {useNewUrlParser: true}, function (err, database) {
    if (err) throw err;
    var dbo = database.db("database");
    dbo.collection("heroes").find({}).toArray(function (err, data) {
        if (err) throw err;
        exports.data = data;
        database.close();
    });
});