import beginSlideTimer from './beginSlideTimer';
import goToSlide from './goToSlide';
import setActiveNavDot from './setActiveNavDot';

const addPrevBtnFunc = function addPreviousBtnFunctionality(
    currentImage,
    numberOfImages
) {
    const previousBtn = document.querySelector('#previous-btn');
    previousBtn.addEventListener('click', () => {
        // Stop at first image in carousel
        if (currentImage.index === 1) {
            beginSlideTimer(currentImage, numberOfImages);
            return;
        }

        // Display previous image in imageContainer
        const newImageIndex = currentImage.index - 1;
        goToSlide(newImageIndex);
        setActiveNavDot(newImageIndex);
        currentImage.index = newImageIndex;
        beginSlideTimer(currentImage, numberOfImages);
    });
};

export default addPrevBtnFunc;
