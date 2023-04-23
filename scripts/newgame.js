const sprite = document.createElement('div');
document.body.append(sprite);
sprite.id = "animateduck";

const spriteSheet = document.getElementById("animateduck");
spriteSheet.style.backgroundImage = `url('/images/duckdle.png')`;

const flappingDuck = () => {
  spriteSheet.style.width = 110 + "px";
  spriteSheet.style.height = 110 + "px";
  
  let position = 0;
  const interval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 110px`;

    if (position < 110) {
      position = position + 110;
    } else {
      position = 0;
    }
  }, 90);
};


const flyingDuck = () => {
  flappingDuck();
  const spriteSheet = document.getElementById("animateduck"); 
  spriteSheet.style.width = 110 + "px";
  spriteSheet.style.height = 110 + "px";
  
  let position = 0;
  let xPosition = window.innerWidth; 
  let yPosition = window.innerHeight; 
  let xDirection = getRandomDirection(); 
  let yDirection = getRandomDirection(); 

  const interval = setInterval(() => {
    spriteSheet.style.left = `${xPosition}px`; // move the div horizontally
    spriteSheet.style.top = `${yPosition}px`; // move the div vertically

    spriteSheet.style.backgroundPosition = `-${position}px 0px`; // set background position of the image

    xPosition += xDirection * 10; // modify xPosition
    yPosition += yDirection * 10; // modify yPosition

    if (xPosition > window.innerWidth - 110) { // check if the div hits the right limit
      xPosition = window.innerWidth - 110; // set the div to the right limit
      xDirection = getRandomDirection();
      spriteSheet.style.transform = "scaleX(-1)";
    }

    if (xPosition < 0) { // left limit
      xPosition = 0; 
      xDirection = getRandomDirection();
      spriteSheet.style.transform = "scaleX(1)"; 
    }

    if (yPosition > window.innerHeight - 110) { // bottom limit
      yPosition = window.innerHeight - 110; 
      yDirection = getRandomDirection(); 
    }

    if (yPosition < 0) { // top limit
      yPosition = 0; 
      yDirection = getRandomDirection();
    }

    if (xDirection === 0 && yDirection === 0) { // check if there is no movement
      position = 0; // set the initial background position
    } else {
      if (position < 110) {
        position += 110;
      } else {
        position = 0;
      }
    }
  }, 90);

  function getRandomDirection() {
    return Math.floor(Math.random() * 3) - 1; // return a random number between -1 and 1
  }
};


const switchDirections = () => {
  const spriteSheet = document.getElementById("animateduck");

  tID = setInterval(() => {
    spriteSheet.style.left = `${xPosition}px`; // move the div horizontally
    spriteSheet.style.top = `${yPosition}px`; // move the div vertically
    spriteSheet.style.backgroundPosition = `-${position}px 0px`; // set background position of the image


    if (spriteSheet) {
      spriteSheet.style.backgroundPosition = `-${position}px 0px`;
    }

    if (position < 110) {
      position = position + 110;
    } else {
      position = 110;
    }
  }, interval);

  root = document.documentElement;

  let positionX = spriteSheet.positionX;
  let positionY = spriteSheet.positionY;

  spriteSheet.classList.remove("animeteduck");

  let newPositionX = getRandomInt(25, 95);
  let newPositionY = getRandomInt(25, 95);

  if (newPositionX > positionX && newPositionY != positionY) {
    spriteSheet.classList.add("duck-right-top");
  } else if (newPositionX < positionX && newPositionY != positionY) {
    spriteSheet.classList.add("duck-left-top");
  } else if (newPositionX == positionX && newPositionY > positionY) {
    spriteSheet.classList.add("right");
  } else if (newPositionX == positionX && newPositionY < positionY) {
    spriteSheet.classList.add("left");
  };


  spriteSheet.positionX = newPositionX;
  spriteSheet.positionY = newPositionY;

  void spriteSheet.offsetWidth; // restart da ANIMATION!!!!
  spriteSheet.classList.add("animeteduck");
};



const createDuck = () => {
  flyingDuck();
  switchDirections();
};

createDuck();