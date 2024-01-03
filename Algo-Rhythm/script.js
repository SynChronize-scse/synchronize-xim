const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 1: 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "link":
      return "explore";
    default:
      return "explore";
  }
}

window.onmousemove = e => {
  const card = e.target.closest(".card__img"),
        interacting = card !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? card.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(card.dataset.type);
  }
}



const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".parallax h2").onmouseover = event => {  
  let interval2 = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < interval2) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(interval2 >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    interval2 += 1 / 3;
  }, 30);
}



// window.addEventListener('scroll', () => {
//   // Code to handle scroll position and card visibility
//   const cards = document.querySelectorAll('.card__article');

// cards.forEach(card => {
//   const cardTop = card.offsetTop;
//   const scrollTop = window.scrollY;

//   if (scrollTop > cardTop - card.clientHeight / 2) {
//     card.querySelector('.card__description').style.display = 'block';
//   } else {
//     card.querySelector('.card__description').style.display = 'none';
//   }
// });

// });


const numberContainer = document.getElementById('number-container');
const targetNumber = 10000 ; // Replace with your desired target number
let currentNumber = 0;
let isAnimating = false;

numberContainer.addEventListener('mouseenter', (event) => {
  // Reset only if already reached target and stopped
  if (currentNumber === targetNumber && !isAnimating) {
    currentNumber = 0;
  }
  animateNumber();
});

numberContainer.addEventListener('mouseleave', () => {
  isAnimating = false;
});

function animateNumber() {
  isAnimating = true;

  if (currentNumber < targetNumber) {
    currentNumber = currentNumber+50;
    numberContainer.textContent = currentNumber;
  } else {
    isAnimating = false; // Stop animation once target reached
  }

  requestAnimationFrame(animateNumber);
}

s











