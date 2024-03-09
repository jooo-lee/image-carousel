// Shifts image carousel according to index to go to desired slide
const goToSlide = function goToSlide(slideIndex) {
    const imageContainer = document.querySelector('#pokémon-image-container');
    if (imageContainer.childElementCount < 2) return;
    const distToShiftBy =
        imageContainer.children[1].getBoundingClientRect().x -
        imageContainer.children[0].getBoundingClientRect().x;
    imageContainer.style.right = (slideIndex - 1) * distToShiftBy + 'px';
};

export default goToSlide;
