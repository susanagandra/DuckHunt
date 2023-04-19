const createDog = () => {
  const dog = document.createElement('div');
  dog.id = "dog";
  document.body.appendChild(dog);
}

createDog();

const dogElement = document.getElementById("dog");
let dogPosX = 0;
let dogPosY = 68;
let dogSpeedX = 0.2;
let dogSpeedY = 0;

const updateDogPosition = () => {

  dogPosX += dogSpeedX;

  if (dogPosX > 10) {
    dogElement.style.backgroundPosition = "-24px -30px";
    dogElement.style.backgroundPosition = "-207px -30px";
    dogElement.style.backgroundPosition = "-387px -24px";
    dogElement.style.backgroundPosition = "-207px -30px";
  };

  if (dogPosX >= 40) {
    dogElement.style.backgroundPosition = "-747px -6px";
    dogSpeedX = 0;
  };
  
  dogElement.style.left = dogPosX + "%";
  dogElement.style.top = dogPosY + "%";
}

setInterval(updateDogPosition, 10);
