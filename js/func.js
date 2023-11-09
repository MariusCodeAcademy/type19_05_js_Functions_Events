'use strict';
console.log('func.js file was loaded');

function initTheme(tema) {
  document.title = tema;
  const h1El = document.querySelector('h1');
  h1El.textContent = tema;
}
initTheme('Funkcijos ir Events');
// initTheme('Apie kazka');
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

// sayHi('James');
// sayHi('Mike');
// sayHi();
// sayHi();

// sukurti funkcija sum() turetu sudeti 2 skaicius ir atspausdinti rezutata
// paduoti skaicius kaip argumentus iskvieciam sum(5, 10)
// debugger;
function sum(sk1, sk2) {
  const suma = sk1 + sk2;
  console.log(`${sk1} + ${sk2} = ${suma}`);
  return suma;
}

let rez1 = sum(5, 15);
let rez2 = sum(10, 50);
// atspausdinti kokia yra situ sumu suma
console.log('rez1 ===', rez1);
console.log('rez2 ===', rez2);

sum(rez1, rez2);
