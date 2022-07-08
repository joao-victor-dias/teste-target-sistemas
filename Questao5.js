const string= "olá mundo";

var vetString = string.split("");
var tamanhoVetor = vetString.length;
var vetStringInvertida = [];

for(let i = tamanhoVetor-1; i >= 0; i--){
    var valor = vetString[i];
    vetStringInvertida.push(valor);
}

for(let i = 0; i < tamanhoVetor; i++){
    console.log(vetStringInvertida[i]);
}

