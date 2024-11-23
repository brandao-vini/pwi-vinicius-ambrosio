function verificarNumero(numero) {
  // Verifica se o número é par ou ímpar
  if (numero % 2 === 0) {
      console.log("O número é PAR.");
  } else {
      console.log("O número é ÍMPAR.");
  }

  // Verifica se o número é positivo, negativo ou zero
  if (numero > 0) {
      console.log("O número é POSITIVO.");
  } else if (numero < 0) {
      console.log("O número é NEGATIVO.");
  } else {
      console.log("O número é ZERO.");
  }
}

// Definindo um número para verificação
const numero = 8; // Exemplo: 7

// Chama a função com o número definido
verificarNumero(numero);