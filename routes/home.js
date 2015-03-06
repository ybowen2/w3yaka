/**
 * home.js
 * Controller class to render the home page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

// Load JSON data
var models = require("../models");
var guest = "Guest";

exports.view = function(req, res) {
	//find the Guest from the database
	models.User.findOne({"username": guest})
		.exec(displayUser);

	//callback function to render the page with users info
	function displayUser (err, user) {
		console.log("########### Loading home page...");

		var random_num = Math.random();
		if (random_num > 0.5) {
			res.render('home', user);
		}
		else {
			res.render('home_alternate', user);
		}
	}
};