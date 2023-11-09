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
function avg(sk1, sk2, sk3) {
  let localAvg = (sk1 + sk2 + sk3) / 3;
  console.log('localAvg ===', localAvg.toFixed(2));
  return localAvg;
}
// panaudoti ta funkcija 3 kartus
let rez1 = avg(1, 2, 3);
let rez2 = avg(4, 5, 6);
let rez3 = avg(40, 54, 61);
// norim gauti visu 3 funkciju rezultatu suma
let suma = rez1 + rez2 + rez3;

console.log('suma ===', suma);
// parasyti funkcija kuri gauna 3 skaicius ir
// jei nors vienas skaicius neigiamas, padaryti teigiamu
// suskaiciuoti ir grazinti vidurki
// posAvg(1,-2,-3) turetu grazinti 2

// parasyti funkcija kuri spausdina skaicius nuo 0 iki 10
// jei sk lygus 7 norim nutraukti funkcijo vykdyma
// let i;
// for (i = 0; i < 11; i++) {
//   // break - nutraukia ciklo vykdyma
//   // continue - persoka i step dali (i++)
//   // patikrinima
//   if (i === 7) {
//     // break;
//     continue;
//   }
//   console.log('i ===', i);
// }
// console.log('i po ciklo ===', i);

// parasyti funkcija kuri spausdina skaicius nuo 0 iki 10
// jei sk lygus 7 norim nutraukti funkcijo vykdyma

function printNums(howMuch) {
  for (let i = 0; i < 11; i++) {
    console.log('i ===', i);
    if (i === howMuch) {
      // break;
      console.log('======= the end');
      return;
    }
  }
}
printNums(4);
printNums(5);
printNums(3);

function printOnlyPositives(num1) {
  // exit clause
  if (typeof num1 === 'string') return;

  if (num1 < 0) return;

  console.log(`${num1} is a positive number`);
}
// printOnlyPositives(5);
// printOnlyPositives(-15);
// printOnlyPositives('asd');
