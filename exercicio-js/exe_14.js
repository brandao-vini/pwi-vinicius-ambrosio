// Função para verificar se os lados formam um triângulo e determinar seu tipo
function verificarTriangulo(ladoA, ladoB, ladoC) {
    // Verifica se os lados formam um triângulo válido
    const ehTriangulo = ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA;

    if (!ehTriangulo) {
        console.log("Os valores fornecidos não formam um triângulo válido.");
        return;
    }

    // Determina o tipo de triângulo
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("O triângulo é equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
}

// Exemplo de uso da função
const valorLadoA = 4; // Defina o valor do lado A aqui
const valorLadoB = 4; // Defina o valor do lado B aqui
const valorLadoC = 4; // Defina o valor do lado C aqui

verificarTriangulo(valorLadoA, valorLadoB, valorLadoC);