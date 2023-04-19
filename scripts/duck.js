window.onload = function() {
    const body = document.body;
    const tID = 0;
    
    function flighToRight() {
        const  speed = 550; 
        tID = setInterval ( () => {
    
           if( document.getElementById("duck").getAttribute("class")==="duck flapRight"){
               document.getElementById("duck").setAttribute("class", "duck right")
           }
           else{
               document.getElementById("duck").setAttribute("class", "duck flapRight")
           } 
        }
        , speed ); 
    }
  

   
    function createDuck() {


        const duck = document.createElement('div');
        duck.id = "duck";

        setInterval(function() {
            
            const randomNumber = Math.floor(Math.random() * 2) + 1;
          
           
            console.log(randomNumber);
            switch(randomNumber) {
              case 1:
                duck.className = 'duck flapRight';
                console.log("flap right");
                flighToRight();
              case 2:
                duck.className = 'duck flapLeft';
                flighToLeft();
                console.log("flap left");
              case 3:
                duck.className = 'duck flapTopRight';
                flighToTopRight();
                console.log("flap top right");
              case 4:
                duck.className = 'duck flapTopLeft';
                flighToTopLeft
                console.log("flap top left");
                break;
              default:
                console.log("Valor inválido gerado.");
            }
          }, 7000);

        
        document.body.appendChild(duck);

        function moveDuck() {

            let top = Math.random() * window.innerWidth;
            let left = Math.random() * window.innerHeight;

            duck.style.top = top + 'px';
            duck.style.left = left + 'px';

            function addShot() {
                duck.classList.add('shot');
                setTimeout(function() { duck.remove(); checkForWinner() }, 1000)
            }

            duck.addEventListener('click', addShot);
        }
        moveDuck()
        let mover = setInterval(moveDuck, 200);
        return duck;
    }
    
    createDuck()
    
}