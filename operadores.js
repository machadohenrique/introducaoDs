/**
 * OPEREADORES ARITMÉTICOS
 * REGRAS DE PRECEDENCIA
    * / % MULTIPLICAÇÃO/ DIVISÃO / MÓDULO(RESTO)    
    +  -  ADIÇÃO E SUBTRAÇÃO
    =  ATRIBUIÇÃO
*/

let expressao = 1 * 2 + 5 / 2 % 2
console.log(expressao)

/**
    OPERADORES DE COMPARAÇÃO
    >  MAIOR
    >= MAIOR IGUAL
    < MENOR
    <= MENOR IGUAL
    != DIFERENTE
    == IGUAL
    === EXTRITAMENTE IGUAL
 */

let usuario = "user@gmail.com"
let senha = "user123"

if(usuario === "user@gmail.com" && senha === "user123"){
    console.log("Login efetuado com sucesso")
}else{
    console.log("Erro ao efetuar login")
}


/* EXERCICIOS

    1) CRIE UM SCRIPT QUE PEÇA A IDADE
    DO USUARIO E INFORME SE ELE ESTÁ
    APTO A DIRIGIR.

    2)ESCREVA UM PROGRAMA QUE RECEBA 
    DOIS NUMEROS E EXIBA QUAL DELES É
    MAIOR.

    3)ESCREVA UM PROGRAMA QUE RECEBA NOTA
    ENTRE 0 E 100 E INFORME A CLASSIFICAÇÃO:
        NOTA >= 90: "A"
        NOTA >= 80: "B"
        NOTA >= 70: "C"
        NOTA >= 60: "D"
        NOTA < 60: "F"

    4) ESCREVA UM PROGRAMA QUE RECEBA TRES LADOS
    DE UM TRIÂNGULO E DETERMINE SE ELES FORMAM UM
    TRIÂNGULO VÁLIDO. PARA SER VÁLIDO, A SOMA DE DOIS
    LADOS DEVE SER SEMPRE MAIOR QUE O TERCEIRO LADO.

*/

