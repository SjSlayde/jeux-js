<?php require_once('header.php') ?>

<div id="game-page" class="mt-5">


    <section class="game-header">

        <h1>🎯 Ciblaim</h1>

        <p>
            Clique rapidement sur les cibles qui apparaissent.
            Fais le meilleur score en 60 secondes.
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

                <h3>📊 Statistiques</h3>


                <p>
                    🎯 Score :
                    <span id="score">
                        0
                    </span>
                </p>

                <p>
                    ❌ Ratés :
                    <span id="miss">
                        0
                    </span>
                </p>

                <p>
                    ⏱ Temps :
                    <span id="timer">
                        60
                    </span>s
                </p>

            </div>

            <div class="info-box">

                <h3>🎮 Comment jouer</h3>

                <p>
                    Clique sur les cibles rouges
                    avant la fin du chrono.
                </p>

            </div>

            <button class="restart-btn" onclick="location.reload()">

                🔄 Recommencer

            </button>

        </aside>

    </div>

</div>



<?php require_once('footer.php') ?>