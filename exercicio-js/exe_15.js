// Função para converter Fahrenheit para Celsius
function converterFahrenheitParaCelsius(temperaturaFahrenheit) {
    const temperaturaCelsius = (5 * (temperaturaFahrenheit - 32)) / 9;
    return temperaturaCelsius;
}

// Exemplo de uso da função
const temperaturaFahrenheit = 70; // Defina a temperatura em Fahrenheit aqui

const temperaturaCelsius = converterFahrenheitParaCelsius(temperaturaFahrenheit);
console.log(`Temperatura em Fahrenheit: ${temperaturaFahrenheit}°F`);
console.log(`Temperatura em Celsius: ${temperaturaCelsius.toFixed(2)}°C`);