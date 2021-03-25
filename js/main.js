import { getPhotos, PICTURES_COUNT } from './data.js';
import { placePictures } from './create-pictures.js';


const photos = getPhotos(PICTURES_COUNT);
placePictures(photos);

console.log(photos);
