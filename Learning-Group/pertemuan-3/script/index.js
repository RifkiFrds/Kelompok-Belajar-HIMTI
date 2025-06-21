const ghaibChoiceDisplay = document.getElementById('ghaib-choice');
const resultText = document.getElementById('result-text');

const choices = ['Gunting', 'Kertas', 'Batu'];

function getGhaibChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const ghaibChoice = getGhaibChoice();

    ghaibChoiceDisplay.textContent = ghaibChoice;

    if (playerChoice === ghaibChoice) {
        resultText.textContent = 'Kamu Seri Dengan GhaibTech!';
        resultText.className = 'draw';
    } else if (
        (playerChoice == 'Gunting' && ghaibChoice == 'Kertas') ||
        (playerChoice == 'Kertas' && ghaibChoice == 'Batu') ||
        (playerChoice == 'Batu' && ghaibChoice == 'Gunting')
    ) {
        resultText.textContent = 'Kamu Menang Dengan GhaibTech';
        resultText.className = 'menang';

    } else {
        resultText.textContent = 'Kamu Kalah Dari GhaibTech';
        resultText.className = 'kalah'
    }
}