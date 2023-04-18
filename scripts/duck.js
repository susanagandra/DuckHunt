
window.onload = () => {

    function createDuck() {

        const duck = document.createElement('div');
        document.body.append(duck)

        function flightRight(){
            setInterval(() => {
                duck.classList.add("duck", "right");
                duck.classList.toggle('flapRight');
              }, 700);
        
        }

        function flightLeft(){
            setInterval(() => {
                duck.classList.add("duck", "left");
                duck.classList.toggle('flapLeft');
              }, 700);
        
        }

        function flightTopRight(){
            setInterval(() => {
                duck.classList.add("duck", "topRight");
                duck.classList.toggle('flapTopRight');
              }, 700);
        
        }

        let medialPosition = Math.random() * window.innerHeight;
        let lateralPosition = Math.random() * window.innerWidth;
        duck.style.top = `${medialPosition}px`;
        duck.style.left = `${lateralPosition}px`;

        setInterval(() => {
            const newMedialPosition = Math.random() * window.innerHeight;
            const newLateralPosition = Math.random() * window.innerWidth;
            // add and remove the 'right' class to the duck based on the direction the duck is flying, thus shifting the direction the duck is facing
            if (lateralPosition < newLateralPosition) {
                flightLeft();
            } else if (lateralPosition > newLateralPosition) {
                flightRight
            } else if (medialPosition < newMedialPosition) {
                flightTopRight
            } 
            // update position of duck to new coordinates
            duck.style.top = `${newMedialPosition}px`;
            duck.style.left = `${newLateralPosition}px`;
          }, 500);

       
       

       

      



    }

createDuck();

}