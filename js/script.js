const btnMobile = document.querySelector("#btn-mobile")
const nav = document.querySelector("#nav")

function toggleMenu(e) {
  if (e.type == "touchstart") e.preventDefault()
  nav.classList.toggle("active")
}

function closeMenu() {
  nav.classList.remove("active")
}

btnMobile.addEventListener("click", e => {
  toggleMenu(e)
})

btnMobile.addEventListener("touchstart", e => {
  toggleMenu(e)
})

const main = document.querySelector("main")

main.addEventListener("click", e => closeMenu())

