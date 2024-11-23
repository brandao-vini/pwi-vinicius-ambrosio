function calcularAntecessorESucessor(numero) {
    const antecessor = numero - 1;
    const sucessor = numero + 1;

    console.log(`O antecessor de ${numero} é: ${antecessor}`);
    console.log(`O sucessor de ${numero} é: ${sucessor}`);
}

// Definindo um número para cálculo
const numero = 6; // Exemplo: 5

// Chama a função com o número definido
calcularAntecessorESucessor(numero);