

const duckId = duck.idName;
    let element = document.getElementById(duckId);

    const directions = ["right", "left", "right-top", "left-top"];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];

    element.classList.toggle("duck-" + randomDirection);

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
    });
  }