
const dogMove = () => {
  const dogInterval = 0;
  const spriteSheet = document.getElementById("dog");
  const widthOfSpriteSheet = 1000;
  const widthOfEachSprite = 125;

  let position = 0;
  const speed = 800; 

  dogInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 120px`;

    if (position < widthOfSpriteSheet) {
      position = position +widthOfEachSprite;
    } else {
      position = 0;
      spriteSheet.remove();
    }

  }, speed);
};

dogMove();


