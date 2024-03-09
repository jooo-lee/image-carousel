/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/beldum.png
const beldum_namespaceObject = __webpack_require__.p + "assets/001a3400258d1ed6f639.png";
;// CONCATENATED MODULE: ./src/assets/metang.png
const metang_namespaceObject = __webpack_require__.p + "assets/baca27e304945b90189d.png";
;// CONCATENATED MODULE: ./src/assets/metagross.png
const metagross_namespaceObject = __webpack_require__.p + "assets/238c1dd51bce0d98694f.png";
;// CONCATENATED MODULE: ./src/assets/bellsprout.png
const bellsprout_namespaceObject = __webpack_require__.p + "assets/9d6650c02390d7bf380c.png";
;// CONCATENATED MODULE: ./src/assets/weepinbell.png
const weepinbell_namespaceObject = __webpack_require__.p + "assets/2c0885abb26738a1f9a2.png";
;// CONCATENATED MODULE: ./src/assets/victreebel.png
const victreebel_namespaceObject = __webpack_require__.p + "assets/446b7a700feead59aa5c.png";
;// CONCATENATED MODULE: ./src/js/loadImages.js







const createImage = function createImage(importedImage, alt) {
    const imageElement = document.createElement('img');
    imageElement.src = importedImage;
    imageElement.alt = alt;
    return imageElement;
};

const loadImages = function loadImages(imageContainer) {
    imageContainer.appendChild(createImage(beldum_namespaceObject, 'Beldum Pokémon'));
    imageContainer.appendChild(createImage(metang_namespaceObject, 'Metang Pokémon'));
    imageContainer.appendChild(
        createImage(metagross_namespaceObject, 'Metagross Pokémon')
    );
    imageContainer.appendChild(
        createImage(bellsprout_namespaceObject, 'Bellsprout Pokémon')
    );
    imageContainer.appendChild(
        createImage(weepinbell_namespaceObject, 'Weepinbell Pokémon')
    );
    imageContainer.appendChild(
        createImage(victreebel_namespaceObject, 'Victreebel Pokémon')
    );
};

/* harmony default export */ const js_loadImages = (loadImages);

;// CONCATENATED MODULE: ./src/js/goToSlide.js
// Shifts image carousel according to index to go to desired slide
const goToSlide = function goToSlide(slideIndex) {
    const imageContainer = document.querySelector('#pokémon-image-container');
    if (imageContainer.childElementCount < 2) return;
    const distToShiftBy =
        imageContainer.children[1].getBoundingClientRect().x -
        imageContainer.children[0].getBoundingClientRect().x;
    imageContainer.style.right = (slideIndex - 1) * distToShiftBy + 'px';
};

/* harmony default export */ const js_goToSlide = (goToSlide);

;// CONCATENATED MODULE: ./src/js/setActiveNavDot.js
const setActiveNavDot = function setActiveNavDot(index) {
    document
        .querySelector('.active-nav-dot')
        .classList.remove('active-nav-dot');
    const newActiveNavDot = document.querySelector(`[data-index="${index}"]`);
    newActiveNavDot.classList.add('active-nav-dot');
};

/* harmony default export */ const js_setActiveNavDot = (setActiveNavDot);

;// CONCATENATED MODULE: ./src/js/beginSlideTimer.js



let intervalID;

// Automatically moves to next slide every 5 seconds
const beginSlideTimer = function advanceSlideEveryFiveSeconds(
    currentImage,
    numberOfImages
) {
    clearInterval(intervalID);
    intervalID = setInterval(() => {
        if (currentImage.index === numberOfImages) {
            // Loops back to start of slides
            js_goToSlide(1);
            currentImage.index = 1;
            js_setActiveNavDot(1);
        } else {
            const newImageIndex = currentImage.index + 1;
            js_goToSlide(newImageIndex);
            js_setActiveNavDot(newImageIndex);
            currentImage.index = newImageIndex;
        }
    }, 5000);
};

/* harmony default export */ const js_beginSlideTimer = (beginSlideTimer);

;// CONCATENATED MODULE: ./src/js/createNavDots.js



/**
 * Creates navigation dots that indicate to users which slide in the image
 * carousel they are currently viewing. The dots can also be clicked to go
 * to a specific slide.
 */
const createNavDots = function createNavigationDots(
    currentImage,
    numberOfImages
) {
    const navDotsContainer = document.querySelector('#nav-dots-container');

    for (let i = 1; i < numberOfImages + 1; i++) {
        const navDot = document.createElement('button');
        navDot.classList.add('nav-dot');

        // Image carousel starts at first image
        if (i === 1) {
            navDot.classList.add('active-nav-dot');
        }

        navDot.dataset.index = i;
        navDot.addEventListener('click', function () {
            // Track current navigation dot
            document
                .querySelector('.active-nav-dot')
                .classList.remove('active-nav-dot');
            this.classList.add('active-nav-dot');

            // Slide to correct image
            const newImageIndex = parseInt(this.dataset.index);
            js_goToSlide(newImageIndex);
            currentImage.index = newImageIndex;

            js_beginSlideTimer(currentImage, numberOfImages);
        });

        navDotsContainer.appendChild(navDot);
    }
};

/* harmony default export */ const js_createNavDots = (createNavDots);

;// CONCATENATED MODULE: ./src/js/addPrevBtnFunc.js




const addPrevBtnFunc = function addPreviousBtnFunctionality(
    currentImage,
    numberOfImages
) {
    const previousBtn = document.querySelector('#previous-btn');
    previousBtn.addEventListener('click', () => {
        // Stop at first image in carousel
        if (currentImage.index === 1) {
            js_beginSlideTimer(currentImage, numberOfImages);
            return;
        }

        // Display previous image in imageContainer
        const newImageIndex = currentImage.index - 1;
        js_goToSlide(newImageIndex);
        js_setActiveNavDot(newImageIndex);
        currentImage.index = newImageIndex;
        js_beginSlideTimer(currentImage, numberOfImages);
    });
};

/* harmony default export */ const js_addPrevBtnFunc = (addPrevBtnFunc);

;// CONCATENATED MODULE: ./src/js/addNextBtnFunc.js




const addNextBtnFunc = function addNextBtnFunctionality(
    currentImage,
    numberOfImages
) {
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', () => {
        // Stop at last image in carousel
        if (currentImage.index === numberOfImages) {
            js_beginSlideTimer(currentImage, numberOfImages);
            return;
        }

        // Display next image in imageContainer
        const newImageIndex = currentImage.index + 1;
        js_goToSlide(newImageIndex);
        js_setActiveNavDot(newImageIndex);
        currentImage.index = newImageIndex;
        js_beginSlideTimer(currentImage, numberOfImages);
    });
};

/* harmony default export */ const js_addNextBtnFunc = (addNextBtnFunc);

;// CONCATENATED MODULE: ./src/js/animateCarousel.js





const animateCarousel = function animateCarousel(imageContainer) {
    /**
     * We will use index starting at 1 for image and navigation dot indexing.
     * We use an object here so we can pass this object to functions in other modules
     * and keep the index consistent throughout different modules.
     * We can't simply use a variable (say currentImageIndex = 1) here because
     * JavaScript is a pass-by-value language.
     */
    let currentImage = { index: 1 };
    const numberOfImages = imageContainer.childElementCount;
    js_addPrevBtnFunc(currentImage, numberOfImages);
    js_addNextBtnFunc(currentImage, numberOfImages);
    js_createNavDots(currentImage, numberOfImages);
    js_beginSlideTimer(currentImage, numberOfImages);
};

/* harmony default export */ const js_animateCarousel = (animateCarousel);

;// CONCATENATED MODULE: ./src/js/createCarousel.js



const createCarousel = function createCarousel() {
    const imageContainer = document.querySelector('#pokémon-image-container');
    js_loadImages(imageContainer);
    js_animateCarousel(imageContainer);
};

/* harmony default export */ const js_createCarousel = (createCarousel);

;// CONCATENATED MODULE: ./src/js/index.js



js_createCarousel();

/******/ })()
;
//# sourceMappingURL=main.js.map