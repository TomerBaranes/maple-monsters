document.addEventListener("DOMContentLoaded", function () {
  const animals = document.querySelectorAll(".animal");

  const randomInRange = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  animals.forEach((animal) => {
    const viewportWidth = window.innerWidth;
    const speed = 0.5;
    const intervalDuration = 50;

    let position = randomInRange(animal.offsetWidth, viewportWidth - 100);
    let direction = Math.round(Math.random()) === 0 ? -1 : 1;
    animal.style.transform = `scaleX(${direction})`;

    const moveAnimal = () => {
      position += speed * direction;

      if (position < 0 || position + animal.offsetWidth > viewportWidth) {
        direction *= -1;
        animal.style.transform = `scaleX(${direction})`;
      }

      animal.style.left = position + "px";

      if (randomInRange(1, 100) === 1) {
        clearInterval(moveInterval);
        setTimeout(() => {
          direction *= -1;
          moveInterval = setInterval(moveAnimal, intervalDuration);

          animal.style.transform = `scaleX(${direction})`;
        }, randomInRange(1000, 2000));
      }
    };

    let moveInterval = setInterval(moveAnimal, intervalDuration);
  });
});
