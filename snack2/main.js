//array di object 
const serieA = [
    {
        'nome': 'Atalanta',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Bologna',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Cagliari',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Empoli',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Fiorentina',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Genoa',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Inter',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Juventus',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Lazio',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Milan',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Napoli',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Roma',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Salernitana',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Sampdoria',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Sassuolo',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Spezia',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Torino',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Udinese',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Venezia',
        'punti fatti':0,
        'falli subiti':0,
    },

    {
        'nome':'Verona',
        'punti fatti':0,
        'falli subiti':0,
    }

]
//funzione per la creazione di numeri randomici
function numRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//aggiunta del numero di punti fatti

for(i = 0; i < serieA.length; i++ ){

    serieA[i]['punti fatti'] = numRandom(0, 114);
}


//aggiunta del numero di falli subiti

for(i = 0; i < serieA.length; i++ ){

    serieA[i]['falli subiti'] = numRandom(300, 600);
}


console.log(serieA)

//creazione di un nuovo array contenente oggetti con le voci nome e falli subiti

//inizializzo un array vuoto
let serieAFalliSubiti = [];

for(i = 0; i < serieA.length; i++ ){
    //recupero il dato nome
    let nome = serieA[i]['nome'];
    //recupero il dato falli subiti
    let falliSubiti = serieA[i]['falli subiti'];
    //unisco i dati in un object
    let items = {nome, falliSubiti};
    //inserisco l'object all'interno di un array precedentemente inizializzato
    serieAFalliSubiti.push(items);
}

console.log(serieAFalliSubiti);

