$(document).ready(function(){
	window.totalE = window.totalE || {};
	var $total = $(window.totalE);
	$total.on('total', function(e, type, name){
		console.log('ok');
		mz[type](name);
	});
	$('.cruze_logo').on('click', function(e){
		
	});
});