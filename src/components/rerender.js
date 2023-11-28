const rerender = () => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNumber = getRandomNumber(1, 10);
  let z = 0;
  z += randomNumber;
  return z;
};
export default rerender;
