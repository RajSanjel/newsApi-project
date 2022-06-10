const path = window.location.pathname;
const ham = document.querySelector('.hamburger')
const items = document.querySelector('.nav-item')


ham.addEventListener("click", () => {
    ham.classList.toggle("active")
    items.classList.toggle("active")
})


if (path == '/contact.html') {
    const contact = document.querySelector(".contact")
    contact.classList.add("nav-active")
} else if (path == '/index.html') {
    const home = document.querySelector(".home")
    home.classList.add("nav-active")
} else if (path == '/info.html') {
    const info = document.querySelector(".info")
    info.classList.add("nav-active")
} else if (path == '/') {
    const home = document.querySelector(".home")
    home.classList.add("nav-active")
}