// Sélection du canevas et du contexte 2D
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

// Définition de la taille de la grille
let box = 20

let missile = []

let Temps = 0

let A = 8

let start = false

let check = 0

let vaissaux = {
    x: 20*box,
    y: 23*box
}

let ennemis = {
    x: Math.floor(Math.random()*38+1)*box,
    y: 1*box
}

let tire = 0 

let N = 0

//score
let score = 0

context.fillStyle = "red"
context.fillRect(vaissaux.x, vaissaux.y, box, box)


document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if(key == 37){
        vaissaux.x -= box;
    } else if (key == 39){
        vaissaux.x += box
    } else if (key == 38){
        tire++
    } 
    if(start==false){
        game = setInterval(draw, 100)
    }
    start = true
}

// let game = setInterval(draw, 100)
// Fonction de dessin
function draw (){
    // Effacement de l'écran
    context.clearRect(0 , 0 , 800, 500)

    context.fillStyle = "blue"
    context.fillRect(vaissaux.x, vaissaux.y, box, box)
    if(missile[0]!=undefined){
        for(let i = 0;i<missile.length;i++){
            missile[i].y -= box 
            context.fillStyle = "green"
            context.fillRect(missile[i].x, missile[i].y, box, box)
            if((ennemis.x == missile[i].x && ennemis.y == missile[i].y) || (ennemis.x == missile[i].x && ennemis.y == missile[i].y + box) || (ennemis.x == missile[i].x && ennemis.y == missile[i].y - box) ){
                    ennemis = {
                        x: Math.floor(Math.random()*38+1)*box,
                        y: 1*box
                    }

                    score++
                    check++

                    if(check == 5 && A>2){
                        A--
                        check = 0
                    }
            } 
        }
    }
    
    if(tire!=0){
        missile[N] = {
            x: vaissaux.x,
            y: vaissaux.y
        }

        N++

        if(N==20){
            N = 0
        }

        tire = 0}
        
        Temps++
        
        if(Temps>=A){
            ennemis.y += box
            Temps = 0} 
        
        context.fillStyle = "red"
        context.fillRect(ennemis.x, ennemis.y, box, box)
       
        if(ennemis.y == canvas.height){
            alert('you loose\nscore : '+score)
            location.reload()
        }

        context.fillStyle= "red"
        context.font = "20px Arial"
        context.fillText("Score "+score, 34*box, 1.6*box)
    }