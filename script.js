// Get all the digit buttons
const digits = document.querySelectorAll('button.digit');
const userDisplay = document.querySelector('.user span');
const computerDisplay = document.querySelector('.computer span');
const playBtn = document.getElementById('Play-btn');
const keyBoard = document.querySelector('.bottom-section');
const overlay = document.getElementById('overlay');
const playAgain = document.getElementById('again');

let userChoice;
let computerChoice;

// Loop through the array of digits and add event listeners to all of them
for(let digit of digits){
    
    digit.addEventListener('click', () => {               
        const selectedDigit = digit.textContent;
        userChoice = selectedDigit;
        console.log(selectedDigit);
        userDisplay.textContent = selectedDigit;
    })
}



const playGame = (computerChoice, userChoice) => {    
    if(computerChoice === userChoice){
        computerDisplay.textContent = computerChoice;
        overlay.classList.add('active');
        overlay.innerHTML = `
        <div id="modal">
            <h1>Congratulations</h1>
            <h1>You have won</h1>
            <button id="again">Lets play again</button>
        </div>`
    }else{
        computerDisplay.textContent = computerChoice;
        overlay.classList.add('active');
    }
    // const resetButton = document.createElement('button');
    // resetButton.classList.add('action');
    // resetButton.textContent = 'Reset';
    // console.log(resetButton);
    // keyBoard.removeChild(playBtn);
    // keyBoard.appendChild(resetButton); 
    resetButton.addEventListener('click', () => {
        computerDisplay.textContent = '-';
        userDisplay.textContent = '-';
    //     keyBoard.removeChild(resetButton);
    // keyBoard.appendChild(playBtn);
    })
}

playAgain.addEventListener('click', () => {
    computerDisplay.textContent = '-';
    userDisplay.textContent = '-';    
    overlay.classList.remove('active');
})

const getComputerChoice = () => {
    if(!userChoice || userDisplay.textContent === '-'){
        alert('Please select A NUMBER')
    }else{
        computerChoice = Math.floor(Math.random() * 10);
        console.log({computerChoice}); 
        playGame(computerChoice, userChoice);
    }    
}

playBtn.addEventListener('click', getComputerChoice);