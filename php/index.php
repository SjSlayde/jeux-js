<?php
require_once("header.php");
?>

<div id="hero">

    <canvas id="backgroundCanvas"></canvas>

    <div class="hero-content container">

        <h1>Canvas Arcade</h1>

        <p>
            Découvrez une collection de mini-jeux développés entièrement en JavaScript Canvas.
        </p>

        <a href="#games" class="btn btn-primary btn-lg mt-3">
            Jouer maintenant
        </a>

    </div>

</div>

<section class="container py-5">

    <div class="row text-center mb-5">

        <div class="col-md-4">
            <h2>5+</h2>
            <p>Mini-jeux</p>
        </div>

        <div class="col-md-4">
            <h2>100%</h2>
            <p>Canvas JavaScript</p>
        </div>

        <div class="col-md-4">
            <h2>Gratuit</h2>
            <p>Sans téléchargement</p>
        </div>

    </div>

</section>

<section id="games" class="container pb-5">

    <div class="row g-4">

        <!-- Snake -->

        <div class="col-lg-4 col-md-6">

            <a href="snake.php" class="game-card">

                <img src="../image/image_jeux/snake2.png">

                <div class="game-info">

                    <span class="badge bg-success mb-2">
                        Arcade
                    </span>

                    <h3>Snake</h3>

                    <p>
                        Le célèbre Snake revisité en Canvas.
                    </p>

                    <button class="btn btn-outline-light">
                        ▶ Jouer
                    </button>

                </div>

            </a>

        </div>

        <!-- Morpion -->

        <div class="col-lg-4 col-md-6">

            <a href="morpion.php" class="game-card">

                <img src="../image/image_jeux/morpion2.png">

                <div class="game-info">

                    <span class="badge bg-warning text-dark mb-2">
                        Réflexion
                    </span>

                    <h3>Morpion</h3>

                    <p>
                        Affrontez un ami ou l'ordinateur.
                    </p>

                    <button class="btn btn-outline-light">
                        ▶ Jouer
                    </button>

                </div>

            </a>

        </div>

        <!-- Chifoumi -->

        <div class="col-lg-4 col-md-6">

            <a href="pierre_papier_ciseaux.php" class="game-card">

                <img src="../image/image_jeux/chifoumi2.png">

                <div class="game-info">

                    <span class="badge bg-primary mb-2">
                        Classique
                    </span>

                    <h3>Chifoumi</h3>

                    <p>
                        Pierre, papier, ciseaux contre l'IA.
                    </p>

                    <button class="btn btn-outline-light">
                        ▶ Jouer
                    </button>

                </div>

            </a>

        </div>

        <!-- Ciblaim -->

        <div class="col-lg-4 col-md-6">

            <a href="ciblaim.php" class="game-card">

                <img src="../image/image_jeux/ciblaim2.png">

                <div class="game-info">

                    <span class="badge bg-danger mb-2">
                        Action
                    </span>

                    <h3>Ciblaim</h3>

                    <p>
                        Testez votre précision.
                    </p>

                    <button class="btn btn-outline-light">
                        ▶ Jouer
                    </button>

                </div>

            </a>

        </div>

        <!-- Space Invader -->

        <div class="col-lg-4 col-md-6">

            <a href="spaceinvader.php" class="game-card">

                <img src="../image/image_jeux/space_invader2.png">

                <div class="game-info">

                    <span class="badge bg-secondary mb-2">
                        En développement
                    </span>

                    <h3>Space Invader</h3>

                    <p>
                        Prochainement disponible.
                    </p>

                    <button class="btn btn-outline-light">
                        Découvrir
                    </button>

                </div>

            </a>

        </div>

    </div>

</section>

<?php
require_once("footer.php");
?>