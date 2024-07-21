<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monopoly - Jeu</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Monopoly Personnalisé</h1>
    </header>
    <main>
        <div id="game-container">
            <div id="board">
                <!-- Cases du Monopoly -->
                <div class="corner" id="start">Départ</div>
                <!-- Ajouter les cases ici -->
                <div class="corner" id="free-parking">Libre Parc</div>
                <!-- Centre du plateau avec informations du joueur -->
                <div id="info-panel">
                    <h2>Informations du Jeu</h2>
                    <p id="player-info">Joueur : <span id="player-name"></span></p>
                    <p id="balance">Solde : <span id="player-balance">1500</span> $</p>
                    <button id="end-turn">Finir le tour</button>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <p>&copy; 2024 Monopoly Personnalisé</p>
    </footer>
    <script src="game.js"></script>
</body>
</html>

