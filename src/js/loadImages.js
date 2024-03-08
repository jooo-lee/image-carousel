import beldumImage from 'assets/beldum.png';
import metangImage from 'assets/metang.png';
import metagrossImage from 'assets/metagross.png';
import bellsproutImage from 'assets/bellsprout.png';
import weepinbellImage from 'assets/weepinbell.png';
import victreebelImage from 'assets/victreebel.png';

const createImage = function createImage(importedImage, alt) {
    const imageElement = document.createElement('img');
    imageElement.src = importedImage;
    imageElement.alt = alt;
    return imageElement;
};

const loadImages = function loadImages(imageContainer) {
    imageContainer.appendChild(createImage(beldumImage, 'Beldum Pokémon'));
    imageContainer.appendChild(createImage(metangImage, 'Metang Pokémon'));
    imageContainer.appendChild(
        createImage(metagrossImage, 'Metagross Pokémon')
    );
    imageContainer.appendChild(
        createImage(bellsproutImage, 'Bellsprout Pokémon')
    );
    imageContainer.appendChild(
        createImage(weepinbellImage, 'Weepinbell Pokémon')
    );
    imageContainer.appendChild(
        createImage(victreebelImage, 'Victreebel Pokémon')
    );
};

export default loadImages;
