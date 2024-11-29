// Função para imprimir a tabuada de um número inteiro
function imprimirTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

// Exemplo de uso da função
const valorInteiro = 24; // Defina o valor inteiro aqui
imprimirTabuada(valorInteiro);