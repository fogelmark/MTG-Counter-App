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
    // TBD - Fixa funktion som visar antalet positiva/negativa clicks.
  })
})

decrement.forEach((minus, index) => {
  minus.addEventListener('click', () => {
    health[index].textContent--
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

openModalBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
