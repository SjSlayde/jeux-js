<?php 
require_once('header.php')
?>

<div id="game-page">


<section class="game-header">

    <h1>👾 Space Invader</h1>

    <p>
        Détruis les envahisseurs avant qu'ils atteignent la planète.
    </p>

</section>


<div class="game-layout">


    <div class="game-card">

        <div class="canvas-container">

            <canvas width="800" height="500"></canvas>

        </div>

    </div>

    <aside class="game-info">

        <div class="info-box">

            <h3>🏆 Score</h3>

            <p>
                <span id="score">
                    0
                </span>
            </p>

        </div>


        <div class="info-box">

            <h3>🎮 Commandes</h3>

            <p>
                ⬅️ ➡️ Déplacer le vaisseau
            </p>

            <p>
                ⬆️ Tirer
            </p>

        </div>

        <div class="info-box">

            <h3>🚀 Objectif</h3>

            <p>
                Détruire un maximum d'ennemis
                avant leur arrivée.
            </p>

        </div>

        <button 
        class="restart-btn"
        onclick="location.reload()">

            🔄 Recommencer

        </button>

    </aside>

</div>

</div>

<?php 
require_once('footer.php')
?>