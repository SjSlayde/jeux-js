<?php 
require_once('header.php')
?>

<div id="game-page" class="mt-5">


<section class="game-header">

    <h1>✊ Chifoumi</h1>

    <p>
        Affronte l'ordinateur dans un duel pierre, papier, ciseaux.
    </p>

</section>



<div class="game-layout">

    <div class="game-card">

        <h2>Choisis ton attaque</h2>

        <div class="choice-buttons">

            <button id="papier" class="choice">
                📄
                <span>Papier</span>
            </button>

            <button id="pierre" class="choice">
                🪨
                <span>Pierre</span>
            </button>

            <button id="ciseaux" class="choice">
                ✂️
                <span>Ciseaux</span>
            </button>

        </div>

    </div>

    <aside class="game-info">

        <div class="info-box">

            <h3>🤖 Adversaire</h3>


            <h1 id="main">

            </h1>

        </div>

        <div class="info-box">
            <h3>🏆 Score</h3>

            <p>
                🟢 Victoire :
                <span id="win">0</span>
            </p>

            <p>
                🔴 Défaite :
                <span id="loose">0</span>
            </p>

            <p>
                🟡 Egalité :
                <span id="egalite">0</span>
            </p>

        </div>

        <div class="info-box">

            <h3>📜 Historique</h3>

            <textarea id="resultat" readonly></textarea>

        </div>

        <button id="reset" class="restart-btn">
            🔄 Recommencer
        </button>

    </aside>

</div>

</div>

<?php
require_once('footer.php')
?>