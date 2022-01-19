/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function menu() {
  //Mobile menu
  const body = document.querySelector('body'),
        burger = document.querySelector('.header__burger'),
        menu = document.querySelector('.header__menu');
  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  });
  menu.addEventListener('click', e => {
    menu.classList.remove('active');
    body.classList.remove('lock');
  }); //Fixed menu

  const header = document.querySelector('.header'),
        content = document.querySelector('.content');
  window.addEventListener('scroll', () => {
    if ((window.pageYOffset > 800 || document.documentElement.scrollTop > 800) && document.documentElement.clientWidth <= 992) {
      header.classList.add("sticky");
      content.style.marginTop = '0px';
      content.style.paddingTop = '80px';
    } else {
      header.classList.remove("sticky");
      content.style.marginTop = '';
      content.style.paddingTop = '';
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function scroll() {
  const docElement = document.documentElement,
        localLinks = document.querySelectorAll('[href^="#"]'),
        speedScroll = 0.25;
  localLinks.forEach(item => {
    if (item.getAttribute("href") != '#') {
      item.addEventListener('click', function (e) {
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
              pxToScroll = elemToScroll < 0 ? Math.max(scrollTop - progress / speedScroll, scrollTop + elemToScroll) : Math.min(scrollTop + progress / speedScroll, scrollTop + elemToScroll);
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

/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider() {
  let {
    next = null,
    prev = null,
    slideSelector,
    sliderSelector,
    slidesWrapperSelector,
    slidesInnerSelector,
    effects,
    autoplay
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  } catch {}

  if (autoplay) {
    autoplaySlider();
    slidesWrapper.addEventListener('mouseenter', () => clearInterval(timerId));
    slidesWrapper.addEventListener('mouseleave', () => autoplaySlider(timerId));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])({
    next: '.arrow_next',
    prev: '.arrow_prev',
    sliderSelector: '.main-slider',
    slidesWrapperSelector: '.main-slider__wrapper',
    slidesInnerSelector: '.main-slider__inner',
    effects: true,
    autoplay: false
  });
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])({
    sliderSelector: '.slider',
    slidesWrapperSelector: '.slider__wrapper',
    slidesInnerSelector: '.slider__inner',
    effects: false,
    autoplay: true
  });
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map