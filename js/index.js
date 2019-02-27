$(function(){
	$('.mobile-nav-trigger').click(function(){
		$(this).next().toggle();
		return false;
	});
});

$(function(){
	$('.menuDropDown').on('click',function(e) {
		$('.mobile-nav-trigger').next().slideUp();
	});
});