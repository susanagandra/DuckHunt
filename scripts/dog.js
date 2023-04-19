const createDog = () => {
  const dog = document.createElement('div');
  dog.id = "dog";
  document.body.appendChild(dog);
}

createDog();

const moveDogToRight = () => {
  const speed = 100; 

  tID = setInterval(() => {
    document.getElementById("dog").setAttribute("class");
    document.getElementById("dog").style.backgroundImage = `url("/images/duckhunt.png")`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, speed); 
}


const dogEl = document.getElementById("dog");
let dogPosX = 10;
let dogPosY = 500;
let dogSpeedX = 2;
let dogSpeedY = 0;
let dogDirection = "right";

const updateDogPosition = () => {
  dogPosX += dogSpeedX;

  if (dogPosX >= window.innerWidth - dogEl.offsetWidth) {
    dogDirection = "left";
    dogEl.classList.add("flip");
    dogSpeedX = -dogSpeedX;
  } else if (dogPosX <= 0) {
    dogDirection = "right";
    dogEl.classList.remove("flip");
    dogSpeedX = -dogSpeedX;
  }
  
  dogPosY += dogSpeedY;

  if (dogPosY >= 400) {
    dogSpeedY = -dogSpeedY;
  } else if (dogPosY <= 200) {
    dogSpeedY = -dogSpeedY;
  }
  
  dogEl.style.left = dogPosX + "px";
  dogEl.style.top = dogPosY + "px";
}

setInterval(updateDogPosition, 10);
moveDogToRight();
