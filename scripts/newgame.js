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

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const flyingDuck = () => {

  let element = document.getElementById("animateduck");

  const directions = ["right", "left", "right-top", "left-top"];
  const randomDirection =
    directions[Math.floor(Math.random() * directions.length)];

  element.classList.toggle("animateduck-" + randomDirection);

  tID = setInterval(() => {
    if (element) {
      element.style.backgroundPosition = `-${position}px 0px`;
    }

    if (position < 210) {
      position = position + 70;
    } else {
      position = 70;
    }
  }, interval);

  element.addEventListener("animationend", function handleAnimationEnd() {
    const newRandomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    element.classList.toggle("duck-" + randomDirection);
    element.classList.toggle("duck-" + newRandomDirection);
    element.removeEventListener("animationend", handleAnimationEnd);
    element.addEventListener("animationend", handleAnimationEnd); 
},)

};




const createDuck = () => {
  flappingDuck();
 // flyingDuck();
};

createDuck();

