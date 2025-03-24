/*
Funções são blocos de códigos que podem
ser reutilizados para realizar tarefas 
especificas. Elas podem receber parametros
e retornar um valor.
Funções são uma das principais ferramentas 
para organizar o código.
*/

function saudacoes(nome){
    return `Olá, ${nome}` //template srting
}
console.log(saudacoes("Maria"))

//Função anonima
const soma = function(a, b){
    return a + b
}
console.log(soma(4, 2))

//função flecha(arrow function)
const multiplicar = (a, b) => a * b
console.log(multiplicar(5,6))
