// Função para verificar se dois valores booleanos são verdadeiros ou falsos
function verificarValoresBooleanos(valor1, valor2) {
    // Converte as entradas para booleanos
    let bool1 = (valor1 === true);
    let bool2 = (valor2 === true);

    // Verifica se ambos são verdadeiros ou falsos
    if (bool1 && bool2) {
        console.log("Ambos os valores são VERDADEIROS.");
    } else if (!bool1 && !bool2) {
        console.log("Ambos os valores são FALSOS.");
    } else {
        console.log("Os valores são diferentes: um é VERDADEIRO e o outro é FALSO.");
    }
}

// Definindo os valores booleanos para verificação
const valor1 = true;  // Exemplo: true
const valor2 = false; // Exemplo: false

// Chama a função com os valores definidos
verificarValoresBooleanos(valor1, valor2);