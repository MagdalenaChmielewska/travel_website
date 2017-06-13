$(function() {
	function smoothScrool(){
		var $this = $(this),
			href = $this.attr('href'),
			menu = $('.nav-top'),
			target = $(href);

		if(target.length > 0) {
			$('html, body').animate({ scrollTop: target.offset().top }, 1000);
		}
	};

	$(document).ready(function() {
		$('.nav-top a').on('click' , smoothScrool);
		$('.arrow').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $('.section-about').offset().top }, 500, 'linear');
		});
	});

});
