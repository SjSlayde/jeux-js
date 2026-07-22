<footer class="site-footer">
    <p>
        © <?= date('Y') ?> Canvas Arcade
    </p>

    <nav class="footer-legal-links">
        <a href="mentions-legales.php">
            Mentions légales
        </a>

        <a href="confidentialite.php">
            Confidentialité
        </a>
    </nav>

</footer>
    

<script src="<?php if($_SERVER['REQUEST_URI']=='/morpion.php')echo '../js/morpion.js';
else if($_SERVER['REQUEST_URI']=='/snake.php') echo '../js/snake.js'; 
else if($_SERVER['REQUEST_URI']=='/pierre_papier_ciseaux.php')  echo '../js/pierre_papier_ciseaux.js';
else if($_SERVER['REQUEST_URI']=='/ciblaim.php')  echo '../js/ciblaim.js';
else if($_SERVER['REQUEST_URI']=='/spaceinvader.php')  echo '../js/spaceinvader.js'; ?>"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>