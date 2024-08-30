const prompt = require('prompt-sync');
const entrada = prompt();

var numerosSomados = entrada(`Digite aqui quantos números desejas somar: `);

let numero = 0;
let soma = 0;


for (let i = 0; i < numerosSomados; i++){
  numero = entrada(`Digite o numero a ser somado:`);
  soma += parseInt(numero);
}

console.log(soma);
