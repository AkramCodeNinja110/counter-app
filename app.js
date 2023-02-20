// Select HTML elements using DOM APIs
const countEl = document.querySelector('.count');
const incBtn = document.querySelector('.increment-button');
const decBtn = document.querySelector('.decrement-button');

// Initialize count value
let count = 0;

// Function to update count value and display it
function updateCount() {
  countEl.textContent = count;
}

// Function to handle increment button click
function handleIncrement() {
  count++;
  updateCount();
}

// Function to handle decrement button click
function handleDecrement() {
  if (count > 0) {
    count--;
    updateCount();
  }
}

// Attach event listeners to increment and decrement buttons
incBtn.addEventListener('click', handleIncrement);
decBtn.addEventListener('click', handleDecrement);
