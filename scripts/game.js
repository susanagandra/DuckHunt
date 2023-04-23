let scoreValue = 0;
let deadDucks = 0;
let shots = 3;
let numberofducks = 0;

const overlay = document.getElementById("overlay");

const dogElement = document.getElementById("dog");
const playAgainButton = document.getElementById("overlayPlayAgain");

const sprite = document.createElement('div');
document.body.append(sprite);
sprite.id = "duck";

const playGame = () => {

    overlay.style.display = "none";
    playAgainButton.style.display = "none";
  
    dogMove();

    numberofducks = (Math.random() * 2) + 1;
   
    for (let i = 0; i < numberofducks; i++) {
      setTimeout(() => {
        flyingDuck();
        switchDirections();
      }, 4000);
    };

    setTimeout(() => {
      createLiveDucks();
    }, 2000);
};


const spriteSheet = document.getElementById("duck");
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

  const spriteSheet = document.getElementById("duck"); // get the
  spriteSheet.style.width = 110 + "px";
  spriteSheet.style.height = 110 + "px";
  
  let position = 0;
  let xPosition = window.innerWidth; 
  let yPosition = window.innerHeight; // set the initial y position to the center of the screen
  let xDirection = getRandomDirection(); // initialize xDirection randomly
  let yDirection = getRandomDirection(); // initialize yDirection randomly

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

    if (xPosition < 0) { // check if the div hits the left limit
      xPosition = 0; // set the div to the left limit
      xDirection = getRandomDirection();
      spriteSheet.style.transform = "scaleX(1)"; // change xDirection randomly
    }

    if (yPosition > window.innerHeight - 110) { // check if the div hits the bottom limit
      yPosition = window.innerHeight - 110; // set the div to the bottom limit
      yDirection = getRandomDirection(); // change yDirection randomly
    }

    if (yPosition < 0) { // check if the div hits the top limit
      yPosition = 0; // set the div to the top limit
      yDirection = getRandomDirection(); // change yDirection randomly
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
  }, 50);

  function getRandomDirection() {
    return Math.floor(Math.random() * 3) - 1; // return a random number between -1 and 1
  }
};


const switchDirections = () => {
  const spriteSheet = document.getElementById("duck");

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


  duck.addEventListener('click', (event) => {
            event.target.classList.add("shot");
            const audioShot = new Audio('/sounds/gunSound.mp3');
            audioShot.play();
          
            setTimeout(() => {
              duck.parentNode.removeChild(duck);
              dogwithduck();
              addScore();
              countDeadDucks();
              countShots();

              setTimeout(checkWinner(), 1000);
      
            }, 500);
  });
  


const game = document.getElementById("game");

  game.addEventListener("click", (event) => {
    countShots();
    checkWinner();
  });

const countShots = () => {
    shots -= 1
    document.getElementById("bullet"+(3-shots)).style.display = "none";
};

const reseatShots = () => {
    shots = 0;
    document.getElementById("bullet1").style.display = "inline";
    document.getElementById("bullet2").style.display = "inline";
    document.getElementById("bullet3").style.display = "inline";
};

const dogwithduck = () => {
  const imagemcontainer = document.getElementById("image-container");
  const dogwithduck = document.createElement('div');

  dogwithduck.setAttribute("id", "dogshot");
  imagemcontainer.appendChild(dogwithduck);

    setTimeout(function() {
        const divParaRemover = document.getElementById("dogshot");
        divParaRemover.parentNode.removeChild(divParaRemover);
      }, 5000);
};

const countDeadDucks = () => {
  let duckTodead = document.getElementById("liveDuck"+deadDucks);
    duckTodead.src = "images/duckDead.png";
    deadDucks += 1;
};

const reseatDeadDucks = () =>{
  deadDucks = 0;
  let liveDuck0 = document.getElementById("liveDuck0");
  let liveDuck1 = document.getElementById("liveDuck1");
  let liveDuck2 = document.getElementById("liveDuck2");

  liveDuck0.remove();
  liveDuck1.remove();
  liveDuck2.remove();
};

const addScore = () => {
    let score = document.getElementById("score");
    scoreValue += 100;
    score.textContent = scoreValue;
};
  
const resetScore = () => {
    let score2 = document.getElementById("score");
    scoreValue = 0;
    score2.textContent = scoreValue;
};
    
const checkWinner = () => {
         
  const ducks = document.querySelectorAll(".duck");

  if (ducks.length != 0 && shots === 0) {
      const box = document.getElementById("game");
      const htmlBlock = `<div id=overlay2> <div> <div>Game over!!</div> <div> Try again </div></div></div>`;
      game.innerHTML += htmlBlock;  

      setTimeout(function() {
        const overlay2 = document.getElementById("overlay2"); 
        overlay2.style.display = "none";           
        playAgainButton.style.display = "flex";
        const ducks = document.querySelectorAll('.duck');

        ducks.forEach(duck => {
            duck.remove();});
        
        resetScore();
        reseatDeadDucks();  
        reseatShots();
        }, 6000);
      };
    
  if (ducks.length === 0) {
      const box = document.getElementById("game");
      const htmlBlock = `<div id=overlay2> <div> <div>Congratulation!!</div> <div> You win the game </div></div></div>`;
      game.innerHTML += htmlBlock;          
 
      setTimeout(function() {
        const overlay2 = document.getElementById("overlay2");
        overlay2.style.display = "none";
        playAgainButton.style.display = "flex";
        resetScore();
        reseatDeadDucks();  
        reseatShots();      
        }, 6000);
      };
};
    
const createLiveDucks = () => {
  const liveduck = document.getElementById("liveduck");
      for (let i = 0; i < numberofducks; i++) {
        const duckImg = document.createElement("img");
        duckImg.id = "liveDuck" + i;
        duckImg.src = "images/duckLive.png";
        duckImg.alt = "duck lives";
        document.body.appendChild(duckImg);
      };
};

const dogMove = () => {
  const dog = document.createElement('div');
  document.body.append(dog);
  dog.id = "dog";
    
  const spriteSheet = document.getElementById("dog");
  const widthOfSpriteSheet = 1000;
  const widthOfEachSprite = 125;
    
  let position = 0;
    
  const audioBark = new Audio('/sounds/barkDucks.mp3');
  const audioSniff = new Audio('/sounds/sniff.mp3');
  audioSniff.play();
  audioBark.play();
    
    const interval = setInterval(() => {
        spriteSheet.style.backgroundPosition = `-${position}px 120px`;
    
        if (position < widthOfSpriteSheet) {
          position = position + widthOfEachSprite;
        } else {
          position = 0;
          clearInterval(interval);
          spriteSheet.remove();
          audioBark.pause();
          audioBark.currentTime = 0;
          audioSniff.currentTime = 0;
          audioBark.onended = () => {
            audioBark.remove();
          };
          audioSniff.onended = () => {
            audioSniff.remove();
          };
        }
      }, 800);
};
    
      
  

      


