import goToSlide from './goToSlide';
import setActiveNavDot from './setActiveNavDot';
import createNavDots from './createNavDots';
import addPrevBtnFunc from './addPrevBtnFunc';

/**
 * We will use index starting at 1 for image and navigation dot indexing.
 * We use an object here so we can pass this object to functions in other modules
 * and keep the index consistent throughout different modules.
 * We can't simply use a variable (say currentImageIndex = 1) here because
 * JavaScript is a pass-by-value language.
 */
let currentImage = { index: 1 };

const addNextBtnFunctionality = function addNextBtnFunctionality(
    numberOfImages
) {
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', () => {
        // Stop at last image in carousel
        if (currentImage.index === numberOfImages) return;

        // Display next image in imageContainer
        const newImageIndex = currentImage.index + 1;
        goToSlide(newImageIndex);
        setActiveNavDot(newImageIndex);
        currentImage.index = newImageIndex;
    });
};

const animateCarousel = function animateCarousel(imageContainer) {
    const numberOfImages = imageContainer.childElementCount;
    addPrevBtnFunc(currentImage);
    addNextBtnFunctionality(numberOfImages);
    createNavDots(currentImage, numberOfImages);
};

export default animateCarousel;
