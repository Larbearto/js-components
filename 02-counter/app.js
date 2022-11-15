const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const value = document.getElementById('value')
let count = 0

increase.addEventListener('click', () => {
  count++
  value.textContent = count
  console.log(count)
})

decrease.addEventListener('click', () => {
  count--
  value.textContent = count
  console.log(count)
})

reset.addEventListener('click', () => {
  count = 0
  value.textContent = count
})
