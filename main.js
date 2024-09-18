
// 1 задание
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('hidden');
});
// 2 задание
const text = document.getElementById('text');
const hideBtn = document.getElementById('hideBtn');

hideBtn.addEventListener('click', () => {
  text.classList.toggle('hidden');
  hideBtn.textContent = text.classList.contains('hidden') ? 'Показать текст' : 'Скрыть текст';
});
// 3 задание
const texte = document.getElementById('texte');
const toggleeBtn = document.getElementById('toggleeBtn');

let isTextHidden = false;

toggleeBtn.addEventListener('click', () => {
  texte.classList.toggle('hidden');
  isTextHidden = !isTextHidden;
  toggleeBtn.textContent = isTextHidden ? 'Показать текст' : 'Скрыть текст';
});
// 4 задание
document.addEventListener('click', (event) => {
    ball.style.left = `${event.clientX - 25}px`;
    ball.style.top = `${event.clientY - 25}px`;
});

