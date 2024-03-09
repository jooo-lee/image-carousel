import goToSlide from './goToSlide';

// We will use index starting at 1 for image and navigation dot indexing
let currentImageIndex = 1;

const createNavDots = function createNavigationDots(numberOfImages) {
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
            currentImageIndex = newImageIndex;
        });

        navDotsContainer.appendChild(navDot);
    }
};

const setActiveNavDot = function setActiveNavDot(index) {
    document
        .querySelector('.active-nav-dot')
        .classList.remove('active-nav-dot');
    const newActiveNavDot = document.querySelector(`[data-index="${index}"]`);
    newActiveNavDot.classList.add('active-nav-dot');
};

const addPreviousBtnFunctionality = function addPreviousBtnFunctionality() {
    const previousBtn = document.querySelector('#previous-btn');
    previousBtn.addEventListener('click', () => {
        // Stop at first image in carousel
        if (currentImageIndex === 1) return;

        // Display previous image in imageContainer
        const newImageIndex = currentImageIndex - 1;
        goToSlide(newImageIndex);
        setActiveNavDot(newImageIndex);
        currentImageIndex = newImageIndex;
    });
};

const addNextBtnFunctionality = function addNextBtnFunctionality(
    numberOfImages
) {
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', () => {
        // Stop at last image in carousel
        if (currentImageIndex === numberOfImages) return;

        // Display next image in imageContainer
        const newImageIndex = currentImageIndex + 1;
        goToSlide(newImageIndex);
        setActiveNavDot(newImageIndex);
        currentImageIndex = newImageIndex;
    });
};

const animateCarousel = function animateCarousel(imageContainer) {
    const numberOfImages = imageContainer.childElementCount;

    addPreviousBtnFunctionality();
    addNextBtnFunctionality(numberOfImages);
    createNavDots(numberOfImages);
};

export default animateCarousel;
