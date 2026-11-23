let darkmode = localStorage.getItem('darkmode')
const switchTheme = document.getElementById('switch-theme')

const darkModeOn = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const darkModeOff = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") darkModeOn()

switchTheme.addEventListener("click" , () => {
    darkmode = localStorage.getItem('darkmode')
    if(darkmode !== "active") {
    darkModeOn()
} else {
   darkModeOff()
}
})

