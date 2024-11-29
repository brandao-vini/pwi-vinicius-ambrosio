// Função para calcular em quantos anos Francisco será maior que Sara
function calcularAnosParaSerMaior(franciscoAltura, franciscoCrescimento, saraAltura, saraCrescimento) {
    let anos = 3;

    // Enquanto Francisco não for maior que Sara
    while (franciscoAltura <= saraAltura) {
        // Aumenta as alturas de acordo com o crescimento anual
        franciscoAltura += franciscoCrescimento;
        saraAltura += saraCrescimento;
        anos++; // Incrementa o contador de anos
    }

    return anos;
}

// Exemplo de uso da função
const alturaFrancisco = 1.50; // Altura inicial de Francisco em metros
const crescimentoFrancisco = 0.02; // Crescimento anual de Francisco em metros (2 cm)
const alturaSara = 1.10; // Altura inicial de Sara em metros
const crescimentoSara = 0.03; // Crescimento anual de Sara em metros (3 cm)

const anosNecessarios = calcularAnosParaSerMaior(alturaFrancisco, crescimentoFrancisco, alturaSara, crescimentoSara);
console.log(`Francisco será maior que Sara em ${anosNecessarios} anos.`);