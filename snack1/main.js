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
    let pesoBici = [];
for(let i = 0; i < bici.length; i++){
    let peso = bici[i].peso;

    pesoBici.push(peso);
}

console.log(Math.min(...pesoBici))

