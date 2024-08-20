# Projects releted to DOM

# solution code

## project1

```javascript
console.log("saroj thakor")

const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  });
});

```


## project2 solution code

```javascript
const form = document.querySelector('form')

//this usecase will gives you empty value
// const height = parseFloat(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
   e.preventDefault();

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');

   if(height === '' || height < 0 || isNaN(height)){
      results.innerHTML = (`please give a valid height ${height}`);
   }else if(weight === '' || weight < 0 || isNaN(weight)){
      results.innerHTML = (`please give a valid weight ${weight}`);
   }else{
    const bmi = ( weight/((height*height)/10000)).toFixed(2);
    //show result
    results.innerHTML = `<span>${bmi}</span>`;

    if(bmi < 18.6){
      results.innerHTML = `under weight ${bmi}`
    }
    if(bmi === 18.6 && bmi === 24.9 ){
      results.innerHTML = `normal range ${bmi}`
    }
    if(bmi > 18.6){
      results.innerHTML = `overweight ${bmi}`
    }
   }
})

```

## project3 solution code

```javascript

const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  // console.log(date)
  clock.innerHTML = date.toLocaleTimeString();
  
}, 1000) //1000= 1sec.

```

##Project4 solution code
```javascript

let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter number a greater than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (guess === 11) {
      displayGuess(guess);
      displayMessage(`game over. random number was ${randomNum}`);
      endGame();
    }else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNum){
    displayMessage(`you guessed it right`);
    endGame();
  }else if(guess < randomNum){
    displayMessage(`number is too low`);
  }else if(guess > randomNum){
    displayMessage(`number is too high`);
  }
}
function displayGuess(guess) {
  userInput.value = ''; // to empaty value
  guessSlot.innerHTML += `${guess}, `; //add previous number
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click' , function(e){
  randomNum = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.replaceChild(p);
  playGame = true;
  })
}
```