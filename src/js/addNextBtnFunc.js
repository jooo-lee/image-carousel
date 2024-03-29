import beginSlideTimer from './beginSlideTimer';
import goToSlide from './goToSlide';
import setActiveNavDot from './setActiveNavDot';

const addNextBtnFunc = function addNextBtnFunctionality(
    currentImage,
    numberOfImages
) {
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', () => {
        // Stop at last image in carousel
        if (currentImage.index === numberOfImages) {
            beginSlideTimer(currentImage, numberOfImages);
            return;
        }

        // Display next image in imageContainer
        const newImageIndex = currentImage.index + 1;
        goToSlide(newImageIndex);
        setActiveNavDot(newImageIndex);
        currentImage.index = newImageIndex;
        beginSlideTimer(currentImage, numberOfImages);
    });
};

export default addNextBtnFunc;
