/*
Crie um array com 5 items (tipos variados).
*/
var arr = ['um', 1, true, null, function(){}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function adiciona(x){
  arr.push(x);
  return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
arr.push(['interno-01', 'interno-02', 'interno-03']);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('o segundo elemento do segundo array é ', arr[7][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arr[7].length + ' itens.');


/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var x = 10;
while (x <= 20){
  x % 2 === 1 ? console.log(x) : '';
  x++;
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var x = 10;
while (x < 20){
  x % 2 === 1 ? console.log(x) : '';
  x++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (y = 100; y <= 120; y++){
  y % 2 === 0 ? console.log(y) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for (y = 111; y <= 125; y++){
  y % 2 === 1 ? console.log(y) : '';
}
