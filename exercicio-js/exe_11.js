// Função para verificar se a pessoa é maior ou menor de idade
function verificarIdade(nome, idade) {
    let statusIdade;

    if (idade >= 18) {
        statusIdade = 'maior de idade';
    } else {
        statusIdade = 'menor de idade';
    }

    return `${nome} é ${statusIdade}.`;
}

// Exemplo de uso da função
const nomePessoa = "Sobral"; // Defina o nome da pessoa aqui
const idadePessoa = 17; // Defina a idade da pessoa aqui

const resultado = verificarIdade(nomePessoa, idadePessoa);
console.log(resultado);