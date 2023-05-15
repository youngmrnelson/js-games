/// /////////
// Navigation Menu JS
/// /////////
const navMenuBtn = document.querySelector('.btn-menu');

navMenuBtn.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('hidden');
});
