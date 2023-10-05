
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://hameii:123456hamy@cluster0.sonwzmk.mongodb.net";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
