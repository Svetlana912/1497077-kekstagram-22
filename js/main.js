// версия с вебинара
const randomInteger = (min, max) => {
  if (isNaN(min) || isNaN(max)) {
  throw new Error('Некорректный тип аргументов.');
  }
  if (min < 0 || max < 0) {
  throw new Error('Передано отрицательное значение.');
  }
  if (min === max) return min;
  const coef = Math.random();
  const x = (min < max) ? 1 : 0;

  return Math.floor(coef *(Math.floor(max) - Math.floor(min) + x) + Math.floor(min)); 
} 
 
let result = 0;
try {
  result = randomInteger(1, 15);
  } catch (error) {
  alert(error);
  }
  
// моя версия
function randomInteger (min, max) {
  if (min < 0 || max < 0 || isNaN(min) || isNaN(max)) {
  throw new Error('Вы таки прислали фигню.');
  }
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
} 

try {
  randomInteger(1, 15);
  } catch (err) {
  alert(err);
  }

// функция проверки длины сообщения
const foo = (str, maxlength) => (typeof str === 'string' && 
  str.length <= maxlength) 
     
      
  
  

  
  ;  