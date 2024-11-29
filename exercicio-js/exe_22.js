// Função para calcular a quantidade de litros de combustível gastos em uma viagem
function calcularLitrosGastos(velocidadeMedia, tempoViagem) {
    // Distância percorrida em km
    const distanciaPercorrida = velocidadeMedia * tempoViagem; // km
    const consumoPorLitro = 12; // O carro faz 12 km por litro

    // Cálculo da quantidade de litros gastos
    const litrosGastos = distanciaPercorrida / consumoPorLitro;

    return {
        distanciaPercorrida: distanciaPercorrida,
        litrosGastos: litrosGastos
    };
}

// Exemplo de uso da função
const velocidadeMedia = 90; // Velocidade média em km/h
const tempoViagem = 4;       // Tempo da viagem em horas

const resultado = calcularLitrosGastos(velocidadeMedia, tempoViagem);
console.log(`Distância percorrida: ${resultado.distanciaPercorrida} km`);
console.log(`Litros de combustível gastos: ${resultado.litrosGastos.toFixed(2)} L`);