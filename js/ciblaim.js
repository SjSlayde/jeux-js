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
// canvas.onclick = function (event){
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     if(temps==60){
//         setInterval(draw, 1000)
//     }
//     let clickX = Math.round(event.clientX - canvas.getBoundingClientRect().x - box)
//     let clickY = Math.round(event.clientY - canvas.getBoundingClientRect().y - box)
//     let check = 0
//     for(let i = 0;i < 21;i++){
//         if(clickX == cible.x + i - 10){
//             check++;
//             break
//         }
//     }
    
//     for(let i = 0;i < 21;i++){
//         if(clickY == cible.y + i - 10){
//             check++;
//             break
//         }
//     }
//     // console.log(check);
    
//     if(check==2){
//         score++;
//         console.log("touché")
//         cible = {
//             x: Math.floor(Math.random()*38+1)*box,
//             y: Math.floor(Math.random()*23+1)*box
//         }
//     } else {
//         chock++;
//     }
//     context.fillStyle = "red";
//     // context.fillRect(cible.x,cible.y,box,box)
//     drawTarget();
//     context.fillStyle= "green";
//     context.font = "30px Arial";
//     // context.fillText("Score:"+score, 34*box, 1.6*box)
//     // context.fillText("rater:"+(chock-1), 34*box, 3.6*box)
//     // context.fillText("timer:"+temps, 34*box, 5.6*box)
//     document.getElementById("score").textContent = score;
//     document.getElementById("miss").textContent = chock-1;
//     document.getElementById("timer").textContent = temps;
// }

canvas.onclick = function(event){

    if(temps == 60){
        setInterval(draw,1000);
    }


    let rect = canvas.getBoundingClientRect();


    // position réelle du clic dans le canvas
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;


    let clickX = (event.clientX - rect.left) * scaleX;
    let clickY = (event.clientY - rect.top) * scaleY;



    // vérification si le clic est dans la cible
    if(
        clickX >= cible.x &&
        clickX <= cible.x + box &&
        clickY >= cible.y &&
        clickY <= cible.y + box
    ){

        score++;

        cible = {
            x: Math.floor(Math.random()*38+1)*box,
            y: Math.floor(Math.random()*23+1)*box
        };


        draw(); // affichage instantané
    }
    else{

        chock++;

    }


    document.getElementById("score").textContent = score;
    document.getElementById("miss").textContent = chock;

}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "red";
    drawTarget();
    context.fillStyle= "green";
    context.font = "30px Arial";
    // context.fillText("Score "+score, 34*box, 1.6*box)
    // context.fillText("rater:"+(chock-1), 34*box, 3.6*box)
    document.getElementById("score").textContent = score;
    document.getElementById("miss").textContent = chock-1;
    temps--;
    document.getElementById("timer").textContent = temps;
    context.fillText("timer:"+temps, 34*box, 5.6*box)
    // context.fillText("timer:"+temps, 34*box, 5.6*box)
    if(temps==0){
        alert('Score: '+score+'\nchock :'+(chock-1)+'\ncible par seconde :'+score/60);
        location.reload();
    }
  }

function drawTarget(){

    context.beginPath();

    context.arc(
        cible.x + box/2,
        cible.y + box/2,
        box/2,
        0,
        Math.PI*2
    );

    context.fillStyle="red";

    context.fill();

}
// console.log(clickX)
// console.log(cible.x)
// console.log(clickY)
// console.log(cible.y)