// Função para calcular a média de três notas
function calcularMedia(nota1, nota2, nota3) {
    // Calcula a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Exibe o resultado
    console.log(`A média das notas é: ${media.toFixed(2)}`);
}

// Definindo as notas do aluno
const nota1 = 6; // Exemplo: primeira nota
const nota2 = 8; // Exemplo: segunda nota
const nota3 = 5; // Exemplo: terceira nota

// Chama a função com as notas definidas
calcularMedia(nota1, nota2, nota3);