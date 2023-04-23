let scoreValue = 0;
let deadDucks = 0;
let shots = 3;
let numberofducks = 0;

const overlay = document.getElementById("overlay");

const dogElement = document.getElementById("dog");
const playAgainButton = document.getElementById("overlayPlayAgain");

const playGame = () => {

    overlay.style.display = "none";
    playAgainButton.style.display = "none";
  
    dogMove();

    numberofducks = (Math.random() * 2) + 1;
   
    for (let i = 0; i < numberofducks; i++) {
      setTimeout(() => {
        createDuck();
      }, 4000);
    };

    setTimeout(() => {
      createLiveDucks();
    }, 2000);
};

const createDuck = () => {

  const duck = document.createElement('div');
  document.body.append(duck);
  duck.id = "duck";

    const flightRight  = () =>{
      setInterval(() => {
        duck.classList.add("duck", "right");
        duck.classList.toggle('flapRight');
      }, 400);
    };

    const flightLeft = () => {
      setInterval(() => {
          duck.classList.add("duck", "left");
          duck.classList.toggle('flapLeft');
      }, 400);    
    };

    const flightTopRight = () => {
        setInterval(() => {
          duck.classList.add("duck", "topRight");
          duck.classList.toggle('flapTopRight');
          }, 400);
    };

    const flightTopLeft  = () => {
          setInterval(() => {
          duck.classList.add("duck", "topLeftt");
          duck.classList.toggle('flapTopLeft');
          }, 400);
    };

      setInterval(() => {

            let medialPosition = Math.random() * window.innerHeight + 10;
            let lateralPosition = Math.random() * window.innerWidth + 10;
            duck.style.top = `${medialPosition}px`;
            duck.style.left = `${lateralPosition}px`;

            const newMedialPosition = Math.random() * window.innerHeight;
            const newLateralPosition = Math.random() * window.innerWidth;


            if (lateralPosition < newLateralPosition && medialPosition < newMedialPosition) {
                flightTopLeft();
                lateralPosition = newLateralPosition;
                medialPosition = newMedialPosition;
                duck.style.top = `${newMedialPosition}px`;
                duck.style.left = `${newLateralPosition}px`;
            };

            if (lateralPosition > newLateralPosition && medialPosition == newMedialPosition) {
                flightRight();
                lateralPosition = newLateralPosition;
                medialPosition = newMedialPosition
                duck.style.top = `${newMedialPosition}px`;
                duck.style.left = `${newLateralPosition}px`;
            };
            
            if (lateralPosition < newLateralPosition && medialPosition > newMedialPosition) {
                flightTopRight();
                lateralPosition = newLateralPosition;
                medialPosition = newMedialPosition;
                duck.style.top = `${newMedialPosition}px`;
                duck.style.left = `${newLateralPosition}px`;
            };
          }, 2000);  // update position of duck to new coordinates
           
          //kill duck, calculate shots and score
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
          return duck;
};

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
    
      
  

      


