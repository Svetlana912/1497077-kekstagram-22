const NUMBER_LIKES_MIN = 15;
const NUMBER_LIKES_MAX = 200;
const RANDOM_NAMES = ["Аарон", "Абрам", "Аваз", "Августин", "Авраам", "Агап"];
const AVATAR_IDS = [3, 5, 1, 6, 4, 2];
const MESSAGE_TEXTS = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];
const DESCRIPTION_TEXTS = [
  "Лучшее фото месяца",
  "Лучшее фото недели",
  "Лучшее фото дня",
  "Лучшее фото часа",
];
const DEFAULT_COMMENTS_COUNT = 3;

const getRandomNumber = (min, max) => {
  if (isNaN(min) || isNaN(max)) {
    throw new Error("Некорректный тип аргументов.");
  }
  if (min < 0 || max < 0) {
    throw new Error("Передано отрицательное значение.");
  }
  if (min === max) return min;

  const coef = Math.random();
  const x = min < max ? 1 : 0;

  return Math.floor(
    coef * (Math.floor(max) - Math.floor(min) + x) + Math.floor(min)
  );
};

const getPhotoUrl = (i) => {
  return `photos/${i}.jpg`;
};

const getAvatarUrl = (i) => {
  return `img/avatar-${AVATAR_IDS[i]}.svg`;
};

const randomize = (a, b) => Math.floor(Math.random() * 3) - 1;

const getRandomMessages = (a, n) => {
  const a1 = a.slice();

  return a1.sort(randomize).slice(1, Math.floor(Math.random() * n) + 1);
};

let lastPhotoId = 1;
const getPhotoId = () => {
  return lastPhotoId++;
};

let lastCommentId = 100;
const getCommentId = () => {
  return lastCommentId++;
};

const getComment = () => {
  const idx = getRandomNumber(1, RANDOM_NAMES.length - 1);

  return {
    id: getCommentId(),
    avatar: getAvatarUrl(idx),
    message: getRandomMessages(MESSAGE_TEXTS).join(),
    name: RANDOM_NAMES[idx],
  };
};

const getComments = (n) => {
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(getComment());
  }
  return a;
};

const getPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    const getPhotosArray = () => {
      photos.push(
        {
        id: getPhotoId(),
        url: getPhotoUrl(i),
        description: getRandomMessages(DESCRIPTION_TEXTS).join(),
        likes: getRandomNumber(NUMBER_LIKES_MIN, NUMBER_LIKES_MAX),
        comments: getComments(DEFAULT_COMMENTS_COUNT),
      }
     );
    };
    getPhotosArray();
  }
  return photos;
};

const checkStringLength = (str, maxlength) =>
  typeof str === "string" && str.length <= maxlength;

const photos = getPhotos(25);

console.log(photos);