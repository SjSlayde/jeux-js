var pierre = document.getElementById("pierre")//1
var papier = document.getElementById("papier")//2
var ciseaux = document.getElementById("ciseaux")//3
var reset = document.getElementById("reset")
var resultat = document.getElementById("resultat")//ciseaux<=pierre<=papier<=ciseaux
var loose=0,win=0,egality=0//3<=2<=1
var BO,round=0
    BO=parseInt(prompt('nombre de round'))
    console.log(Math.floor(BO/2)+1)

    papier.addEventListener('click', function (){
        joueur=1
        round++
        test(joueur)
        resultat.value+="\nround : "+round
        resultat.value+="\nnombre de loose : "+loose
        resultat.value+="\nnombre d'égality : "+egality
        resultat.value+="\nnombre de win : "+win
        if(round==BO){
            if(loose<win){
                alert("GG vous avez gagner");
            }
            else if(loose>win){
                alert('Vous avez perdue');
            }
            else if(loose == win){
                alert("égalité");
            }
        }
    })
    
    pierre.addEventListener('click', function (){
        joueur=2
        round++
        test(joueur)
        resultat.value+="\nround : "+round
        resultat.value+="\nnombre de loose : "+loose
        resultat.value+="\nnombre d'égality : "+egality
        resultat.value+="\nnombre de win : "+win
        if(round==BO){
            if(loose<win){
                alert("GG vous avez gagner");
            }
            else if(loose>win){
                alert('Vous avez perdue');
            }
            else if(loose == win){
                alert("égalité");
            }
        }
    })

    ciseaux.addEventListener('click', function (){
        joueur=3
        round++
        test(joueur)
        resultat.value+="\nround : "+round
        resultat.value+="\nnombre de loose : "+loose
        resultat.value+="\nnombre d'égality : "+egality
        resultat.value+="\nnombre de win : "+win
        if(round==BO){
            if(loose<win){
                alert("GG vous avez gagner")
            }
            else if(loose>win){
                alert('Vous avez perdue')
            }
            else if(loose == win){
                alert("égalité")
            }
        }
    })

    reset.addEventListener('click',function (){
        BO=parseInt(prompt('nombre de round'))
        console.log(Math.floor(BO/2)+1)
    })

function test(joueur){
    mainordisigne= document.getElementById("main")
    let ordi = Math.floor(Math.random(1) *3)+1
    if(ordi==1){
        ordimain="papier"
        mainordisigne.src="img/papier.jpeg"
    }
    else if(ordi==2){
        ordimain="pierre"
        mainordisigne.src="img/pierre.jpg"
    }
    else{
        ordimain="ciseaux"
        mainordisigne.src="img/ciseaux.jpg"
    }
    if(ordi==joueur){
        resultat.value="l'ordi joue : "+ordimain
        resultat.value+="\negaliy";return egality++
    }
    else if (ordi== joueur - 1|| (ordi == 3 && joueur == 1)){
        resultat.value="l'ordi joue : "+ordimain
        resultat.value+="\nyou loose";return loose++
    }
    else{
        resultat.value="l'ordi joue : "+ordimain
        resultat.value+="\nyou win";return win++
    }
}