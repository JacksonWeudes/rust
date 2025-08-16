// menu lateral
const menuBtn = document.querySelector(".mobile-menu-btn")
const exitBtn = document.querySelector(".exit-btn")
const sideMenu = document.querySelector(".side-menu")

menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active")
})

exitBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active")
})