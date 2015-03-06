// Schemas for MongoDB go here 
var Mongoose = require('mongoose');


// NOTE SCHEMA
var NoteSchema = new Mongoose.Schema({
	//key : value pairs
	"title": String,
	"details": String
});

//create the note schema in Mongoose
exports.Note = Mongoose.model('Note', NoteSchema);


// EVENT SCHEMA
var EventSchema = new Mongoose.Schema({
	//key : value pairs
	"title": String,
	"location": String,
	"date": String,
	"time": String
});

exports.Event = Mongoose.model('Event', EventSchema);


// USER SCHEMA
var UserSchema = new Mongoose.Schema({
	"username": String,
	"notes": [NoteSchema],
	"noteCount": {type: Number, min: 0},
	"events": [EventSchema],
	"eventCount": {type: Number, min: 0}
});

exports.User = Mongoose.model('User', UserSchema);