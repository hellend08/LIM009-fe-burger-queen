// import { viewPlataform } from '../view/viewMenu.js'
import { components } from './components.js'

export const changeRoutes = (route) => {
  const firtsPage = document.getElementById("firts-page");
  firtsPage.innerHTML = '';
  switch (route) {
    case '#/home': firtsPage.appendChild(components.container());
      break;
    case '#/menu': firtsPage.appendChild(components.menu());
      break;
    default:
      firtsPage.appendChild(components.container());
      break;
  }

}

export const loadPlataform = () => {
  window.addEventListener('load', () => changeRoutes(window.location.hash));
  if ("onhashchange" in window) window.onhashchange = () => changeRoutes(window.location.hash);
};