jQuery(document).ready(function($){

	$('select').fauxSelect({

	});
	$('form').on('submit', function(e){
		e.preventDefault();
		console.log($(this).serialize());
	});
});
