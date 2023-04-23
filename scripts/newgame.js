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

  spriteSheet.addEventListener("animationend", function handleAnimationEnd() {
    const newRandomDirection =
      directions[Math.floor(Math.random() * directions.length)];
      spriteSheet.classList.toggle("animateduck-" + randomDirection);
      spriteSheet.classList.toggle("animateduck-" + newRandomDirection);
      spriteSheet.removeEventListener("animationend", handleAnimationEnd);
      spriteSheet.addEventListener("animationend", handleAnimationEnd); 
  });

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const flyingDuck = () => {
};

flappingDuck();
