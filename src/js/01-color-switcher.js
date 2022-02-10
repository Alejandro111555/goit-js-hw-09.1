// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

stopBtn.setAttribute('disabled', true);

startBtn.addEventListener('click', () => {
  color = setInterval(() => {
    setRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
});

function setRandomHexColor() {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
}

stopBtn.addEventListener('click', () => {
  clearInterval(color);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
});
