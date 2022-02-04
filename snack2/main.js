//array di object 
const serieA = [
    {
        'nome': 'Atalanta',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Bologna',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Cagliari',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Empoli',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Fiorentina',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Genoa',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Inter',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Juventus',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Lazio',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Milan',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Napoli',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Roma',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Salernitana',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Sampdoria',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Sassuolo',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Spezia',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Torino',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Udinese',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Venezia',
        'punti_fatti':0,
        'falli_subiti':0,
    },

    {
        'nome':'Verona',
        'punti_fatti':0,
        'falli_subiti':0,
    }

]
//funzione per la creazione di numeri randomici
function numRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//aggiunta del numero di punti fatti
//aggiunta del numero di falli subiti

for(i = 0; i < serieA.length; i++ ){

    serieA[i]['punti_fatti'] = numRandom(0, 114);
    serieA[i]['falli_subiti'] = numRandom(300, 600);
}

console.log(serieA)

//creazione di un nuovo array contenente oggetti con le voci nome e falli subiti

//inizializzo un array vuoto
let serieAFalliSubiti = [];

for(i = 0; i < serieA.length; i++ ){
    //recupero il dato nome e falli subiti
    const{nome, falli_subiti} = serieA[i];
    //inserisco l'object all'interno di un array precedentemente inizializzato
    serieAFalliSubiti.push({nome, falli_subiti});
}

console.log(serieAFalliSubiti);

