
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

function getMiniSquareColored(a, c, d, e){
    a.addEventListener('click', function(){
        if (c.includes(d)){
            alert('Hai perso con un punteggio di ' + e.length);
            a.classList.add('bomb-lose');
        } else {
            a.classList.add('right-square');
            e.push(d);
        }

        if (e.length>(100-16)){
            alert('HAI VINTO CON UN PUNTEGGIO DI ' + e.length);
        }
    })
}

button.addEventListener('click', function(){
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
    


    for (let i=0; i<100; i++){
        let miniSquare;
        miniSquare = document.createElement('div');
        miniSquare.classList.add('mini-square', 'd-flex', 'justify-content-center', 'align-items-center');   
        mainSquare.append(miniSquare);
        num = num +1;
        getMiniSquareColored(miniSquare, bombList, num, goodChoice);
    }
    
})


























