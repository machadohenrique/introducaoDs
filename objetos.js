/*
Objetos podem ser criados usando
literal de objetos ou palavra-
chave new Object()

*/

//literal de objetos

const pessoa = {
    nome: "Maria",
    idade: 30,
    saudacoes: function(){
        return `Olá, meu nome ${this.nome} e tenho ${this.idade} anos`
    }
}
console.log(pessoa.saudacoes())

//palavra-chave new Object()

