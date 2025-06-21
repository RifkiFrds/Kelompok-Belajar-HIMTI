const batuButton = document.getElementById('batu');
const guntingButton = document.getElementById('gunting');
const kertasButton = document.getElementById('kertas');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const choices = ['Batu', 'Gunting', 'Kertas'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    
    computerChoiceDisplay.textContent = computerChoice;

    if (playerChoice === computerChoice) {
        // Hasil Seri
        resultText.textContent = 'Hasilnya Seri!';
        resultText.className = 'draw';
    } else if (
        (playerChoice === 'Batu' && computerChoice === 'Gunting') ||
        (playerChoice === 'Gunting' && computerChoice === 'Kertas') ||
        (playerChoice === 'Kertas' && computerChoice === 'Batu')
    ) {
        // Pemain Menang
        resultText.textContent = 'Kamu Menang!';
        resultText.className = 'win';
    } else {
        // Pemain Kalah
        resultText.textContent = 'Kamu Kalah!';
        resultText.className = 'lose';
    }
}

batuButton.addEventListener('click', () => {
    playGame('Batu');
});

guntingButton.addEventListener('click', () => {
    playGame('Gunting');
});

kertasButton.addEventListener('click', () => {
    playGame('Kertas');
});