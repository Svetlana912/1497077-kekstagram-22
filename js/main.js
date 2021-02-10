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

let result = 0;
try {
  result = getRandomNumber(1, 15);
} catch (error) {
  alert(error);
}

const checkStringLength = (str, maxlength) =>
  typeof str === "string" && str.length <= maxlength;
