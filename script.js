$(document).ready(function(){
	console.log('document is ready');



$('button').click(function(){
	var x = $('#input').val();
	console.log(x);
	if (x.lenght ! == 10){
		alert("Please put in your Birthday!");
	}
});

});