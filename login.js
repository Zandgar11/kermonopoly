document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const playerName = document.getElementById('player-name').value;

    // Sauvegarder le nom du joueur dans localStorage
    localStorage.setItem('currentPlayer', playerName);

    // Redirection vers le jeu
    window.location.href = 'game.html';
});
