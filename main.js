const health = document.querySelectorAll('.life')
const increment = document.querySelectorAll('.plus')
const decrement = document.querySelectorAll('.minus')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.middle-button');
const gearIcon = document.querySelectorAll('.gear-icon')
const manaSymbol = document.querySelectorAll('img')
const manaDisplay = document.querySelectorAll('.color-picker')
const resetSymbol = document.querySelector('.fa-arrow-rotate-right')

const redToLeft = `
  background: linear-gradient(to left, #85182A, #B21E35);
  color: #fff;
`;
const redToRight = `
  background: linear-gradient(to right, #85182A, #B21E35);
  color: #fff;
`;
const blueToLeft = `
  background: linear-gradient(to left, #0077B6, #00B4D8);
  color: #fff;
`;
const blueToRight = `
  background: linear-gradient(to right, #0077B6, #00B4D8);
  color: #fff;
`;
const blackToLeft = `
  background: linear-gradient(to left, #343A40, #6C757D);
  color: #fff;
`;
const blackToRight = `
  background: linear-gradient(to right, #343A40, #6C757D);
  color: #fff;
`;
const greenToLeft = `
  background: linear-gradient(to left, #2D6A4F, #52B788);
  color: #fff;
`;
const greenToRight = `
  background: linear-gradient(to right, #2D6A4F, #52B788);
  color: #fff;
`;
const whiteToLeft = `
  background: linear-gradient(to left, #FFF2B2, #FFFAE5);
  color: #000;
`;
const whiteToRight = `
  background: linear-gradient(to right, #FFF2B2, #FFFAE5);
  color: #000;
`;

resetSymbol.addEventListener('click', () => {
  health.forEach(number => {
    number.textContent = 40
  })
})

gearIcon.forEach((icon, index) => {
  icon.addEventListener('click', e => {
    manaDisplay[index].classList.toggle('hidden')
  })
})

manaSymbol.forEach(image => {
  image.addEventListener('click', e => {
    
    const container = image.parentElement.parentElement

    // Byt backgrundsfärg
    if (e.target.classList.contains('red') && container.classList.contains('right')) {
      container.firstElementChild.classList.add('hidden')
      container.style.cssText = redToRight
    }
    if (e.target.classList.contains('red') && !container.classList.contains('right')) {
      container.firstElementChild.classList.add('hidden')
      container.style.cssText = redToLeft
    }
    if (e.target.classList.contains('blue') && container.classList.contains('right')) {
      container.firstElementChild.classList.add('hidden')
      container.style.cssText = blueToRight
    }
    if (e.target.classList.contains('blue') && !container.classList.contains('right')) {
      container.firstElementChild.classList.add('hidden')
      container.style.cssText = blueToLeft
    }
    if (e.target.classList.contains('black') && container.classList.contains('right')) {
      container.firstElementChild.classList.add('hidden')
      container.style.cssText = blackToRight
    }
    if (e.target.classList.contains('black') && !container.classList.contains('right')) {
      container.firstElementChild.classList.add('hidden')
      container.style.cssText = blackToLeft
    }
    if (e.target.classList.contains('green') && container.classList.contains('right')) {
      container.firstElementChild.classList.add('hidden')
      container.style.cssText = greenToRight
    }
    if (e.target.classList.contains('green') && !container.classList.contains('right')) {
      container.firstElementChild.classList.add('hidden')
      container.style.cssText = greenToLeft
    }
    if (e.target.classList.contains('white') && container.classList.contains('right')) {
      container.firstElementChild.classList.add('hidden')
      container.style.cssText = whiteToRight
    }
    if (e.target.classList.contains('white') && !container.classList.contains('right')) {
      container.firstElementChild.classList.add('hidden')
      container.style.cssText = whiteToLeft
    }
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

