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

});