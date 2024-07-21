const playerInfoElement = document.getElementById('player-info');
const currentPlayerNameElement = document.getElementById('current-player-name');
const playerBalanceElement = document.getElementById('player-balance');
const endTurnButton = document.getElementById('end-turn');

let players = [];
let currentPlayerIndex = 0;

// Fonction pour charger les joueurs et les paramètres
function loadGame() {
    // Récupérer le nom du joueur actuel
    const currentPlayerName = localStorage.getItem('currentPlayer');
    currentPlayerNameElement.textContent = currentPlayerName;

    // Charger les joueurs et leurs soldes depuis localStorage
    const savedPlayers = localStorage.getItem('players');
    if (savedPlayers) {
        players = JSON.parse(savedPlayers);
    } else {
        // Initialiser un joueur si aucun joueur n'existe
        players = [{ name: currentPlayerName, balance: 1500 }];
    }

    // Mettre à jour le solde du joueur actuel
    updatePlayerInfo();
}

// Fonction pour mettre à jour les informations du joueur
function updatePlayerInfo() {
    const currentPlayer = players[currentPlayerIndex];
    playerBalanceElement.textContent = currentPlayer.balance;
}

// Fonction pour finir le tour
function endTurn() {
    // Passer au joueur suivant
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    localStorage.setItem('currentPlayerIndex', currentPlayerIndex);

    // Mettre à jour les informations du joueur
    updatePlayerInfo();
}

// Événements
endTurnButton.addEventListener('click', endTurn);

// Charger le jeu lors du chargement de la page
loadGame();
