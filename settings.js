// Récupère les éléments du formulaire
const usernameInput = document.getElementById('username');
const boardColorInput = document.getElementById('board-color');
const topBordersColorInput = document.getElementById('top-borders-color');
const sideBordersColorInput = document.getElementById('side-borders-color');
const bottomBordersColorInput = document.getElementById('bottom-borders-color');
const settingsForm = document.getElementById('settings-form');

// Fonction pour charger les paramètres sauvegardés
function loadSettings() {
    const savedUsername = localStorage.getItem('username');
    const savedBoardColor = localStorage.getItem('boardColor');
    const savedTopBordersColor = localStorage.getItem('topBordersColor');
    const savedSideBordersColor = localStorage.getItem('sideBordersColor');
    const savedBottomBordersColor = localStorage.getItem('bottomBordersColor');

    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
    if (savedBoardColor) {
        boardColorInput.value = savedBoardColor;
        document.body.style.backgroundColor = savedBoardColor;
    }
    if (savedTopBordersColor) {
        topBordersColorInput.value = savedTopBordersColor;
    }
    if (savedSideBordersColor) {
        sideBordersColorInput.value = savedSideBordersColor;
    }
    if (savedBottomBordersColor) {
        bottomBordersColorInput.value = savedBottomBordersColor;
    }

    applyBoardColors(); // Appliquer les couleurs du plateau au chargement
}

// Fonction pour sauvegarder les paramètres
function saveSettings(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const boardColor = boardColorInput.value;
    const topBordersColor = topBordersColorInput.value;
    const sideBordersColor = sideBordersColorInput.value;
    const bottomBordersColor = bottomBordersColorInput.value;

    localStorage.setItem('username', username);
    localStorage.setItem('boardColor', boardColor);
    localStorage.setItem('topBordersColor', topBordersColor);
    localStorage.setItem('sideBordersColor', sideBordersColor);
    localStorage.setItem('bottomBordersColor', bottomBordersColor);

    applyBoardColors(); // Appliquer les couleurs du plateau immédiatement
}

// Fonction pour appliquer les couleurs en direct
function applySettings() {
    const boardColor = boardColorInput.value;
    const topBordersColor = topBordersColorInput.value;
    const sideBordersColor = sideBordersColorInput.value;
    const bottomBordersColor = bottomBordersColorInput.value;

    document.body.style.backgroundColor = boardColor;

    // Appliquer les couleurs aux bandeaux
    const topBorders = document.querySelectorAll('.border-top');
    const sideBorders = document.querySelectorAll('.border-side');
    const bottomBorders = document.querySelectorAll('.border-bottom');

    topBorders.forEach(border => border.style.backgroundColor = topBordersColor);
    sideBorders.forEach(border => border.style.backgroundColor = sideBordersColor);
    bottomBorders.forEach(border => border.style.backgroundColor = bottomBordersColor);
}

// Événements
settingsForm.addEventListener('submit', saveSettings);
boardColorInput.addEventListener('input', applySettings);
topBordersColorInput.addEventListener('input', applySettings);
sideBordersColorInput.addEventListener('input', applySettings);
bottomBordersColorInput.addEventListener('input', applySettings);

// Charger les paramètres lors du chargement de la page
loadSettings();
