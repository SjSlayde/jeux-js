let tour = 0;win1=0;win2=0; //compteur
let VX = "M";
document.getElementById('score1').innerHTML = win1;
document.getElementById('score2').innerHTML = win2;
let nombredejoueur = 1;


function setMode(mode){

    nombredejoueur = mode;

    reset();

}

const bouton = document.getElementsByClassName('btn-play');//armée de bouton

function morpion(N) {
  if (nombredejoueur == "2") {

    if (testOccupation(N) == true) {
      tour++;

      if (tour > 2) {
        tour = 1;
      }
      joueurvsjoueur(N);
      // changecolor (N);

      checkwin();
    } else if (testOccupation(N) == false) {
      alert("la case est déjà occupée");
      return;
    }

  } else if (nombredejoueur == "1") {

    tour = 1;
    VX = "⭕";
    if (testOccupation(N) == true) {
      bouton[N].innerHTML = VX;
    } else if (testOccupation(N) == false) {
      alert("la case est déjà occupée");
      return;
    }
    // changecolor (N); //tour joueur
    if (checkwin() == true) {
      return;
    } else {
      tour++;
      joueurvsbot();
    }
    
  }
};

function testOccupation(N){
            if (bouton[N].innerHTML ==""){
                    return true
            } else if (bouton[N].innerHTML !=""){
                return false;
            }
}

function joueurvsjoueur (N) {//2 joueurs
    if(tour==1){
        // bouton[N].innerHTML = "V";
        bouton[N].innerHTML = "⭕";
        bouton[N].classList.add("player1");
        VX = "⭕";
    }
    else{
        // bouton[N].innerHTML = "X";
        bouton[N].innerHTML = "❌";
        bouton[N].classList.add("player2");
        VX = "❌";
    }
}

function joueurvsbot (){//bot faut que je trouve un moyen de faire en sorte que le bot ne joue pas quand la partie est terminer.
    random = Math.floor(Math.random() *9)
        while(bouton[random].innerHTML!=""){
            random = Math.floor(Math.random() *9)
        }
        bouton[random].innerHTML = "❌";
        // changecolor (random);
        VX = "❌";
        checkwin();
}



function checkwin(){
    
    const combinaisons = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    
    for(let combinaison of combinaisons){
        
        let a = combinaison[0];
        let b = combinaison[1];
        let c = combinaison[2];
        
        
        if(
            bouton[a].innerHTML == VX &&
            bouton[b].innerHTML == VX &&
            bouton[c].innerHTML == VX
        ){
            
            alert("GG joueur "+tour+" a gagner");
            if(tour==1){
                win1++
                document.getElementById('score1').innerHTML = win1;
            }
            if(tour==2){
                win2++
                document.getElementById('score2').innerHTML = win2;
            }   
            reset();
            
            return true;
        }
        
    }
    
    return false;
}


function reset(){
    
    for(let i = 0;i<9;i++){
        
        bouton[i].innerHTML = "";
        
        bouton[i].classList.remove(
            "player1",
            "player2"
        );
        
    }
    
    tour=0;
}

//diago1 ligne4    ligne5    ligne6    diago2
//ligne1 bouton[0];bouton[1];bouton[2];
//ligne2 bouton[3];bouton[4];bouton[5];
//ligne3 bouton[6];bouton[7];bouton[8];

// R.I.P V1

// function checkwin(){
//     test = true
//     test &= checkwinsuite(bouton[0].innerHTML==VX && bouton[1].innerHTML==VX && bouton[2].innerHTML==VX && tour!=0);
//     test &= checkwinsuite(bouton[3].innerHTML==VX && bouton[4].innerHTML==VX && bouton[5].innerHTML==VX && tour!=0);
//     test &= checkwinsuite(bouton[6].innerHTML==VX && bouton[7].innerHTML==VX && bouton[8].innerHTML==VX && tour!=0);
//     test &= checkwinsuite(bouton[0].innerHTML==VX && bouton[3].innerHTML==VX && bouton[6].innerHTML==VX && tour!=0);
//     test &= checkwinsuite(bouton[1].innerHTML==VX && bouton[4].innerHTML==VX && bouton[7].innerHTML==VX && tour!=0);
//     test &= checkwinsuite(bouton[2].innerHTML==VX && bouton[5].innerHTML==VX && bouton[8].innerHTML==VX && tour!=0);
//     test &= checkwinsuite(bouton[0].innerHTML==VX && bouton[4].innerHTML==VX && bouton[8].innerHTML==VX && tour!=0);
//     test &= checkwinsuite(bouton[2].innerHTML==VX && bouton[4].innerHTML==VX && bouton[6].innerHTML==VX && tour!=0);
//     if(test){
//         reset()
//         return true
//     }
//     return false
// }

// function checkwinsuite (condition,){//regarde si les condition de win sont reunis et compte le nombre de partie gagner 
//     if(condition){
//         alert("GG joueur "+tour+" a gagner");
//         if(tour==1){
//             win1++
//             document.getElementById('score1').innerHTML = win1;
//         }
//         if(tour==2){
//             win2++
//             document.getElementById('score2').innerHTML = win2;
//         }    
//         reset()
//         return true
//     }
//     return false
// }

// function changecolor(N){//change la couleur du bouton
//     if (tour==1){
    //         bouton[N].style.backgroundColor = "blue";
    //     }
    //         else if (tour==2){
        //         bouton[N].style.backgroundColor = "green";
        //     }
        // }
        
        // function reset(){
            //     for(let i = 0;i<9;i++){
                //         bouton[i].innerHTML = "";
                //         bouton[i].style.backgroundColor = "black";
                //     }
                //     tour=0;
                // }         
                