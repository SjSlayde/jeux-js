<?php 
require_once('header.php')
?>
<div id="backgroundbody">
    <div id="porte-carte" class="row justify-content-center">
    <div class="container">
        <div id="boardgame" class="row justify-content-center">
            <button id="bouton1" class="btn rounded-pill mt-4 col-4" style="height: 40px;" onclick="morpion(0)"></button>
            <button id="bouton2" class="btn rounded-pill mt-4 col-4" style="height: 40px;" onclick="morpion(1)"></button>
            <button id="bouton3" class="btn rounded-pill mt-4 col-4" style="height: 40px;" onclick="morpion(2)"></button>
            <button id="bouton4" class="btn rounded-pill mt-4 col-4" style="height: 40px;" onclick="morpion(3)"></button>
            <button id="bouton5" class="btn rounded-pill mt-4 col-4" style="height: 40px;" onclick="morpion(4)"></button>
            <button id="bouton6" class="btn rounded-pill mt-4 col-4" style="height: 40px;" onclick="morpion(5)"></button>
            <button id="bouton7" class="btn rounded-pill mt-4 col-4" style="height: 40px;" onclick="morpion(6)"></button>
            <button id="bouton8" class="btn rounded-pill mt-4 col-4" style="height: 40px;" onclick="morpion(7)"></button>
            <button id="bouton9" class="btn rounded-pill mt-4 col-4" style="height: 40px;" onclick="morpion(8)"></button>
            <input type="text" id="joueur1" class="mx-5 mt-5 col-4"><input type="text" id="joueur2" class="mx-5 mt-5 col-4">
        </div>
    </div>
</div>
</div>
</body>
<?php
require_once('footer.php')
?>