const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset');
const scoreXDisplay = document.getElementById('scoreX');
const scoreODisplay = document.getElementById('scoreO');

let currentPlayer = 'X';
let gameState = Array(9).fill('');
let isGameActive = true;
let scoreX = 0;
let scoreO = 0;

const winningConditions = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // columns
    [0,4,8],[2,4,6]          // diagonals
];

function checkWinner() {
    for (let condition of winningConditions) {
        const [a,b,c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            result.innerText = `🎉 Player ${gameState[a]} wins!`;
            isGameActive = false;

            // Update score
            if (gameState[a] === 'X') {
                scoreX++;
                scoreXDisplay.innerText = scoreX;
            } else {
                scoreO++;
                scoreODisplay.innerText = scoreO;
            }

            // Confetti effect
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            return;
        }
    }

    if (!gameState.includes('')) {
        result.innerText = "🤝 It's a tie!";
        isGameActive = false;
    }
}

function handleCellClick(e) {
    const index = e.target.getAttribute('data-index');
    if (gameState[index] !== '' || !isGameActive) return;

    gameState[index] = currentPlayer;
    e.target.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    gameState.fill('');
    isGameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.innerText = '');
    result.innerText = '';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
