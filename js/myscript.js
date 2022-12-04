
// PRIMA RICHIESTA
/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

// SECONDA RICHIESTA
/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba
- la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti
(ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio,
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/


let button = document.querySelector('.btn');

// PARTE MAIN CON LI SQUARES (MAIN SQUARE E MINI SQUARES)

function randomNumber(numMin, numMax){
    const random = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    return random;
}

let main = document.getElementById('main-square-container');

function getMiniSquareColored(miniSquareHere, bombListHere, numHere, goodChoiceHere, isGameOver){
    const proximityArrayGeneral = [-11, -10, -9, -1, 1, 9, 10, 11];
    const proximityArrayLeft = [-10, -9, 1, 10, 11];
    const proximityArrayRight = [-11, -10, -1, 9, 10];

    miniSquareHere.addEventListener('click', function(){
        let base = 0;

        const lastDigit2Str = String(numHere).slice(-1);

        if (lastDigit2Str != 1 & lastDigit2Str != 0){
            miniSquareHere.append('');
            for (i=0; i<proximityArrayGeneral.length; i++){
                if (bombListHere.includes(numHere + proximityArrayGeneral[i])){ 
                    base += 1;
                }
            }
            miniSquareHere.innerHTML = base;
            miniSquareHere.classList.add('right-square');
            
        }   if (lastDigit2Str == 1){
            miniSquareHere.append('');
            for (i=0; i<proximityArrayLeft.length; i++){
                if (bombListHere.includes(numHere + proximityArrayLeft[i])){
                    base += 1;
                }
            }
            miniSquareHere.innerHTML = base;
            miniSquareHere.classList.add('right-square');
        }   if (lastDigit2Str == 0){
            miniSquareHere.append('');
            for (i=0; i<proximityArrayRight.length; i++){
                if (bombListHere.includes(numHere + proximityArrayRight[i])){
                    base += 1;
                }
            }
            miniSquareHere.innerHTML = base;
            miniSquareHere.classList.add('right-square');
        }
        
    
        if (bombListHere.includes(numHere)){
            alert('Hai perso con un punteggio di ' + goodChoiceHere.length);
            miniSquareHere.classList.add('bomb-lose');

        } else {
            miniSquareHere.classList.add('right-square');
            goodChoiceHere.push(numHere);
        }

        if (goodChoiceHere.length>(100-16)){
            alert('HAI VINTO CON UN PUNTEGGIO DI ' + goodChoiceHere.length);
        }
    })
}

button.addEventListener('click', function(){
    let isGameOver = [];
    main.innerHTML = "";
    let mainSquare = document.createElement('div');
    mainSquare.classList.add('main-square', 'd-flex', 'flex-wrap');
    main.append(mainSquare);
    let num = 0;

    let goodChoice = [];

    let bombList = [];

    while (bombList.length<16){
        let randomBomb = randomNumber(1, 100)
        if (!bombList.includes(randomBomb)){
            bombList.push(randomBomb);
        }
    }
    console.log(bombList);

    let miniSquare;

    for (let i=0; i<100; i++){
        miniSquare = document.createElement('div');
        miniSquare.classList.add('mini-square', 'd-flex', 'justify-content-center', 'align-items-center');   
        mainSquare.append(miniSquare);
        num = num +1;
        miniSquare.append(num);
        getMiniSquareColored(miniSquare, bombList, num, goodChoice, isGameOver);
    }




    
    
})

































