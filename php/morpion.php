<?php
require_once('header.php')
    ?>

<div id="game-page">


    <section class="game-header mt-5">

        <h1>⭕ Morpion</h1>

        <p>
            Affrontez votre adversaire et alignez 3 symboles
            pour remporter la partie.
        </p>

    </section>



    <div class="morpion-layout">


        <div class="morpion-card">


            <div id="boardgame">


                <button id="bouton1" class="btn-play" onclick="morpion(0)"></button>
                <button id="bouton2" class="btn-play" onclick="morpion(1)"></button>
                <button id="bouton3" class="btn-play" onclick="morpion(2)"></button>

                <button id="bouton4" class="btn-play" onclick="morpion(3)"></button>
                <button id="bouton5" class="btn-play" onclick="morpion(4)"></button>
                <button id="bouton6" class="btn-play" onclick="morpion(5)"></button>

                <button id="bouton7" class="btn-play" onclick="morpion(6)"></button>
                <button id="bouton8" class="btn-play" onclick="morpion(7)"></button>
                <button id="bouton9" class="btn-play" onclick="morpion(8)"></button>


            </div>


        </div>




        <aside class="game-info">


            <div class="info-box">

                <h3>🎮 Mode</h3>

                <button class="mode-btn" onclick="setMode(2)">
                    Joueur VS Joueur
                </button>


                <button class="mode-btn" onclick="setMode(1)">
                    Joueur VS IA
                </button>


            </div>



            <div class="info-box scores">


                <h3>🏆 Scores</h3>


                <p>
                    🔵 Joueur 1 :
                    <span id="score1">0</span>
                </p>


                <p>
                    🟢 Joueur 2 :
                    <span id="score2">0</span>
                </p>


            </div>



            <button class="restart-btn" onclick="reset()">
                🔄 Nouvelle partie
            </button>



        </aside>


    </div>


</div>


<?php
require_once('footer.php')
    ?>