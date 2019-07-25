import { dataProducts } from '../controller/firebase.js';

export const viewPlataform = (nameValue) => {
    const sectionMenu = document.createElement('div');
    
    const template = `
      <header>
      <nav class="nav">
        <a href="#/menu">BurgerQueen</a>
        </nav>
      </header>
      <section class="section-menu" >
      <h1>¡Bienvenida ${nameValue}!</h1>
      <h2>¡Combinalo como quieras!</h2>
      <p>Tus productos estan aquí<p>
        <button id="breakfast">DESAYUNO</button>
        <ul>
        <li id="list-breakfast"></li>
        </ul>
        <button id="almuerzo">ALMUERZO</button>
        <ul>
        <li id="list-almuerzo"></li>
        </ul>
      </section>`
      sectionMenu.innerHTML = template;

      const desayunoB = sectionMenu.querySelector('#breakfast');


    

      desayunoB.addEventListener('click', () =>{

        // const prueba = dataProducts.forEach((post) => {
        //   post.desayuno
        // })

        // document.querySelector('#list-breakfast').innerHTML = dataProducts();
      });

    return sectionMenu;
   }