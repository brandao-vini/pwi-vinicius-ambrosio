function calculcarsomaverificacr(A, B, C) {
    const soma = A + B; // Calcula a soma de A e B

    console.log(`A soma entre A e B é: ${soma}`); // Exibe a soma

    // Verifica se a soma é menor que C
    if (soma < C) {
        console.log('A soma é menor que C');
    } else {
        console.log('A soma não é menor que C');
    }
}

// Definindo os valores de A, B e C
const A = 12; // Exemplo: 10
const B = 5;  // Exemplo: 5
const C = 20; // Exemplo: 20

// Chama a função com os valores definidos
calculcarsomaverificacr(A, B, C);