"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewPlataform = void 0;

const viewPlataform = () => {
  const sectionMenu = document.createElement('div');
  sectionMenu.innerHTML = `
      <header>
        <a href="#/menu">BurgerQueen</a>
      </header>
      <section>
        <button id="desayuno"></button>
        <button id="almuerzo"></button>
   
      </section>`;
  return sectionMenu;
};

exports.viewPlataform = viewPlataform;