/*1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.*/

alert("Hello World!")

/*2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.*/

let number1 = prompt("Digite o primeiro numero")
let number2 = prompt("Digite o segundo numero")

sun = Number(number1) + Number(number2)

alert(`A soma dos numeros é: ${sun}`)

/*3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
Para saber o tipo de dado você pode usar o operador `typeof`*/

let number = prompt("Digite um numero")

realNumber = Number(number)

if(realNumber) {
  alert(`${realNumber} é um numero!`)
} else {
  alert(`Não é um numero`)
}
    
/*4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".*/

let word = prompt("Digite uma palavra")

let num = Number(word)

if(word != num){
  alert(`${word} é uma String!`)
} else {
  alert(`${word} não uma String!`)
}

/*5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/

let word1 = prompt("Digite uma palavra")

if(word1){
  alert(`${word1} é um booleano!`)
} else {
  alert(`${word1} não um booleano!`)
}

/*6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.*/

let number11 = prompt("Digite o primeiro numero")
let number22 = prompt("Digite o segundo numero")

sub = Number(number1) - Number(number2)

alert(`A soubtração dos numeros é: ${sub}`)

/*7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.*/

let number111 = prompt("Digite o primeiro numero")
let number222 = prompt("Digite o segundo numero")

mult = Number(number1) * Number(number2)

alert(`A multiplicação dos numeros é: ${mult}`)

/*8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.*/

let number1111 = prompt("Digite o primeiro numero")
let number2222 = prompt("Digite o segundo numero")

div = Number(number1) / Number(number2)

alert(`A divisão dos numeros é: ${div}`)

/*9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".*/

var numb1 = prompt("Digite um numero");
var total = numb1/2;

if(numb1 & 1){
    alert(`${numb1} É um número impar`);
} else {
    alert(`${numb1} É um número par`);
}

/*10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */

var numb1 = prompt("Digite um numero");
var total = numb1/2;

if(numb1 & 1){
    alert(`${numb1} É um número impar`);
} else {
    alert(`${numb1} É um número par`);
}