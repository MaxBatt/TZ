$(document).ready(function(){
	
	$('.box').hover(function(){
		var clear =  $(this).children("div[data-clearimage]").data('clearimage');
		//alert(clear);
		$('.thumbnail-caption').css({
			'background': 'url(' + clear + ')',
			'background-repeat': 'no-repeat',
			'background-size': '100%'
		});
	});
	
});