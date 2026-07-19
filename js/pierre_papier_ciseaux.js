const boutons = {
    pierre: document.getElementById("pierre"),
    papier: document.getElementById("papier"),
    ciseaux: document.getElementById("ciseaux")
};


const main = document.getElementById("main");

const resultat = document.getElementById("resultat");


let win = 0;
let loose = 0;
let egality = 0;



Object.keys(boutons).forEach(choix => {


    boutons[choix].onclick = ()=>{

        jouer(choix);

    }


});




function jouer(joueur){


    const choixOrdi = [
        "pierre",
        "papier",
        "ciseaux"
    ][Math.floor(Math.random()*3)];


    if (choixOrdi == "pierre") {
        main.innerHTML = "🪨";
    } else if (choixOrdi == "ciseaux") {
        main.innerHTML = "✂️";
    }else  {
        main.innerHTML = "📄";
    }

    let resultatRound;



    if(joueur == choixOrdi){

        egality++;

        resultatRound="Egalité";

    }


    else if(

        (joueur=="pierre" && choixOrdi=="ciseaux") ||
        (joueur=="papier" && choixOrdi=="pierre") ||
        (joueur=="ciseaux" && choixOrdi=="papier")

    ){

        win++;

        resultatRound="Victoire";

    }


    else{

        loose++;

        resultatRound="Défaite";

    }



    resultat.value =
    "Vous : "+joueur+
    "\nOrdinateur : "+choixOrdi+
    "\nRésultat : "+resultatRound+
    "\n\n"+
    resultat.value;



    document.getElementById("win").textContent=win;
    document.getElementById("loose").textContent=loose;
    document.getElementById("egalite").textContent=egality;


}





document.getElementById("reset").onclick=function(){


    win=0;
    loose=0;
    egality=0;


    document.getElementById("win").textContent=0;
    document.getElementById("loose").textContent=0;
    document.getElementById("egalite").textContent=0;


    resultat.value="";

}