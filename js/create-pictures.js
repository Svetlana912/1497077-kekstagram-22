const PICTURE_TEMPLATE = document.querySelector('#picture');
const PICTURES_NODE = document.querySelector('.pictures');

if (!PICTURE_TEMPLATE) throw new Error('Шаблон #picture не найден.');
if (!PICTURES_NODE) throw new Error('Нода .pictures не найдена.');

const renderPicture = (data) => {
  const pictureElement = PICTURE_TEMPLATE.content.cloneNode(true);

  const img = pictureElement.querySelector('.picture__img');
  const comments = pictureElement.querySelector('.picture__comments');
  const likes = pictureElement.querySelector('.picture__likes');

  if (img) img.setAttribute('src', data.url);
  if (comments) comments.textContent = data.comment;
  if (likes) likes.textContent = data.likes;

  return pictureElement;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((pictureData) => {
    const pictureElements = renderPicture(pictureData);

    fragment.appendChild(pictureElements);
  });

  return fragment;
};

const removeChildren = (parent, selector) => {
  const children = parent.querySelectorAll(selector);
  children.forEach((child) => parent.removeChild(child));
};

const placePictures = (pictures) => {
  removeChildren(PICTURES_NODE, '.picture');
  PICTURES_NODE.appendChild(renderPictures(pictures));
};

export { placePictures };
