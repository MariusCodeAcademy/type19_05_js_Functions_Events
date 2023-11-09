'use strict';
console.log('calc.js file was loaded');
const x = 5;
function initTheme(tema) {
  document.title = tema;
  const h1El = document.querySelector('h1');
  h1El.textContent = tema;
}
initTheme('Paskaiciuoti');

// sukurti funkcija kuri suskaiciuoja 3 skaiciu vidurki ir atspausdina avg(1,2,3)
// panaudoti ta funkcija 3 kartus
// norim gauti visu 3 funkciju rezultatu suma
