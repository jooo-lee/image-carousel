import loadImages from './loadImages';
import animateCarousel from './animateCarousel';

const createCarousel = function createCarousel() {
    const imageContainer = document.querySelector('#pokémon-image-container');
    loadImages(imageContainer);
    animateCarousel(imageContainer);
};

export default createCarousel;
