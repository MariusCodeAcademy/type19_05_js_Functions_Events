'use strict';
console.log('func.js file was loaded');

const tema = 'Funkcijos ir Events';

document.title = tema;
const h1El = document.querySelector('h1');
h1El.textContent = tema;
