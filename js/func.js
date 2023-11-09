'use strict';
console.log('func.js file was loaded');

const tema = 'Funkcijos ir Events';

document.title = tema;
const h1El = document.querySelector('h1');
h1El.textContent = tema;

// Functions
/*
funciton pavadinimas(param) {
  function body - vykdomas kai iskviesim funkcija
}
*/

// deklaruojam funkcija - kazuo panasu i kintamojo deklaravima
// deklaruojant funkcija nevykdoma tik isimenama
function sayHi(userName = 'random person') {
  console.log(`Hello world from: ${userName}`);
}

sayHi('James');
sayHi('Mike');
sayHi();
sayHi();

// sukurti funkcija sum() turetu sudeti 2 skaicius ir atspausdinti rezutata
// paduoti skaicius kaip argumentus iskvieciam sum(5, 10)
