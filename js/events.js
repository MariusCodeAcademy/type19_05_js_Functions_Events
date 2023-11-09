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
console.log('btn1El ===', btn1El);
// uzdeti jam paspausimo pasiklausyma
btn1El.addEventListener('click', sayPressed);
// atspausdinti su console zodi 'paspaudei'

function sayPressed() {
  console.count('Paspaudei');
  titleChange();
}
// sayPressed();
console.log('sayPressed ===', sayPressed);

const titleEl = document.getElementById('main-title');
function titleChange() {
  titleEl.style.fontSize = '50px';
  titleEl.style.fontWeight = 'normal';
}
titleEl.addEventListener('mouseenter', titleChange);

// nusitaikyti i mygtuka
// pasirasyti veiksma atliekancia funkcija (document.body)
// sukurti eventlisteneri
