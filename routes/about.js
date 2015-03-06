/**
 * about.js
 * Controller class to render the about page.
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

 //Load JSON data
exports.view = function(req, res) {
	console.log("# Loading about page...");
	
	res.render('about');
};