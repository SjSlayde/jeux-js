// Sélection du canevas et du contexte 2D
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

// Définition de la taille de la grille
let box = 20

//coordonnée aleatoire de la cible
let cible = {
    x: Math.floor(Math.random()*38+1)*box,
    y: Math.floor(Math.random()*23+1)*box
}

//score
let score = 0

let temps = 60;

let chock = 0

// console.log( canvas.getBoundingClientRect()) //permet de voir la position de l'element et ça taille
canvas.onclick = function (event){
    context.clearRect(0, 0, canvas.width, canvas.height)
    if(temps==60){
        setInterval(draw, 1000)
    }
    let clickX = Math.round(event.clientX - canvas.getBoundingClientRect().x - box)
    let clickY = Math.round(event.clientY - canvas.getBoundingClientRect().y - box)
    let check = 0
    for(let i = 0;i < 21;i++){
        if(clickX == cible.x + i - 10){
            check++;
            break
        }
    }
    
    for(let i = 0;i < 21;i++){
        if(clickY == cible.y + i - 10){
            check++;
            break
        }
    }
    console.log(check);
    
    if(check==2){
        score++;
        console.log("touché")
        cible = {
            x: Math.floor(Math.random()*38+1)*box,
            y: Math.floor(Math.random()*23+1)*box
        }
    } else {
        chock++;
    }
    context.fillStyle = "red"
    context.fillRect(cible.x, cible.y, box, box)
    context.fillStyle= "green"
    context.font = "30px Arial"
    context.fillText("Score:"+score, 34*box, 1.6*box)
    context.fillText("rater:"+chock, 34*box, 3.6*box)
    context.fillText("timer:"+temps, 34*box, 5.6*box)
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "red"
    context.fillRect(cible.x, cible.y, box, box)
    context.fillStyle= "green"
    context.font = "30px Arial"
    context.fillText("Score "+score, 34*box, 1.6*box)
    context.fillText("rater:"+chock, 34*box, 3.6*box)
    temps--
    context.fillText("timer:"+temps, 34*box, 5.6*box)
    if(temps==0){
        location.reload()
    }
  }
// console.log(clickX)
// console.log(cible.x)
// console.log(clickY)
// console.log(cible.y)