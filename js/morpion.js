var tour = 0;win1=0;win2=0; //compteur
var VX = "M";
document.getElementById('joueur1').value = "joueur 1 a gagner : "+win1+" partie.";
document.getElementById('joueur2').value = "joueur 2 a gagner : "+win2+" partie.";
var nombredejoueur = prompt("veuillez selectionner le nombre de joueur")

const bouton = document.getElementsByClassName('btn');//armée de bouton

function morpion (N){
    
    if(nombredejoueur == "2"){
        tour++;
        
        if(tour>2){
            tour=1;
        };
        joueurvsjoueur (N);
        changecolor (N);
        
        checkwin()
    }
        
    else if(nombredejoueur == "1"){
            tour = 1
            bouton[N].innerHTML = "V";
            VX= "V"
            changecolor (N);
            reponse = true
            reponse &= checkwin()
            if(reponse){
                return;
            }
            else if (reponse == false) {
                joueurvsbot(N)
            }
    };
};

function joueurvsjoueur (N) {//2 joueurs
    if(tour==1){
        bouton[N].innerHTML = "V";
        VX= "V";
    }
    else{
        bouton[N].innerHTML = "X";
        VX= "X";
    }
}

function joueurvsbot (N){//bot faut que je trouve un moyen de faire en sorte que le bot ne joue pas quand la partie est terminer.
    let random;
        for(let i= 0;i<10;i++){
            random = Math.floor(Math.random() *9)
            if(bouton[random].innerHTML!=""){
                random = Math.floor(Math.random() *9)
            }
            else{
                break;
            }
        }
        console.log(random);
        tour++;
        bouton[random].innerHTML = "X";
        changecolor (random);
        VX= "X";
        checkwin();
}

function changecolor(N){//change la couleur du bouton
    
    if (tour==1){
        bouton[N].style.backgroundColor = "blue";
    }
    
    else if (tour==2){
        bouton[N].style.backgroundColor = "green";
    }
}

function checkwin(){
    test = true
    test &= checkwinsuite(bouton[0].innerHTML==VX && bouton[1].innerHTML==VX && bouton[2].innerHTML==VX && tour!=0);
    test &= checkwinsuite(bouton[3].innerHTML==VX && bouton[4].innerHTML==VX && bouton[5].innerHTML==VX && tour!=0);
    test &= checkwinsuite(bouton[6].innerHTML==VX && bouton[7].innerHTML==VX && bouton[8].innerHTML==VX && tour!=0);
    test &= checkwinsuite(bouton[0].innerHTML==VX && bouton[3].innerHTML==VX && bouton[6].innerHTML==VX && tour!=0);
    test &= checkwinsuite(bouton[1].innerHTML==VX && bouton[4].innerHTML==VX && bouton[7].innerHTML==VX && tour!=0);
    test &= checkwinsuite(bouton[2].innerHTML==VX && bouton[5].innerHTML==VX && bouton[8].innerHTML==VX && tour!=0);
    test &= checkwinsuite(bouton[0].innerHTML==VX && bouton[4].innerHTML==VX && bouton[8].innerHTML==VX && tour!=0);
    test &= checkwinsuite(bouton[2].innerHTML==VX && bouton[4].innerHTML==VX && bouton[6].innerHTML==VX && tour!=0);
    if(test){
        return true
    }
        return false
}

function checkwinsuite (condition,){//regarde si les condition de win sont reunis et compte le nombre de partie gagner 
    if(condition){
        console.log("yop")
        alert("GG joueur "+tour+" a gagner");
        if(tour==1){
            win1++
            document.getElementById('joueur1').value = "joueur 1 a gagner : "+win1+" partie."
        }
        if(tour==2){
            win2++
            document.getElementById('joueur2').value = "joueur 2 a gagner : "+win2+" partie."
        }
        
        for(let i = 0;i<9;i++){
            bouton[i].innerHTML = "";
            bouton[i].style.backgroundColor = "black";
        }
        tour=0;
        return true
    }
    return false
    }

//diago1 ligne4    ligne5    ligne6    diago2
//ligne1 bouton[0];bouton[1];bouton[2];
//ligne2 bouton[3];bouton[4];bouton[5];
//ligne3 bouton[6];bouton[7];bouton[8];