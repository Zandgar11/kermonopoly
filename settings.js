// Récupère les éléments du formulaire
const usernameInput = document.getElementById('username');
const boardColorInput = document.getElementById('board-color');
const settingsForm = document.getElementById('settings-form');

// Fonction pour charger les paramètres sauvegardés
function loadSettings() {
    const savedUsername = localStorage.getItem('username');
    const savedBoardColor = localStorage.getItem('boardColor');

    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
    if (savedBoardColor) {
        boardColorInput.value = savedBoardColor;
        document.body.style.backgroundColor = savedBoardColor;
    }
}

// Fonction pour sauvegarder les paramètres
function saveSettings(event) {
    event.preventDefault();
    
    const username = usernameInput.value;
    const boardColor = boardColorInput.value;

    localStorage.setItem('username', username);
    localStorage.setItem('boardColor', boardColor);
    
    // Appliquer les changements immédiatement
    document.body.style.backgroundColor = boardColor;
}

// Événements
settingsForm.addEventListener('submit', saveSettings);

// Charger les paramètres lors du chargement de la page
loadSettings();
