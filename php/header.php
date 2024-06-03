<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeux Js</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/index.css">
</head>
<body>
<header>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Jeux Js</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link <?php if($_SERVER['REQUEST_URI']=='/php/index.php')echo 'active';  ?>" aria-current="page" href="index.php">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?php if($_SERVER['REQUEST_URI']=='/php/snake.php')echo 'active';  ?>" href="snake.php">Snake</a>
        </li>
        <li class="nav-item">
            <a class="nav-link <?php if($_SERVER['REQUEST_URI']=='/php/morpion.php')echo 'active';  ?>" href="morpion.php">Morpion</a>
        </li>
        <li class="nav-item">
            <a class="nav-link <?php if($_SERVER['REQUEST_URI']=='/php/pierre_papier_ciseaux.php')echo 'active';  ?>" href="pierre_papier_ciseaux.php">Chifoumi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?php if($_SERVER['REQUEST_URI']=='/php/ciblaim.php')echo 'active';  ?>" aria-current="page" href="ciblaim.php">Ciblaim</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?php if($_SERVER['REQUEST_URI']=='/php/spaceinvader.php')echo 'active';  ?>" aria-current="page" href="spaceinvader.php">Space invader</a>
        </li>
      </ul>
    </div>
</nav>
<div class="image_banniere d-md-none">
    <img src="../image/banniere2.jpg" id="banniere" alt="baniere" class="img-fluid">
</div>
</header>