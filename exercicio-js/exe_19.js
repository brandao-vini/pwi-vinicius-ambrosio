// Função para gerar e mostrar um valor aleatório entre 0 e 100
function mostrarValorAleatorio() {
    // Gera um número aleatório entre 0 e 100
    const valorAleatorio = Math.floor(Math.random() * 101); // Math.random() gera um número entre 0 (inclusive) e 1 (exclusive)
    
    console.log(`Valor aleatório gerado: ${valorAleatorio}`);
}

// Chama a função para mostrar o valor aleatório
mostrarValorAleatorio();