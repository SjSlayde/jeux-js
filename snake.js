// Sélection du canevas et du contexte 2D
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

// Définition de la taille de la grille
let box = 20

// Initialisation du serpent
let snake = []
snake[0] = {x: 10*box, y: 10*box}

// Initialisation de la nourriture
let food = {
    x: Math.floor(Math.random()*15+1)*box,
    y: Math.floor(Math.random()*15+1)*box
}

// Initialisation du score
let score = 0

// Variable pour stocker la direction du serpent
let d 

let start = 0
// Écouteur d'événement pour détecter les flèches du clavier
document.addEventListener("keydown",direction);

// Fonction pour modifier la direction du serpent
function direction(event){
    let key = event.keyCode;
    if(key == 37 && d != "RIGHT"){
        d= "LEFT";
    } else if (key == 38 && d != "DOWN"){
        d = "UP"
    } else if (key == 39 && d != "LEFT"){
        d = "RIGHT"
    } else if (key == 40 && d != "UP"){
        d = "DOWN"
    }
    // Appel de la fonction de dessin avec la nouvelle direction
    if(start==0){
        start++
    // Initialisation de l'intervalle de jeu
    let game = setInterval(draw, 200)}
}
//sert juste a eviter les erreur pour l'instant
let game = setInterval(draw, 200)
let snakeX 
let snakeY 


// Fonction de dessin
function draw (){
    // Effacement de l'écran
    context.clearRect(0 , 0 , 400, 400)

    // Boucle pour dessiner chaque segment du serpent
    for(let i = 0;i < snake.length; i++){
        // Couleur du segment en fonction de sa position
        context.fillStyle = (i == 0) ?  "green" : "blue"
        context.fillRect(snake[i].x, snake[i].y, box, box)
        context.strokeStyle = "red"
        context.strokeRect(snake[i].x, snake[i].y, box, box)
    }
    // Dessin de la nourriture
    context.fillStyle = "orange"
    context.fillRect(food.x, food.y, box, box)

    // Déplacement de la tête du serpent
    snakeX = snake[0].x
    snakeY = snake[0].y

    if(d == "LEFT") snakeX -= box;
    if(d == "UP") snakeY -= box;
    if(d == "RIGHT") snakeX += box;
    if(d == "DOWN") snakeY += box;

       // Suppression du dernier segment du serpent
    if(snakeX != food.x || snakeY != food.y){
            snake.pop()
        }

    if(snakeX == food.x && snakeY == food.y){
        score++;
        food = {
            x: Math.floor(Math.random()*15+1)*box,
            y: Math.floor(Math.random()*15+1)*box
        }}

    // Ajout de la nouvelle tête du serpent au tableau
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    
    console.log(snakeX+" x  "+snakeY+" Y ")
    
    snake.unshift(newHead)

    // Affichage du score
    context.fillStyle= "red"
    context.font = "30px Arial"
    context.fillText(score, 2*box, 1.6*box)
    
    // Vérification de la collision avec les bords de l'écran
   if(snakeX < 0 || snakeY < 0 || snakeX > 19*box || snakeY > 19*box || collision(newHead, snake)){
    location.reload()
    }
}

//Vérification de la collision
function collision(head, array){
    for(let i = 1; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true
        }
    }
    return false
}

// ancienne commande de direction pour empecher le snake de sortir de la case
// if(d == "LEFT" && snake[0].x - 20 >= 0 ) snakeX -= box;
// if(d == "UP" && snake[0].y - 20 >= 0 ) snakeY -= box;
// if(d == "RIGHT" && snake[0].x + 40 <= canvas.width) snakeX += box;
// if(d == "DOWN" && snake[0].y + 40 <= canvas.height) snakeY += box;