//Make the navbar scroll
$(function() {

	var scroll = $(document).scrollTop();
	var navHeight = $('.navbar').outerHeight();

	$(window).scroll(function() {

		var scrolled = $(document).scrollTop();

		if(scrolled>navHeight) {
			$('.navbar').addClass('animate');

		}
		else {
			$('.navbar').removeClass('animate');
		}

		if(scrolled>scroll) {
			$('.navbar').removeClass('sticky');
		}
		else {
			$('.navbar').addClass('sticky');
		}

		scroll = $(document).scrollTop();

	})
})

