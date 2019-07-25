import { loadPlataform } from  './route.js';

export const firebaseConfiguration = () => {
let firebaseConfig = {
    apiKey: "AIzaSyCieSA2wwfFjAaNlWASZQov5EouApV-kQc",
    authDomain: "burguer-queen-32abf.firebaseapp.com",
    databaseURL: "https://burguer-queen-32abf.firebaseio.com",
    projectId: "burguer-queen-32abf",
    storageBucket: "burguer-queen-32abf.appspot.com",
    messagingSenderId: "89927900508",
    appId: "1:89927900508:web:48dc327062f60821"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  loadPlataform();
}