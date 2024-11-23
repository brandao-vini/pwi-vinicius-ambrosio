// Função para calcular o IMC e determinar a condição
function calcularIMC(peso, altura) {
    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        console.log("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calcula o IMC
    let imc = peso / (altura * altura);
    
    // Determina a condição com base no IMC
    let condicao;
    if (imc < 18.5) {
        condicao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        condicao = "Peso ideal (parabéns)";
    } else if (imc >= 25 && imc < 30) {
        condicao = "Levemente acima do peso";
    } else if (imc >= 30 && imc < 35) {
        condicao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        condicao = "Obesidade grau II (severa)";
    } else {
        condicao = "Obesidade grau III (mórbida)";
    }

    // Exibe o resultado
    console.log(`Seu IMC é ${imc.toFixed(2)}. Condição: ${condicao}`);
}

// Definindo os valores de peso e altura
const peso = 80; // Exemplo: 70 kg
const altura = 1.80; // Exemplo: 1.75 m

// Chama a função com os valores definidos
calcularIMC(peso, altura);