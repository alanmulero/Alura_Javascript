Encontrando o menor valor em um Objeto.
const precosLivros = [{
    titulo : "javascript",
    preco : 10
},
    {
        titulo : "Php",
        preco : 15.00
    },
    {
        titulo : "java",
        preco : 5.00
    },
    {
        titulo : "Python",
        preco : 50.00
    },
    {
        titulo : "Html",
        preco : 25.00
    },
    {
        titulo : "Css",
        preco : 20.00
    }];

let maisBarato = 0;
for (indice = 0 ; indice < precosLivros.length; indice++){
    if (precosLivros[indice].preco < precosLivros[maisBarato].preco) {
        maisBarato = indice; // Sempre linkar oa indice
    }}
console.log(`O titulo do livro mais barato é: ${precosLivros[maisBarato].titulo}`);
console.log(`O valor do livro mais barato é: ${precosLivros[maisBarato].preco.toFixed(2)}`);