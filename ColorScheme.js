/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('darkmode-toggle')
const HTML = document.getElementById('HTML');
const darkTheme = 'DarkMode';

const selectedTheme = localStorage.getItem("Selected-Nav-Scheme")

const getCurrentTheme = () => HTML.classList.contains(darkTheme) ? 'DarkMode' : 'light'

if (selectedTheme) {
  HTML.classList[selectedTheme === 'DarkMode' ? 'add' : 'remove'](darkTheme)
}

window.addEventListener("keydown",(event)=>{
    if(event.key === "m" && event.ctrlKey){
        event.preventDefault();
        HTML.classList.toggle(darkTheme)
        localStorage.setItem("Selected-Nav-Scheme", getCurrentTheme())
    }
})