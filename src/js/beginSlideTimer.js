import goToSlide from './goToSlide';
import setActiveNavDot from './setActiveNavDot';

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
            goToSlide(1);
            currentImage.index = 1;
            setActiveNavDot(1);
        } else {
            const newImageIndex = currentImage.index + 1;
            goToSlide(newImageIndex);
            setActiveNavDot(newImageIndex);
            currentImage.index = newImageIndex;
        }
    }, 5000);
};

export default beginSlideTimer;
