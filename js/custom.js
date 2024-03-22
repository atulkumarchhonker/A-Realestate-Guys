
$(function () {
	"use strict";
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
	"use strict";
	  
	
	$(".menuBtn").click(function() {
		$(this).toggleClass('closeMenuBtn');
        $('.menuContainer').stop().fadeToggle().toggleClass('active');
        $('.header').toggleClass('notfixed');
        $('body').toggleClass('overflow-hidden');
    });
	
	$(".menuContainer li a").click(function () {
		$(".menuBtn").toggleClass("closeMenuBtn");
		$(".menuContainer").stop().slideToggle(300);
		$("body").toggleClass("overflow-hidden");
	});
	$(".plansBtn").click(function(){
		$(".plansBtn.active").removeClass('active');
		$(this).addClass('active');
		$(".projectsContainer").hide();
		$("#projectsContainer"+$(this).data('target')).fadeIn(300);
	});
	$('[data-magnify]').magnify({
		//movable: false,
		//resizable: false,
		headToolbar: [
			'close'
		],
		initMaximized: true
	});
});
		
$(window).scroll(function(){
	"use strict";
	
	var wScroll = $(this).scrollTop();
	//var $ht = $(".banner").innerHeight() / 2;
	
	if (wScroll > 100) {
		$(".header, .fixed-form").addClass("fixed");
	} else {
		$(".header, .fixed-form").removeClass("fixed");
	}
});