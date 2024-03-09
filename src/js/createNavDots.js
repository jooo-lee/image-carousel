import beginSlideTimer from './beginSlideTimer';
import goToSlide from './goToSlide';

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
            goToSlide(newImageIndex);
            currentImage.index = newImageIndex;

            beginSlideTimer(currentImage, numberOfImages);
        });

        navDotsContainer.appendChild(navDot);
    }
};

export default createNavDots;
