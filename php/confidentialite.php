<?php
require_once('header.php');
?>

<main class="legal-page">

    <section class="legal-hero">
        <span class="legal-badge">Respect de votre vie privée</span>

        <h1>Politique de confidentialité</h1>

        <p>
            Canvas Arcade fonctionne sans compte utilisateur,
            sans formulaire et sans base de données.
        </p>
    </section>

    <section class="legal-container">

        <article class="privacy-summary">

            <div class="privacy-summary-icon">
                🛡️
            </div>

            <div>
                <h2>Votre partie reste privée</h2>

                <p>
                    Canvas Arcade ne demande aucune information personnelle
                    et n’enregistre pas vos parties sur un serveur.
                </p>
            </div>

        </article>

        <div class="privacy-grid">

            <article class="privacy-card">
                <span class="privacy-status">Aucune collecte</span>

                <div class="privacy-icon">👤</div>

                <h2>Données personnelles</h2>

                <p>
                    Canvas Arcade ne collecte aucune donnée personnelle
                    directement auprès de ses visiteurs.
                </p>

                <ul class="privacy-list">
                    <li>Aucun compte utilisateur</li>
                    <li>Aucune inscription</li>
                    <li>Aucun formulaire de contact</li>
                    <li>Aucun nom demandé</li>
                    <li>Aucune adresse e-mail demandée</li>
                    <li>Aucun numéro de téléphone demandé</li>
                </ul>
            </article>

            <article class="privacy-card">
                <span class="privacy-status">Aucun serveur</span>

                <div class="privacy-icon">💾</div>

                <h2>Stockage des parties</h2>

                <p>
                    Les scores, les choix effectués et la progression dans
                    les jeux ne sont pas enregistrés dans une base de données.
                </p>

                <p>
                    Les informations nécessaires au fonctionnement d’une
                    partie peuvent être conservées temporairement dans la
                    mémoire du navigateur pendant que la page est ouverte.
                </p>

                <p>
                    Elles disparaissent lorsque la partie est réinitialisée,
                    lorsque la page est actualisée ou lorsque l’onglet est
                    fermé.
                </p>
            </article>

            <article class="privacy-card">
                <span class="privacy-status">Aucun suivi</span>

                <div class="privacy-icon">🍪</div>

                <h2>Cookies et traceurs</h2>

                <p>
                    Canvas Arcade ne dépose volontairement aucun cookie
                    publicitaire, cookie de mesure d’audience ou autre
                    traceur destiné à suivre la navigation des visiteurs.
                </p>

                <p>
                    Aucun outil tel que Google Analytics, Meta Pixel ou
                    système publicitaire n’est utilisé sur le site.
                </p>

                <p>
                    Des éléments techniques peuvent néanmoins être générés
                    par le navigateur ou l’hébergeur indépendamment du code
                    de Canvas Arcade.
                </p>
            </article>

            <article class="privacy-card">
                <span class="privacy-status">Aucun partage</span>

                <div class="privacy-icon">🤝</div>

                <h2>Transmission à des tiers</h2>

                <p>
                    Canvas Arcade ne collectant aucune donnée personnelle,
                    aucune donnée n’est vendue, louée ou transmise à des
                    partenaires commerciaux.
                </p>
            </article>

            <article class="privacy-card">
                <span class="privacy-status">Jeux locaux</span>

                <div class="privacy-icon">🎮</div>

                <h2>Fonctionnement des jeux</h2>

                <p>
                    Les mini-jeux utilisent JavaScript et l’élément HTML
                    Canvas pour fonctionner directement dans le navigateur.
                </p>

                <p>
                    Les déplacements, scores, résultats et actions du joueur
                    sont traités localement afin d’afficher la partie en
                    cours.
                </p>
            </article>

            <article class="privacy-card">
                <span class="privacy-status">Contact</span>

                <div class="privacy-icon">✉️</div>

                <h2>Question relative à la confidentialité</h2>

                <p>
                    Pour toute question concernant le fonctionnement du site
                    ou la présente politique, vous pouvez contacter
                    l’éditeur à l’adresse suivante :
                </p>

                <a href="mailto:[VOTRE-EMAIL]" class="privacy-email">
                    [VOTRE-EMAIL]
                </a>
            </article>

        </div>

        <article class="legal-card">
            <div class="legal-icon">📅</div>

            <div class="legal-content">
                <h2>Évolution de cette politique</h2>

                <p>
                    Cette politique correspond au fonctionnement actuel de
                    Canvas Arcade au 22 juillet 2026.
                </p>

                <p>
                    Elle devra être mise à jour si le site ajoute notamment :
                </p>

                <ul class="legal-list">
                    <li>des comptes utilisateurs ;</li>
                    <li>un classement en ligne ;</li>
                    <li>une base de données ;</li>
                    <li>un formulaire de contact ;</li>
                    <li>un outil de statistiques d’audience ;</li>
                    <li>des publicités ou des services tiers ;</li>
                    <li>une sauvegarde des scores dans le navigateur.</li>
                </ul>
            </div>
        </article>

        <div class="legal-navigation">
            <a href="mentions-legales.php"
               class="legal-button legal-button-secondary">
                ← Mentions légales
            </a>

            <a href="index.php" class="legal-button">
                Retour aux jeux →
            </a>
        </div>

    </section>

</main>

<?php
require_once('footer.php');
?>