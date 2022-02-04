const bici = [
    {
        'nome' : 'Savadeck',
        'peso' : 8,
        'foto': 'img/savadeck.jpg'
    },

    {
        'nome' : 'NAZGGYA' ,
        'peso' : 7,
        'foto': 'img/NAZGGYA.jpg'
    },

    {
        'nome' : 'Canyon' ,
        'peso' : 6.5,
        'foto': 'img/canyon.jpg'
    },

    {
        'nome' : 'Rose',
        'peso' : 6.9,
        'foto': 'img/rose.jpg'
    },

    {
        'nome' : 'Sarto',
        'peso' : 5.7,
        'foto': 'img/sarto.jpg'
    }
    
];

//inizializzo l'array che conterrà i dati della bici più leggera
let biciLeggera = bici[0];

//ciclo for che scorre l'array bici
for(let i = 0; i < bici.length; i++){

    //confronto con l'if per trovare il dato più piccolo
    if(biciLeggera.peso > bici[i].peso){
        biciLeggera = bici[i];
    }
}

//object in cui richiamo tutti i dati della bici
let {nome, peso, foto} = biciLeggera;

//variabili che serviranno per inserire le informazioni all'interno dell'html
let nomeBici = document.getElementById('nome');
let pesoBici = document.getElementById('peso');
let fotoBici = document.getElementById('photo')

//inserisco i dati nell'html
nomeBici.innerHTML = `Modello: ${nome}`;
pesoBici.innerHTML = `Peso: ${peso}Kg`;
fotoBici.innerHTML = `<img src="${foto}" class = 'w-100 img-fluid' alt = "bici">`;