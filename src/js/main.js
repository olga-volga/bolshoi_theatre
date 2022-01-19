import menu from './modules/menu';
import scroll from './modules/scroll';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	menu();	
	scroll();
	slider({
		next: '.arrow_next',
		prev: '.arrow_prev',
		sliderSelector: '.main-slider',
		slidesWrapperSelector: '.main-slider__wrapper',
		slidesInnerSelector: '.main-slider__inner',
		effects: true,
		autoplay: false
	});
	slider({
		sliderSelector: '.slider',
		slidesWrapperSelector: '.slider__wrapper',
		slidesInnerSelector: '.slider__inner',
		effects: false,
		autoplay: true
	});
});