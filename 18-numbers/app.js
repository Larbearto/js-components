console.log('numbers project')
const numbers = document.querySelectorAll('.number')
// const numbers = [...document.querySelectorAll('number')]

const updateCount = (el) => {
  const value = parseInt(el.dataset.value)
  const increment = Math.ceil(value / 1000)
  // const increment = 1
  let initialValue = 0

  const increaseCount = setInterval(() => {
    initialValue += increment

    if (initialValue > value) {
      el.textContent = `${value}+`
      clearInterval(increaseCount)
      return
    }

    el.textContent = `${initialValue}+`
  }, 1)
  // console.log(increaseCount)
}

numbers.forEach((item) => {
  updateCount(item)
})
