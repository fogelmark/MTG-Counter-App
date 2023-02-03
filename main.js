const output = document.querySelector('.output')
const health = document.querySelectorAll('.life')
const increment = document.querySelectorAll('.plus')
const decrement = document.querySelectorAll('.minus')
const counter = document.querySelector('.counter')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.middle-button');
const gearIcon = document.querySelectorAll('.gear-icon')
const manaSymbol = document.querySelectorAll('img')
const topLeft = document.querySelector('.top-left-container')
const controls = document.querySelector('.controls')
const manaDisplay = document.querySelectorAll('.color-picker')

const redBackground = `
  background: linear-gradient(-90deg, #85182A, #B21E35);
  color: #fff;
`;
const blueBackground = `
  background: linear-gradient(-90deg, #0077B6, #00B4D8);
  color: #fff;
`;
const blackBackground = `
  background: linear-gradient(-90deg, #343A40, #6C757D);
  color: #fff;
`;
const greenBackground = `
  background: linear-gradient(-90deg, #2D6A4F, #52B788);
  color: #fff;
`;
const whiteBackground = `
  background: linear-gradient(-90deg, #FFF2B2, #FFFAE5);
  color: #000;
`;

gearIcon.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    manaDisplay[index].classList.toggle('hidden')
  })
  
  manaSymbol.forEach(image => {
    image.addEventListener('click', e => {
  
      const container = image.parentElement.parentElement
  
      if (e.target.classList.contains('red')) {
        container.style.cssText = redBackground
        icon.previousElementSibling.classList.add('hidden')
      }
      if (e.target.classList.contains('blue')) {
        container.style.cssText = blueBackground
        icon.previousElementSibling.classList.add('hidden')
      }
      if (e.target.classList.contains('black')) {
        container.style.cssText = blackBackground
        icon.previousElementSibling.classList.add('hidden')
      }
      if (e.target.classList.contains('green')) {
        container.style.cssText = greenBackground
        icon.previousElementSibling.classList.add('hidden')
      }
      if (e.target.classList.contains('white')) {
        container.style.cssText = whiteBackground
        icon.previousElementSibling.classList.add('hidden')
      }
    })
  })
})

increment.forEach((plus, index) => {
  plus.addEventListener('click', () => {
    health[index].textContent++
    countClicks(plus)
  })
})

decrement.forEach((minus, index) => {
  minus.addEventListener('click', () => {
    health[index].textContent--
    countClicks(minus)
  })
})

// TBD, FATTA timeout-id...
let timeout = null;

const debounce = (timeoutId, functionToRun, time) => {
  if (timeout !== null) {
    clearTimeout(timeout)
  }

  timeout = setTimeout(() => {
    timeout = null;
    functionToRun()
  }, time);
}

const countClicks = (initiator) => {
  const clickedArea = initiator.parentElement.parentElement;
  
  const counterToChange = clickedArea.querySelector('.counter')
  
  if (counterToChange.style.opacity !== 1) {
    counterToChange.style.opacity = 1;
  }
  
  if (initiator.classList.contains('minus')) {
    counterToChange.textContent--
  }
  if (initiator.classList.contains('plus')) {
    counterToChange.textContent++
  }
  
  //RESET
  debounce(clickedArea.classList[0], () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      counter.style.opacity = 0;
      counter.textContent = 0;
    })
  }, 3000)
}

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {

  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openModalBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);

