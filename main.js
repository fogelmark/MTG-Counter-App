const output = document.querySelector('.output')
const health = document.querySelectorAll('.life')
const increment = document.querySelectorAll('.plus')
const decrement = document.querySelectorAll('.minus')

// let value = 0

increment.forEach((plus, index) => {
  plus.addEventListener('click', () => {
    console.log(health[index].textContent++);
  })
})

decrement.forEach((minus, index) => {
  minus.addEventListener('click', () => {
    console.log(health[index].textContent--);
  })
})