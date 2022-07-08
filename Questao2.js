var numero = 50;

var numeroComparacao = 0;
var fibonacci = [0,1];
var presenteNoIntervalo = false;

if(numero === 0 || numero ===1 ){
    var presenteNoIntervalo = true;
}else{
    for(let i = 2;numeroComparacao <= numero; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        numeroComparacao = fibonacci[i];    
        if(numeroComparacao === numero) presenteNoIntervalo = true;
    }
}

console.log(`O número ${numero} pertence a sequência? R:${presenteNoIntervalo}`);

