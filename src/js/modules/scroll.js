function scroll() {
    const docElement = document.documentElement,
          localLinks = document.querySelectorAll('[href^="#"]'),
		  speedScroll = 0.25;

	localLinks.forEach(item => {
		if (item.getAttribute("href") != '#') {
			item.addEventListener('click', function(e) {
				e.preventDefault();

				let scrollTop = docElement.scrollTop,
					hash = this.hash,
					elemToScroll = document.querySelector(hash).getBoundingClientRect().top,
					start = null;

				requestAnimationFrame(step);

				function step(time) {
					if (start === null) {
						start = time;
					}
					let progress = time - start,
						pxToScroll = (elemToScroll < 0 ? Math.max(scrollTop - progress / speedScroll, scrollTop + elemToScroll) : Math.min(scrollTop + progress / speedScroll, scrollTop + elemToScroll));

					window.scrollTo(0, pxToScroll);

					if (pxToScroll != scrollTop + elemToScroll) {
						requestAnimationFrame(step);
					} else {
						location.hash = hash;
					}
				}
			});
		}
	});
}

export default scroll;