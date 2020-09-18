let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

    //Ui Elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;

//play event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        
        setMessage(`Please type number between ${min} and ${max}`);
    }
    if(guess === winningNum){
        // guessInput.disable = true;
        // guessInput.style.color = 'green';
        // setMessage(`${winningNum} is correct, You Win!`,'green');
        gameOver(true, `${winningNum} is correct, You Win!`);
    }
    else {
       guessesLeft -= 1;

       if(guessesLeft === 0){
        // guessInput.disable = true;
        // guessInput.style.color = 'red';
        // setMessage(`Game over, the correct number was ${winningNum}`, 'red');
        gameOver(false, `Game over, the correct number was ${winningNum}`);
       }
       else {
        guessInput.disable = true;
        guessInput.style.color = 'red';
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
       }
    }
});
function gameOver(won, msg){
    let color;

    won === true ? color = 'green' : color = 'red';
    guessInput.disable = true;

	guessInput.style.color = color;
    message.style.color = color;
    
    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}
//get winning here
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)+min);
}


function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}