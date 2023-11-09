'use strict';
console.log('events.js file was loaded');
function initTheme(tema) {
  document.title = tema;
  const h1El = document.querySelector('h1');
  h1El.textContent = tema;
}
initTheme('Events');

// nusitaikyti i mygtuka
// uzdeti jam paspausimo pasiklausyma
// atspausdinti su console zodi 'paspaudei'
