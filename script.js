$(document).ready(function(){
	console.log('document is ready');



$('button').click(function(){
	var x = $('input').val();
	if (x.length !== 10){
		alert("Please put in your Birthday!");
	}
});

});