function calcularReajuste(valor) {
    const reajuste = valor * 0.05; // Calcula o reajuste de 5%
    const valorComReajuste = valor + reajuste; // Calcula o valor com reajuste

    // Exibe os valores formatados com duas casas decimais
    console.log(`O valor original era R$ ${valor.toFixed(2)}`);
    console.log(`O valor com reajuste de 5% é: R$ ${valorComReajuste.toFixed(2)}`);
}

// Definindo um valor para cálculo
const valor = 80; // Exemplo: R$ 100,00

// Chama a função com o valor definido
calcularReajuste(valor);