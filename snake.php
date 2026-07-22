<?php 
require_once('header.php')
?>

<div id="game-page" class="mt-5">

    <section class="game-header">
        <h1>🐍 Snake</h1>
        <p>
            Mange les pommes, grandis et réalise le meilleur score.
            Attention à ne pas te mordre !
        </p>
    </section>


    <div class="game-layout">

        <div class="game-card">

            <div class="canvas-container">

                <div class="score ms-3 mt-3">
                    Score : <span id="score">0</span>
                </div>

                <canvas width="800" height="500"></canvas>
            </div>

        </div>


        <aside class="game-info">

            <div class="info-box">
                <h3>🎮 Commandes</h3>

                <div class="keys">
                    <span>⬆️</span>
                    <span>⬅️</span>
                    <span>⬇️</span>
                    <span>➡️</span>
                </div>

                <p>
                    Utilise les flèches du clavier pour déplacer le serpent.
                </p>
            </div>


            <div class="info-box">
                <h3>🏆 Objectif</h3>
                <p>
                    Fais le plus grand score possible sans toucher les murs
                    ou ton propre corps.
                </p>
            </div>


            <button onclick="location.reload()" class="restart-btn">
                🔄 Recommencer
            </button>

        </aside>

    </div>

</div>


<?php
require_once('footer.php')
?>