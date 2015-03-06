/**
 * digest.js
 * Controller class to render the full digest page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

 //Load JSON data
var models = require("../models");
var guest = "Guest";


/* VIEW THE PAGE */
exports.view = function(req, res) {	
	//find the Guest from the database
	models.User.findOne({"username": guest})
		.exec(displayUser);


	//callback function to render the page with users info
	function displayUser (err, user) {
		console.log("########### Loading digest page...");

		res.render('digest', user);
	}
};






/* ADD A NOTE */
exports.addNote = function(req, res) {
	var noteData = req.body;

	//create the new note model object
	var newNote = new models.Note({
		"title": noteData.title,
		"details": noteData.details
	});

	models.User.findOneAndUpdate(
		//query the user
		{"username": guest},
		//make updates
		{$push: {notes: newNote}, $inc: {noteCount: 1}},
		//if upsert is true, it will push the note onto the array
		{safe: true, upsert: true},
		//callback function
		function (err, user) {
			if (err) console.log(err);
			console.log("########### Added new note.");
			res.redirect("digest#notes");
		}
	);
};

/* ADD AN EVENT */
exports.addEvent = function(req, res) {
	var eventData = req.body;

	//create the new note model object
	var newEvent = new models.Event({
		"title": eventData.title,
		"date": eventData.date,
		"time": eventData.time,
		"location": eventData.location
	});

	models.User.findOneAndUpdate(
		//query the user
		{"username": guest},
		//make updates
		{$push: {events: newEvent}, $inc: {eventCount: 1}},
		//if upsert is true, it will push the note onto the array
		{safe: true, upsert: true},
		//callback function
		function (err, user) {
			if (err) console.log(err);
			console.log("########### Added new event to schedule.");
			res.redirect("digest#schedule");
		}
	);
};





exports.deleteNote = function(req, res) {
	var noteID = req.params.id;

	models.User.findOneAndUpdate(
		//query the user
		{"username": guest},
		//decrement the noteCount
		{$inc: {noteCount: -1}},
		//options
		{safe: true, upsert: true},
		//callback function
		function (err, user) {
			if(err) console.log(err);

			//remove the note
			models.User.findOneAndUpdate(
				{"username": guest},
				{$pull: {notes: {_id: noteID}}},
				{safe: true, upsert: true},
				function (err, note) {
					if (err) console.log(err);
					res.send({
						status: "success"
					});
				}
			);
		}
	);
}

exports.deleteEvent = function (req, res) {
	var eventID = req.params.id;

	//decrement the eventCount
	models.User.findOneAndUpdate(
		{"username": guest},
		{$inc: {eventCount: -1}},
		{safe: true, upsert: true},
		function (err, user) {
			if(err) console.log(err);

			//remove the event
			models.User.findOneAndUpdate(
				{"username": guest},
				{$pull: {events: {_id: eventID}}},
				function (err, note) {
					if (err) console.log(err);
					res.send({
						status: "success"
					});
				}
			);
		}
	);
}