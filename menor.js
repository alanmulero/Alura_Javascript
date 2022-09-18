const lista = [25,15,0,50,45,1,20];
let menor = 0;//Essa variavel vai receber o indice do menor valor.
for (indice = 0; indice < lista.length ; indice++){

    if(lista[indice] < lista[menor]){
        menor = indice; // Variável menor recebendo o  indice.
    }
}
console.log(`O menor número é: ${lista[menor]}`);