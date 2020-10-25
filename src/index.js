import './styles.css';
import './Js-files.js/switcherTheme';
import menuData from './menu.json';
import menuMarkup from './data-menu-markup/menu-markup.hbs';
// console.log(menuMarkup(menuData));  
const posotionMenuMarkupEl = document.querySelector('ul.js-menu');
// console.log(posotionMenuMarkupEl);
createMenuMarkup(menuData);

function createMenuMarkup(menuData) {
    posotionMenuMarkupEl.insertAdjacentHTML('beforeend', menuMarkup(menuData));
    // menuMarkup(menuData)
    
}