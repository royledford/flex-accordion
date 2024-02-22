const buttons = document.querySelectorAll('.accordion')

buttons.forEach((btn) => {
  btn.addEventListener('click', (btn) => clickHandler(btn))
})

function clickHandler(btn) {
  const el = btn.srcElement
  if (el.classList.contains('open')) {
    return
  }

  resetClasses()

  el.querySelectorAll('h4')[0].classList.replace('visible', 'hidden')
  el.querySelectorAll('h4')[1].classList.replace('hidden', 'visible')
  el.classList.add('open')
}

function resetClasses() {
  document.querySelectorAll('.accordion').forEach((el) => {
    el.classList.remove('open')
    el.querySelectorAll('h4')[0].classList.replace('hidden', 'visible')
    el.querySelectorAll('h4')[1].classList.replace('visible', 'hidden')
  })
}
