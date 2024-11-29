// Função para calcular o salário líquido de um professor
function calcularSalarioLiquido(valorHoraAula, numeroAulas, percentualINSS) {
    // Cálculo do salário bruto
    const salarioBruto = valorHoraAula * numeroAulas;

    // Cálculo do desconto do INSS
    const descontoINSS = (percentualINSS / 100) * salarioBruto;

    // Cálculo do salário líquido
    const salarioLiquido = salarioBruto - descontoINSS;

    return salarioLiquido;
}

// Exemplo de uso da função
const valorHoraAula = 76; // Valor da hora aula em reais
const numeroAulas = 30;    // Número de aulas lecionadas no mês
const percentualINSS = 20; // Percentual de desconto do INSS

const salarioLiquidoFinal = calcularSalarioLiquido(valorHoraAula, numeroAulas, percentualINSS);
console.log(`Salário líquido final: R$ ${salarioLiquidoFinal.toFixed(2)}`);