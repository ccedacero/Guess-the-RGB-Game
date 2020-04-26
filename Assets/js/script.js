let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();
function init() {
setUpModeButtons();
setUpSquares()
reset();
}  

function setUpModeButtons() {
   //mode buttons
   for (let i = 0 ; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy'? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setUpSquares() {
  for (let i = 0 ; i < squares.length; i++) {
    //click handler for color squares
squares[i].addEventListener('click',function() {
  let clickedColor = this.style.backgroundColor;

  if (clickedColor === pickedColor) {
    // alert('You\'ve won ' + 'with' + ' ' + clickedColor)
    messageDisplay.textContent = 'Correct! Go you!'
    changeColor(clickedColor);
    h1.style.backgroundColor = pickedColor;
    resetButton.textContent = 'PLAY AGAIN?';
} else {
  //  alert('try again plz!')
  this.style.backgroundColor = '#6c757d00';
  messageDisplay.textContent = 'ERR! TRY AGAIN!'
  // messageDisplay.textContent = "";

  }
 })
}
}


function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor; 
  resetButton.textContent = 'New Colors'
  messageDisplay.textContent = "";
  
  for (let i = 0; i < squares.length;i++) {
    if(colors[i]) {
    squares[i].style.display = 'block';
    squares[i].style.backgroundColor = colors[i];
  } else {
    squares[i].style.display = 'none';
  }
  }
h1.style.background = 'steelblue';
}

resetButton.addEventListener('click', function() {
reset();
})




function changeColor(color) {
  for (let i = 0; i < squares.length;i++) {
    squares[i].style.backgroundColor = color;
  }
}

function generateRandomColors(num) {
  //make an array 
let arr = [];
  //add num random colors to array 
for(let i = 0 ; i < num; i++) {
  //get Random color & push to arr
  arr.push(randomColor());
}
  //return array
  return arr;
}

function randomColor() {
//pick a red from 0 - 255
let r = Math.floor(Math.random() * 256);
//pick a green from 0 -255
let g = Math.floor(Math.random() * 256);
//pick a blue from 0 - 255
let b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`;
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

