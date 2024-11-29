// Função para trocar os valores de A e B
function trocarValores(a, b) {
    console.log(`Antes da troca: A = ${a}, B = ${b}`);
    
    // Troca os valores
    let temp = a; // Armazena o valor de A em uma variável temporária
    a = b;       // A recebe o valor de B
    b = temp;    // B recebe o valor armazenado em temp (valor original de A)

    console.log(`Depois da troca: A = ${a}, B = ${b}`);
}

// Exemplo de uso da função
let valorA = 6; // Defina o valor de A aqui
let valorB = 20; // Defina o valor de B aqui

trocarValores(valorA, valorB);