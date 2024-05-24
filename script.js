const shift = document.querySelector('input[type="number"]');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');

const input = document.querySelector('.input');
const output = document.querySelector('.output');

const to = document.querySelector('.to');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

input.addEventListener('input', cipherText);
shift.addEventListener('change', shiftChange);
increase.addEventListener('click', increaseShift);
decrease.addEventListener('click', decreaseShift);

increase.addEventListener('keydown', buttonKeypress);
decrease.addEventListener('keydown', buttonKeypress);

function shiftChange() {
  updateExample();
  cipherText();
}

function buttonKeypress(event) {
  // Enter or space key
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    if (event.target.classList.contains('increase')) {
      increaseShift();
    } else if (event.target.classList.contains('decrease')) {
      decreaseShift();
    }
  }
}

function increaseShift() {
  shift.value = ((parseInt(shift.value, 10) + 1 - 1) % 26) + 1;
  updateExample();
  cipherText();
}

function decreaseShift() {
  shift.value = ((parseInt(shift.value, 10) - 1 + 25) % 26) + 1;
  updateExample();
  cipherText();
}

function updateExample() {
  to.textContent = alphabet[(shift.value - 1) % 26];
}

function cipherText() {
  let ciphered = '';
  const shiftLength = (parseInt(shift.value, 10) - 1) % 26 + 1;
  const inputText = input.value;

  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];
    const isLowercase = char === char.toLowerCase();
    const index = alphabet.indexOf(char.toUpperCase());

    if (index > -1) {
      let newIndex = (index + shiftLength) % 26;
      char = alphabet[newIndex];
      if (isLowercase) {
        char = char.toLowerCase();
      }
    }
    ciphered += char;
  }
  
  output.value = ciphered;
}
