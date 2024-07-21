document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const playerName = document.getElementById('player-name').value;
    if (playerName) {
        // Stocker le prénom dans le stockage local
        localStorage.setItem('playerName', playerName);
        // Rediriger vers la page du jeu
        window.location.href = 'game.html';
    }
});

