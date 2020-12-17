// show\hide number
const hideNumber = document.querySelector('.hide-number')
const showNumber = document.querySelector('.show-number')

showNumber.addEventListener('click', function() {
  hideNumber.classList.add('active')
  showNumber.classList.add('active')
})