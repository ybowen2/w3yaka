/**
 * login.js
 * Controller class to render the login page
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

exports.view = function(req, res) {
	console.log("# Loading login page...");

	res.render('login');
};