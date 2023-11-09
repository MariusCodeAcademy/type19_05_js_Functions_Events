'use strict';
console.log('events.js file was loaded');
function initTheme(tema) {
  document.title = tema;
  const h1El = document.querySelector('h1');
  h1El.textContent = tema;
}
initTheme('Events');

// nusitaikyti i mygtuka
const btn1El = document.getElementById('btn1');
// console.log('btn1El ===', btn1El);
// uzdeti jam paspausimo pasiklausyma
btn1El.addEventListener('click', sayPressed);
// atspausdinti su console zodi 'paspaudei'

function sayPressed() {
  console.count('Paspaudei');
  titleChange();
}
// sayPressed();
// console.log('sayPressed ===', sayPressed);

const titleEl = document.getElementById('main-title');
function titleChange() {
  titleEl.style.fontSize = '50px';
  titleEl.style.fontWeight = 'normal';
}
titleEl.addEventListener('mouseenter', titleChange);

// nusitaikyti i mygtuka
const btn2El = document.getElementById('btn2');
console.log('btn2El ===', btn2El);
// pasirasyti veiksma atliekancia funkcija (document.body)
function darkModeOn() {
  document.body.style.background = '#333';
  document.body.style.color = 'white';
}
let isDarkModeOn = false;
function darkModeToggle() {
  if (isDarkModeOn === true) {
    console.log('day mode on');
    document.body.style.background = 'white';
    document.body.style.color = '#333';
    isDarkModeOn = false;
  } else {
    console.log('dark mode on');
    document.body.style.background = '#333';
    document.body.style.color = 'white';
    isDarkModeOn = true;
  }
}
// darkModeOn();
// sukurti eventlisteneri
btn2El.addEventListener('click', darkModeToggle);

// padaryti kad mygukas veiktu kaip toggle
//<button id="btn3">Turn <strong>on</strong> Dark mode</button>
// paspaudi ir pasikeicia spalvos ir tekstas i <button id="btn3">Turn <strong>Off</strong> Dark mode</button>
