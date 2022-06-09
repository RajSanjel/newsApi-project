
const ham = document.querySelector('.hamburger')
const items = document.querySelector('.nav-item')
const home = document.querySelector(".home")
const contact = document.querySelector(".contact")
const info = document.querySelector(".info")
const path = window.location.pathname;
const checkpath = path.toString()


if (path == '/contact.html') {
    contact.classList.add("nav-active")
} else if (path == '/index.html') {
    home.classList.add("nav-active")
} else if (path == '/info.html') {
    info.classList.add("nav-active")
} else if (path == '/') {
    home.classList.add("nav-active")
}

