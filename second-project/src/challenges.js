// Desafio 1
const a = 23
const b = 20

console.log( a > b && b < a);

// Desafio 2

let pv = 10;
let sv = 13; 
let tv = 7;

let p = (pv + sv + tv)/2;

let area = Math.sqrt(p * ((p - pv) * (p - sv) * (p - tv)));
console.log(area);

// Desafio 3

let nome = "Hudson Moreira Oliveira";
let r = nome.split(' ');
console.log(r)

// Desafio 4

const newname = "Hudson"
let newvar = (`Olá, ${newname}`)
console.log(newvar)

// Desafio 5

// Desafio 6

// Desafio 7

// Desafio 8

const resultado = fizzBuzz (2);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'; 
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz' ;
   
    return entrada;
}

// Desafio 9

// Desafio 10