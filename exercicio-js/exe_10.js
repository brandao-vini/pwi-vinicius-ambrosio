// Função para calcular o valor final do produto com base na forma de pagamento
function calcularValorFinal(precoProduto, codigoPagamento) {
    let valorFinal;

    switch (codigoPagamento) {
        case 1: // À Vista em Dinheiro ou Pix
            valorFinal = precoProduto * 0.85; // 15% de desconto
            break;
        case 2: // À Vista no cartão de crédito
            valorFinal = precoProduto * 0.90; // 10% de desconto
            break;
        case 3: // Parcelado no cartão em duas vezes
            valorFinal = precoProduto; // Preço normal
            break;
        case 4: // Parcelado no cartão em três vezes ou mais
            valorFinal = precoProduto * 1.10; // Preço normal + 10% de juros
            break;
        default:
            console.log("Código de pagamento inválido.");
            return null; // Retorna null para código inválido
    }

    return valorFinal;
}

// Exemplo de uso da função
const precoProduto = 160; // Defina o preço do produto aqui
const codigoPagamento = 2; // Defina o código da forma de pagamento aqui

const valorFinal = calcularValorFinal(precoProduto, codigoPagamento);

if (valorFinal !== null) {
    console.log(`O valor final a ser pago é: R$ ${valorFinal.toFixed(2)}`);
}