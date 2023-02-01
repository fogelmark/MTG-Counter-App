const output = document.querySelector('.output')
const health = document.querySelectorAll('.life')
const increment = document.querySelectorAll('.plus')
const decrement = document.querySelectorAll('.minus')
const counter = document.querySelector('.counter')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.middle-button');

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

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const debounce = (timeoutId, functionToRun, time) => {
  if (timeoutId !== null) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    timeoutId = null;
    functionToRun()
  }, time);
}

const countClicks = (initiator) => {
  const clickedArea = initiator.parentElement.parentElement;
  const counterToChange = clickedArea.querySelector('.counter')

  if (counterToChange.style.opacity !== 1) {
    counterToChange.style.opacity = 1;
  }

  counterToChange.textContent++
  
  debounce(clickedArea, () => {
    counterToChange.style.opacity = 0;
    counterToChange.textContent = 0;
  }, 3000)
}

openModalBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
