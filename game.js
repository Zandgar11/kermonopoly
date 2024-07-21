window.addEventListener('load', function() {
    const playerName = localStorage.getItem('playerName');
    if (playerName) {
        document.getElementById('player-name').textContent = playerName;
    } else {
        // Rediriger vers la page d'accueil si le prénom n'est pas défini
        window.location.href = 'index.html';
    }
});
