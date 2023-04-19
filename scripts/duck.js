
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

       
       

       

      



    }

createDuck();

}