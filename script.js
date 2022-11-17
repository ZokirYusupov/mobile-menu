const menu = document.querySelector('.menu')
const list = document.querySelector('.list')
menu.addEventListener('click', (e) => {
  list.classList.toggle('hidden')
})
