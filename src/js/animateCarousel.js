// We will use index starting at 1 for image and navigation dot indexing
let currentImageIndex = 1;

const createNavDots = function createNavigationDots(
    imageContainer,
    distToShiftBy,
    numberOfImages
) {
    const navDotsContainer = document.querySelector('#nav-dots-container');
    for (let i = 0; i < numberOfImages; i++) {
        const navDot = document.createElement('button');
        navDot.classList.add('nav-dot');

        // Image carousel starts at first image
        if (i === 0) {
            navDot.classList.add('active-nav-dot');
        }
        navDot.dataset.index = i + 1;
        navDot.addEventListener('click', function () {
            // Track current navigation dot
            document
                .querySelector('.active-nav-dot')
                .classList.remove('active-nav-dot');
            this.classList.add('active-nav-dot');

            // Slide to correct image
            imageContainer.style.right =
                (this.dataset.index - 1) * distToShiftBy + 'px';
            currentImageIndex = parseInt(this.dataset.index);
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

const addPreviousBtnFunctionality = function addPreviousBtnFunctionality(
    imageContainer,
    distToShiftBy
) {
    const previousBtn = document.querySelector('#previous-btn');
    previousBtn.addEventListener('click', () => {
        // Stop at first image in carousel
        if (currentImageIndex === 1) return;

        // Display previous image in imageContainer
        imageContainer.style.right =
            (currentImageIndex - 2) * distToShiftBy + 'px';
        currentImageIndex -= 1;
        setActiveNavDot(currentImageIndex);
    });
};

const addNextBtnFunctionality = function addNextBtnFunctionality(
    imageContainer,
    distToShiftBy,
    numberOfImages
) {
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', () => {
        // Stop at last image in carousel
        if (currentImageIndex === numberOfImages) return;

        // Display next image in imageContainer
        imageContainer.style.right = currentImageIndex * distToShiftBy + 'px';
        currentImageIndex += 1;
        setActiveNavDot(currentImageIndex);
    });
};

const animateCarousel = function animateCarousel(imageContainer) {
    const numberOfImages = imageContainer.childElementCount;
    const distToShiftBy =
        imageContainer.children[1].getBoundingClientRect().x -
        imageContainer.children[0].getBoundingClientRect().x;

    addPreviousBtnFunctionality(imageContainer, distToShiftBy);
    addNextBtnFunctionality(imageContainer, distToShiftBy, numberOfImages);
    createNavDots(imageContainer, distToShiftBy, numberOfImages);
};

export default animateCarousel;
