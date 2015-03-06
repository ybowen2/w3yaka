
$(document).ready( function() {

  //When the Google Calendar link is clicked
  $("#googleLink").click( function init(event){
   	startAuth();
   	console.log("Signing in to Google Calendar");
  });
});


function startAuth (event) {
  var authorizationUrlBase = 'https://accounts.google.com/o/oauth2/auth';
  var redirect = 'https://www.google.com/calendar/render';
  var clientId = '897711787704-k22vac8ld5e5duptvne3fjjbtvgl01ss.apps.googleusercontent.com';
  var scopes = 'https://www.googleapis.com/auth/calendar';
	var url = authorizationUrlBase;
	url += '?response_type=code'
		+ '&redirect_uri='+encodeURIComponent(redirect)
		+ '&client_id=' +encodeURIComponent(clientId)
		+ '&scope=' + encodeURIComponent(scopes);

	window.open(url,1);
}