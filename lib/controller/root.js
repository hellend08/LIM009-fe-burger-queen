"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPlataform = exports.changeRoutes = void 0;

var _viewMenu = require("../view/viewMenu.js");

const changeRoutes = route => {
  const firtsPage = document.getElementById("firts-page");
  firtsPage.innerHTML = '';

  switch (route) {
    case '#/menu':
      firtsPage.appendChild((0, _viewMenu.viewPlataform)());
      break;
  }
};

exports.changeRoutes = changeRoutes;

const loadPlataform = () => {
  window.addEventListener('load', () => changeRoutes(window.location.hash));
  if ("onhashchange" in window) window.onhashchange = () => changeRoutes(window.location.hash);
};

exports.loadPlataform = loadPlataform;