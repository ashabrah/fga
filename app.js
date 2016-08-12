var express = require('express');
var MongoClient = require('mongodb');
var monk =require('monk');
var app = express();
var mongoose = require('mongoose');
var uri = 'mongodb://samr:Reb1992ecca@ds153735.mlab.com:53735/fga' 
//var db = monk(uri);

var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

app.get('/', function(req, res, next){
	
	var db = new Db('fga', new Server('ds153735.mlab.com', 53735));

	//var collection = db.get('students');
	//console.log(db);
	/*collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
		console.log("ddfdf"+e);
    });*/
	db.open(function(err, db) {
		console.log("open");
		cursor = db.collection('students').find();
		cursor.toArray(function(err, documents) {
			console.log(documents);
		});
	});

});


MongoClient.connect(uri, function(err,db){
    	console.log("connected");
    	
});
app.listen(3000);