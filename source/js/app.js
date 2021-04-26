$(function () {
	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close');
	});

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
	});

	$('.contact-slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		dots: true,
		arrows: false,
	});

	$('.article-slider__box').slick({
		prevArrow:
			'<button class="article-slider__arrow article-slider__arrow-left"><img src="assets/img/icons/arrow-slider-left.svg" alt="arrow left"></button>',
		nextArrow:
			'<button class="article-slider__arrow article-slider__arrow-right"><img src="assets/img/icons/arrow-slider-right.svg" alt="arrow right"></button>',
	});

	if ('.gallery__inner') {
		var mixer = mixitup('.gallery__inner', {
			load: {
				filter: '.living',
			},
		});
	}
});
