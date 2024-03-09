import createNavDots from './createNavDots';
import addPrevBtnFunc from './addPrevBtnFunc';
import addNextBtnFunc from './addNextBtnFunc';

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
    addPrevBtnFunc(currentImage);
    addNextBtnFunc(currentImage, numberOfImages);
    createNavDots(currentImage, numberOfImages);
};

export default animateCarousel;
