const darkBtn = document.querySelector(".dark-btn")
const lightBtn = document.querySelector(".light-btn")
const body = document.querySelector("body")

darkBtn.addEventListener("click", ()=> {
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
    body.classList.add("dark-mode")
})
lightBtn.addEventListener("click", ()=> {
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
    body.classList.remove("dark-mode")
})