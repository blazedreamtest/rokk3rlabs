jQuery(document).ready(function($){
	
	$(".menu-icon").click(function () {
		if($(this).hasClass("expand")){
			$(".navigation-main").slideUp();
			$(".site-header").css("height","auto");
			setTimeout(function(){
				jQuery('.menu-icon').removeClass('expand');
				jQuery('.menu-icon').addClass('collapse');
			},100);
		}
		if($(this).hasClass("collapse")){
			$(".navigation-main").slideDown();
			$(".site-header").css("height","100%");
			setTimeout(function(){
				jQuery('.menu-icon').addClass('expand');
				jQuery('.menu-icon').removeClass('collapse');
			},100);
		}
		return false;
	});
});