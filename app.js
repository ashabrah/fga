var express = require('express');
var MongoClient = require('mongodb');
var app = express();
var mongoose = require('mongoose');
var uri = 'mongodb://heroku_npcx43xq:pavdea4s5oe0t1go3q6h35ogcq@ds153715.mlab.com:53715/heroku_npcx43xq' 


var db = mongoose.connection;


app.get('/', function(req, res, next){
	
	db.on('error', console.error);
	db.once('open', function(){
		console.log("vandacchu");
	});
	mongoose.connect(uri);
	var studentSchema = new mongoose.Schema({
 						 firstName: String 
						, lastName: String
						, email: String
						, address: String
						, phone: Number
					});
	var Student = mongoose.model('student', studentSchema);
	Student.find({}, function(err, students) {
  		if (err) return console.error(err);
  		console.log(JSON.stringify(students));
	});

});


MongoClient.connect(uri, function(err,db){
    	console.log("connected");
    	
});
app.listen(3000);