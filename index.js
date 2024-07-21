document.getElementById('username-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    
    if (username) {
        // Enregistrer le nom d'utilisateur dans localStorage
        localStorage.setItem('username', username);
        // Rediriger vers la page de jeu
        window.location.href = 'game.html';
    }
});
