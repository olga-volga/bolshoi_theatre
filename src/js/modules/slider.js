function slider({next = null, prev = null, slideSelector, sliderSelector, slidesWrapperSelector, slidesInnerSelector, effects, autoplay} = {}) {
	const nextBtn = document.querySelector(next),
		  prevBtn = document.querySelector(prev),
		  slider = document.querySelector(sliderSelector),
		  slidesWrapper = document.querySelector(slidesWrapperSelector),
		  slidesInner = document.querySelector(slidesInnerSelector),
		  slides = slidesInner.children,
		  sliderWidth = slidesWrapper.offsetWidth;

	let timerId;

	function makeSlideActive() {
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.opacity = '0';
		}
		slides[0].style.opacity = '1';
	}

	function autoplaySlider() {
		timerId = setInterval(() => {
    		nextSlide();
    	}, 3000);
	}

	function nextSlide() {
		slidesInner.append(slides[0]);
		if (effects) {
			makeSlideActive();
		}
	}

	function previousSlide() {
		slidesInner.prepend(slides[slides.length - 1]);
		if (effects) {
			makeSlideActive();
		}
	}

    slidesInner.style.display = 'flex';
    slidesInner.style.width = `${100 * slides.length}%`;
    slider.style.overflow = 'hidden';

    if (effects) {
		makeSlideActive();
	}

    try {
    	nextBtn.addEventListener('click', () => {
	    	nextSlide();
	    });

	    prevBtn.addEventListener('click', () => {
	    	previousSlide();
	    });
    } catch{}

    if (autoplay) {
    	autoplaySlider();

    	slidesWrapper.addEventListener('mouseenter', () => clearInterval(timerId));
    	slidesWrapper.addEventListener('mouseleave', () => autoplaySlider(timerId));
    }
}

export default slider;