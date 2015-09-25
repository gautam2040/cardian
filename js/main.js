jQuery(function($){
	"use strict";

	$(window).load(function(){

		$('.intro-tables').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');

		$('header').height( $(window).innerHeight() - 40 );


		$('nav').addClass('original').clone().insertAfter('nav').addClass('navbar-fixed-top').css('position','fixed').css('top','0').css('margin-top','0').removeClass('original');
		$('nav.navbar-fixed-top .navbar-brand img').attr('src', $('nav.navbar-fixed-top .navbar-brand img').data('active-url'));

		
		$('.navbar.navbar-fixed-top .navbar-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 400,
			filter: ':not(.btn)'
		});

		$(".typed").typewriter({
			speed: 60
		});

		$('section .cut').each(function(){
			if($(this).hasClass('cut-top'))
				$(this).css('border-right-width',$(this).parent().width() + "px");
			if($(this).hasClass('cut-bottom'))
				$(this).css('border-left-width',$(this).parent().width() + "px");
		});

		$('.owl-schedule').owlCarousel({
			singleItem: true,
			pagination: true
		});
		$('.owl-testimonials').owlCarousel({
			singleItem: true,
			pagination: true
		});



	});

	

	function onScroll(){
		if( $(window).scrollTop() > 50 ){
			$('nav.original').css('opacity', '0');
			$('nav.navbar-fixed-top').css('opacity', '1');
		}else{
			$('nav.original').css('opacity', '1');
			$('nav.navbar-fixed-top').css('opacity', '0');
		}
	}

	window.addEventListener('scroll', onScroll, false);


});
