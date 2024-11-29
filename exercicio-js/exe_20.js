// Função para calcular o quociente e o resto da divisão inteira
function calcularDivisaoInteira(a, b) {
    if (b === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
        return;
    }

    const quociente = Math.floor(a / b); // Quociente da divisão
    const resto = a % b; // Resto da divisão

    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
    console.log(`Quociente da divisão inteira: ${quociente}`);
    console.log(`Resto da divisão: ${resto}`);
}

// Exemplo de uso da função
const valorA = 20; // Defina o valor inteiro A aqui
const valorB = 35;  // Defina o valor inteiro B aqui

calcularDivisaoInteira(valorA, valorB);