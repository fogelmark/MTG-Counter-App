const output = document.querySelector('.output')
const health = document.querySelectorAll('input')
const increment = document.querySelectorAll('.fa-plus')
const decrement = document.querySelectorAll('.fa-minus')

// let value = 0

increment.forEach((plus, index) => {
  plus.addEventListener('click', () => {
    console.log(health[index].value++);
  })
})

decrement.forEach((minus, index) => {
  minus.addEventListener('click', () => {
    console.log(health[index].value--);
  })
})