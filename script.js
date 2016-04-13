$(document).ready(function(){
	console.log('document is ready');



$('#bdayb').click(function(){
	var x = $('#bday').val();
	if (x.length !== 10){
		alert("Please put in your Birthday!");
	} else { 
		console.log(x)
	}
});

$('#usernameb').click(function(){
	var y = $('#username').val();
	if (y.length < 1 || y.length > 10){
		alert("Please create a username 10 characters or less!");
	} else {
		console.log(y)
	}
});

$('#passwordb').click(function(){
	var z = $('#password').val();
	if (z !== "12345"){
		alert("Password does not match!");
	} else {
		console.log(z)
	}
});

$(document).keypress(function(e){
	if (e.charCode >= 48 && e.charCode <= 57){
		$('h1').text("It's a number!");
	} else if (e.charCode >= 65 && e.charCode <= 90 || e.charCode >= 97 && e.charCode <= 122){
		$('h1').text("It's a letter!");
	}
});

});