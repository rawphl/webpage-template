import test from "./mylib"
import data from "./../../assets/data/stuff.json"

console.log(data)

function wait(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis)
    })
}

async function main() {
    console.log("Hello...")
    await wait(2000)
    console.log("...world!")
}

main()
test()

const menuButton = document.getElementById("menu")
const nav = document.getElementById("nav")

let menuIsOpen = false

menuButton.addEventListener("click", () => {
    menuIsOpen = !menuIsOpen

    if(menuIsOpen) {
        menuButton.innerText = "✖"
        nav.classList.add("visible")
    } else {
        menuButton.innerText = "☰"
        nav.classList.remove("visible")
    }
})

let currentTheme = "light"

const savedTheme = localStorage.getItem("theme")

if(savedTheme) {
    currentTheme = savedTheme
}

document.documentElement.setAttribute('data-theme', currentTheme);

document.getElementById("mode-switch").addEventListener("click", () => {
    if(currentTheme === "light") {
        currentTheme = "dark"
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        currentTheme = "light"
        document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem("theme", currentTheme)
})