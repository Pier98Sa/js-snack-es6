const bici = [
    {
        'nome' : 'Savadeck',
        'peso' : 8
    },

    {
        'nome' : 'NAZGGYA' ,
        'peso' : 7
    },

    {
        'nome' : 'Canyon' ,
        'peso' : 6.5
    },

    {
        'nome' : 'Rose',
        'peso' : 6.9
    },

    {
        'nome' : 'Sarto',
        'peso' : 5.7
    }
    
];


let biciLeggera = bici[0];
for(let i = 0; i < bici.length; i++){
    if(biciLeggera.peso > bici[i].peso){
        biciLeggera = bici[i];
    }
}

let {nome, peso} = biciLeggera;

let nomeBici = document.getElementById('nome');
let pesoBici = document.getElementById('peso');

nomeBici.innerHTML = nome;
pesoBici.innerHTML = peso;