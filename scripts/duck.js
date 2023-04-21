
window.onload = () => {

let startGame = true;
var scoreValue = 0;
var deadDucks = 0;
var shots = 0;

    function createDuck() {

        const duck = document.createElement('div');
        document.body.append(duck)
        duck.id = "duck"

        function flightRight(){
            const tIDRight = setInterval(() => {
                duck.classList.add("duck", "right");
                duck.classList.toggle('flapRight');
              }, 400);
        
        }

        function flightLeft(){
          const tIDLeft = setInterval(() => {
                duck.classList.add("duck", "left");
                duck.classList.toggle('flapLeft');
              }, 400);
        
        }

        function flightTopRight(){
          const tIDTopRight = setInterval(() => {
                duck.classList.add("duck", "topRight");
                duck.classList.toggle('flapTopRight');
              }, 400);
        
        }

        function flightTopLeft(){
          const tIDTopLeft = setInterval(() => {
                duck.classList.add("duck", "topLeftt");
                duck.classList.toggle('flapTopLeft');
              }, 400);
        
        }


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
                medialPosition = newMedialPosition
                clearInterval(tIDTopLeft)
               
            }   

            if (lateralPosition > newLateralPosition && medialPosition == newMedialPosition) {
                flightRight();
                lateralPosition = newLateralPosition;
                medialPosition = newMedialPosition
                clearInterval(tIDRight)
            }
            
            if (lateralPosition < newLateralPosition && medialPosition > newMedialPosition) {
                flightTopRight();
                lateralPosition = newLateralPosition;
                medialPosition = newMedialPosition;
                clearInterval(tIDTopRight)
            }
          
            // update position of duck to new coordinates
            duck.style.top = `${newMedialPosition}px`;
            duck.style.left = `${newLateralPosition}px`;

          }, 2000);

         
         
          //kill duck, calculate shots and score
          duck.addEventListener('click', (event) => {
            event.target.classList.add("shot");
            
         
          
            setTimeout(() => {
              duck.parentNode.removeChild(duck);
             
              addScore();
              countDeadDucks();
              countShots();
         

              checkWinner();
         
            

            }, 500);
          });
          return duck;

    }

    
    function countShots(){
        shots += 1
        document.getElementById("bullet"+shots).style.display = "none"
    }

    function reseatShots(){
        shots = 0;
        document.getElementById("bullet1").style.display = "inline";
        document.getElementById("bullet2").style.display = "inline";
        document.getElementById("bullet3").style.display = "inline";
    }

    function countDeadDucks(){
        deadDucks += 1;
        let duckTodead = document.getElementById("liveDuck"+deadDucks)
        duckTodead.src = "images/duckDead.png"
    }

    function reseatDeadDucks(){
        deadDucks = 0
        let liveDuck1 = document.getElementById("liveDuck1")
        let liveDuck2 = document.getElementById("liveDuck2")
        let liveDuck3 = document.getElementById("liveDuck3")

        liveDuck1.src = "images/duckLive.png"
        liveDuck2.src = "images/duckLive.png"
        liveDuck3.src = "images/duckLive.png"
    }

    
    let score = document.getElementById("score");
    function addScore(){
        scoreValue += 100;
        score.textContent = scoreValue;
    }
    
     function checkWinner() {
        
        const ducks = document.querySelectorAll(".duck");
    
        if (ducks.length === 0) {
            startGame = false;
          alert('You Win! Press OK to play again.');
            reseatDeadDucks();
            reseatShots();
            scoreValue = 0;
            score.textContent = scoreValue;
          for (let i = 0; i < (Math.random() * 2) + 1; i++) {
            console.log((Math.random() * 2) + 1)
            console.log("começando novo jogo do winner")
           createDuck(); 
          }
        }
      }

      //start game with a random number of ducks
    if(startGame){
        console.log("começando novo jogo pelo inicio de td")
    for (let i = 0; i < (Math.random() * 2) + 1; i++) {
        setTimeout(() => {
            createDuck();
        
        }, 5000);
      } 
    }

      


}