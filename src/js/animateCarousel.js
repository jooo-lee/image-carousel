const animateCarousel = function animateCarousel(imageContainer) {
    let currentImageIndex = 1;
    const numberOfImages = imageContainer.childElementCount;
    const distToShiftBy =
        imageContainer.children[1].getBoundingClientRect().x -
        imageContainer.children[0].getBoundingClientRect().x;

    const previousBtn = document.querySelector('.arrow-button.previous');
    previousBtn.addEventListener('click', () => {
        // Stop at first image in carousel
        if (currentImageIndex === 1) return;

        // Display previous image in imageContainer
        imageContainer.style.right =
            (currentImageIndex - 2) * distToShiftBy + 'px';
        currentImageIndex -= 1;
    });

    const nextBtn = document.querySelector('.arrow-button.next');
    nextBtn.addEventListener('click', () => {
        // Stop at last image in carousel
        if (currentImageIndex === numberOfImages) return;

        // Display next image in imageContainer
        imageContainer.style.right = currentImageIndex * distToShiftBy + 'px';
        currentImageIndex += 1;
    });
};

export default animateCarousel;
