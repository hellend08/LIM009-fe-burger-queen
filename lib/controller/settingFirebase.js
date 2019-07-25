"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firebaseConfiguration = void 0;

var _root = require("../controller/root.js");

const firebaseConfiguration = () => {
  let firebaseConfig = {
    apiKey: "AIzaSyCieSA2wwfFjAaNlWASZQov5EouApV-kQc",
    authDomain: "burguer-queen-32abf.firebaseapp.com",
    databaseURL: "https://burguer-queen-32abf.firebaseio.com",
    projectId: "burguer-queen-32abf",
    storageBucket: "",
    messagingSenderId: "89927900508",
    appId: "1:89927900508:web:48dc327062f60821"
  }; // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  (0, _root.loadPlataform)();
};

exports.firebaseConfiguration = firebaseConfiguration;