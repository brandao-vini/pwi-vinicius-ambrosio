// Função para imprimir a tabuada de 1 até 10
function imprimirTabuada() {
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabuada do ${i}:`);
        for (let j = 1; j <= 10; j++) {
            const resultado = i * j;
            console.log(`${i} x ${j} = ${resultado}`);
        }
        console.log(''); // Linha em branco para separar as tabuadas
    }
}

// Chama a função para imprimir a tabuada
imprimirTabuada();