import { getPhotos } from '.data.js';
import { placePictures, PICTURES } from '.get-pictures.js';

const photos = getPhotos(25);
placePictures(PICTURES);

console.log(photos);
