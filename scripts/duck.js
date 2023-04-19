window.onload = () => {

  function createDuck() {

      const duck = document.createElement('div');
      document.body.append(duck)
      duck.id = "duck"

      function flightRight(){
          setInterval(() => {
              duck.classList.add("duck", "right");
              duck.classList.toggle('flapRight');
            }, 400);
      
      }

      function flightLeft(){
          setInterval(() => {
              duck.classList.add("duck", "left");
              duck.classList.toggle('flapLeft');
            }, 400);
      
      }

      function flightTopRight(){
          setInterval(() => {
              duck.classList.add("duck", "topRight");
              duck.classList.toggle('flapTopRight');
            }, 400);
      
      }

      function flightTopLeft(){
          setInterval(() => {
              duck.classList.add("duck", "topLeftt");
              duck.classList.toggle('flapTopLeft');
            }, 400);
      
      }

    
  

      setInterval(() => {

          let medialPosition = Math.random() * window.innerHeight;
          let lateralPosition = Math.random() * window.innerWidth;
          duck.style.top = `${medialPosition}px`;
          duck.style.left = `${lateralPosition}px`;

          const newMedialPosition = Math.random() * window.innerHeight;
          const newLateralPosition = Math.random() * window.innerWidth;


          if (lateralPosition < newLateralPosition && medialPosition < newMedialPosition) {
              flightTopLeft();
              lateralPosition = newLateralPosition;
              medialPosition = newMedialPosition
              document.getElementById("duck").className = "";
          } else {
              document.getElementById("duck").className = "";
           }   

          if (lateralPosition > newLateralPosition && medialPosition == newMedialPosition) {
              flightRight();
              lateralPosition = newLateralPosition;
              medialPosition = newMedialPosition
              document.getElementById("duck").className = "";
          } else {
              document.getElementById("duck").className = "";

          }
          
          if (lateralPosition < newLateralPosition && medialPosition > newMedialPosition) {
              flightTopRight();
              lateralPosition = newLateralPosition;
              medialPosition = newMedialPosition;
              document.getElementById("duck").className = "";
          } else {
              document.getElementById("duck").className = "";
          }

          document.getElementById("duck").className = "";
        
          // update position of duck to new coordinates
          duck.style.top = `${newMedialPosition}px`;
          duck.style.left = `${newLateralPosition}px`;

        }, 2000);

        //kill duck, calculate shots and score
        let shots = 0;
        let score = document.getElementById("score");
        let scoreValue = 0
        let deadDucks = 0
        
        duck.addEventListener('click', (event) => {
          event.target.classList.add("shot");
          shots += 1;
          scoreValue += 100;
          score.textContent = scoreValue;
          deadDucks += 1;
          
          setTimeout(() => {
            duck.parentNode.removeChild(duck);
            document.getElementById("bullet"+shots).remove();
            let duckTodead = document.getElementById("liveDuck"+deadDucks)
            duckTodead.src = "images/duckDead.png"
            checkWinner();

          }, 500);
        });
    
        return duck;

  }

  /* function checkWinner() {
      const ducks = document.querySelectorAll('.duck');
  
      console.log(ducks, ducks.length);
  
      if (ducks.length === 0) {
        alert('You Win! Press OK to play again.');
        for (let i = 0; i < (Math.random() * 7) + 3; i++) {
         createDuck(); 
        }
      }


window.onload = () => {

    function createDuck() {

        const duck = document.createElement('div');
        document.body.append(duck)
        duck.id = "duck"

        function flightRight(){
            setInterval(() => {
                duck.classList.add("duck", "right");
                duck.classList.toggle('flapRight');
              }, 400);
        
        }

        function flightLeft(){
            setInterval(() => {
                duck.classList.add("duck", "left");
                duck.classList.toggle('flapLeft');
              }, 400);
        
        }

        function flightTopRight(){
            setInterval(() => {
                duck.classList.add("duck", "topRight");
                duck.classList.toggle('flapTopRight');
              }, 400);
        
        }

        function flightTopLeft(){
            setInterval(() => {
                duck.classList.add("duck", "topLeftt");
                duck.classList.toggle('flapTopLeft');
              }, 400);
        
        }

      
    

        setInterval(() => {

            let medialPosition = Math.random() * window.innerHeight;
            let lateralPosition = Math.random() * window.innerWidth;
            duck.style.top = `${medialPosition}px`;
            duck.style.left = `${lateralPosition}px`;

            const newMedialPosition = Math.random() * window.innerHeight;
            const newLateralPosition = Math.random() * window.innerWidth;


            if (lateralPosition < newLateralPosition && medialPosition < newMedialPosition) {
                flightTopLeft();
                lateralPosition = newLateralPosition;
                medialPosition = newMedialPosition
                document.getElementById("duck").className = "";
            } else {
                document.getElementById("duck").className = "";
             }   

            if (lateralPosition > newLateralPosition && medialPosition == newMedialPosition) {
                flightRight();
                lateralPosition = newLateralPosition;
                medialPosition = newMedialPosition
                document.getElementById("duck").className = "";
            } else {
                document.getElementById("duck").className = "";

            }
            
            if (lateralPosition < newLateralPosition && medialPosition > newMedialPosition) {
                flightTopRight();
                lateralPosition = newLateralPosition;
                medialPosition = newMedialPosition;
                document.getElementById("duck").className = "";
            } else {
                document.getElementById("duck").className = "";
            }

            document.getElementById("duck").className = "";
          
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

    var shots = 0;
    function countShots(){
        shots += 1
        document.getElementById("bullet"+shots).remove();
    }

    var deadDucks = 0;
    function countDeadDucks(){
        deadDucks += 1;
        let duckTodead = document.getElementById("liveDuck"+deadDucks)
        duckTodead.src = "images/duckDead.png"
    }


    var scoreValue = 0;
    let score = document.getElementById("score");
    function addScore(){
        scoreValue += 100;
        score.textContent = scoreValue;

    }

    //start game with a random number of ducks
  for (let i = 0; i < (Math.random() * 7) + 3; i++) {
      setTimeout(() => {
        createDuck();
      }, 6500);
    } */

    createDuck();
    
     function checkWinner() {
        
        const ducks = document.querySelectorAll(".duck");

        console.log(ducks, ducks.length);
    
        if (ducks.length === 0) {
          alert('You Win! Press OK to play again.');
          for (let i = 0; i < (Math.random() * 2) + 1; i++) {
           createDuck(); 
          }
        }
      }

      //start game with a random number of ducks
    for (let i = 0; i < (Math.random() * 2) + 1; i++) {
        setTimeout(() => {
          createDuck();
        
        }, 6500);
      } 

      //createDuck();
      


}