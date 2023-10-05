const mongo = require ( "mongodb" ).MongoClient;
const url = "mongodb+srv://hameii:123456hamy@cluster0.sonwzmk.mongodb.net" ;

mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
	if (err) {
		console .log(err);
		process.exit( 0 );
	}

	console .log( "database connected!" );
	db.close();
});
