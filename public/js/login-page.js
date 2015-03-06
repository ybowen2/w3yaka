/**
 * login-page.js
 * Login form validation
 * 
 * Weyaka
 * Wes Okuhara, Yashna Bowen, Kathy Hoang
 */

$(document).ready( function() {
 	/* Handle validation */
 	$("#login-btn").click( function (event) {

 		//get username and password
 		var username = $("#user").val();
 		var password = $("#pass").val();

 		//if no username or password supplied, do not load page
 		if (username === '' || password === '') {
 			alert("Invalid username and/or password.");
 			event.preventDefault();
 		}
 	});
});