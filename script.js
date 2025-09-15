// Part 2: JavaScript Functions — scope, parameters & return values

// Function to add two numbers (local scope inside function)
function add(a, b) {
  return a + b;
}

// Function to calculate string length (demonstrates return value)
function countChars(str) {
  return str.trim().length;
}

// Example of global vs local scope
let globalMessage = 'I am global';

function showScope() {
  let localMessage = 'I am local';
  console.log(globalMessage); // Accessible here
  console.log(localMessage);
}

// Wire up Part 2 button
document.getElementById('calcBtn').addEventListener('click', () => {
  const result = add(2, 3);               // uses parameters & return
  document.getElementById('calcResult').textContent = result;
});

// Part 3: Combining CSS animations with JavaScript

// 1. Animate box on button click
const box = document.getElementById('box');
document.getElementById('animateBoxBtn').addEventListener('click', () => {
  box.classList.toggle('animate');
});

// 2. Toggle loader spinner
const loader = document.getElementById('loader');
function toggleLoader() {
  loader.classList.toggle('active');
}
document.getElementById('toggleLoaderBtn').addEventListener('click', toggleLoader);

// 3. Flip card on button click
const card = document.getElementById('card');
document.getElementById('flipCardBtn').addEventListener('click', () => {
  card.classList.toggle('flipped');
});

// 4. Open and close modal
const modal = document.getElementById('modal');
document.getElementById('openModalBtn').addEventListener('click', () => {
  modal.classList.add('show');
});
document.getElementById('closeModalBtn').addEventListener('click', () => {
  modal.classList.remove('show');
});
