// Fonction pour charger les paramètres du jeu
function loadGameSettings() {
    const savedUsername = localStorage.getItem('username');
    const savedBoardColor = localStorage.getItem('boardColor');

    if (savedUsername) {
        document.getElementById('player-name').textContent = savedUsername;
    }
    if (savedBoardColor) {
        document.getElementById('board').style.backgroundColor = savedBoardColor;
    }
}

// Charger les paramètres lors du chargement de la page de jeu
loadGameSettings();
