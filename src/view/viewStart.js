import { viewPlataform } from './viewMenu.js'

export const viewStart = () => {
    const container = document.createElement('div');

    container.innerHTML = `
    <section class="container">
    <h1 class="title">Burger Queen</h1>
    <header>
    <img class="logo" src="./img/burger-queen.png" alt="logo">
    </header>
      <section class="">
      <h2>¡Hola!</h2> 
      <h3>¿Cómo te llamas?</h3>
      <input class="input" type="text" id="name" placeholder="Ingresa tu nombre.">
      <button id="btn">Continuar</button>
      </section>
    </section>`

    const buttonValue = container.querySelector('#btn');

    buttonValue.addEventListener('click', () => {
        const nameValue = container.querySelector('#name').value;
        container.innerHTML = '';
        container.appendChild(viewPlataform(nameValue));
    });
    
    return container;
}