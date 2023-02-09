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

const colors = [
  {
    name: 'red',
    gradient: ['#85182A', '#B21E35'],
    textColor: '#fff'
  },
  {
    name: 'blue',
    gradient: ['#0077B6', '#00B4D8'],
    textColor: '#fff'
  },
  {
    name: 'black',
    gradient: ['#343A40', '#6C757D'],
    textColor: '#fff'
  },
  {
    name: 'green',
    gradient: ['#2D6A4F', '#52B788'],
    textColor: '#fff'
  },
  {
    name: 'white',
    gradient: ['#FFF2B2', '#FFFAE5'],
    textColor: '#000'
  },
]

gearIcon.forEach((icon, index) => {
  icon.addEventListener('click', e => {
    manaDisplay[index].classList.toggle('hidden')
  })
})

manaSymbol.forEach(image => {
  image.addEventListener('click', e => {
    
    const container = image.parentElement.parentElement
    container.firstElementChild.classList.add('hidden')

    // Byt backgrundsfärg
    const color = colors.find(color => color.name === e.target.classList[0]);
    container.style.setProperty("--color-1", color.gradient[0]);
    container.style.setProperty("--color-2", color.gradient[1]);
    container.style.color = color.textColor;

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
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

resetSymbol.addEventListener('click', () => {
  closeModal()
  health.forEach(number => {
    number.textContent = 40
  })
})

openModalBtn.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);

