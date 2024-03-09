import goToSlide from './goToSlide';
import setActiveNavDot from './setActiveNavDot';

const addPrevBtnFunc = function addPreviousBtnFunctionality(currentImage) {
    const previousBtn = document.querySelector('#previous-btn');
    previousBtn.addEventListener('click', () => {
        // Stop at first image in carousel
        if (currentImage.index === 1) return;

        // Display previous image in imageContainer
        const newImageIndex = currentImage.index - 1;
        goToSlide(newImageIndex);
        setActiveNavDot(newImageIndex);
        currentImage.index = newImageIndex;
    });
};

export default addPrevBtnFunc;
