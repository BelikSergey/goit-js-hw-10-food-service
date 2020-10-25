
const Theme = { LIGHT: 'light-theme', DARK: 'dark-theme' };

const themeSwitcher = document.querySelector('#theme-switch-toggle');
// console.log(themeSwitcher.checked);
const bodyChangeClasslist = document.querySelector('body');

bodyChangeClasslist.classList.add(Theme.LIGHT)

themeSwitcher.addEventListener("change",onChangeThemeSwitcher);

function onChangeThemeSwitcher(evt) {
    bodyChangeClasslist.classList.toggle('dark-theme');
    bodyChangeClasslist.classList.toggle('light-theme');
    if (themeSwitcher.checked) {
        localStorage.setItem('theme', Theme.DARK);
        
    } else { localStorage.setItem('theme', Theme.LIGHT) };

}
function enterDefaultThemeInLocalStorage() {
     if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', Theme.LIGHT)
    };
}
function chekThemeInLocalStorage() {
     if (localStorage.getItem('theme') === Theme.DARK) {
        bodyChangeClasslist.classList.remove('light-theme');
        bodyChangeClasslist.classList.add('dark-theme');
        themeSwitcher.checked = true;

        }
    // console.log(themeSwitcher.checked);
}
chekThemeInLocalStorage();
enterDefaultThemeInLocalStorage();

