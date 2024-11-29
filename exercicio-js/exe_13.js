// Função para calcular a idade em anos, meses e dias
function calcularIdade(anoNascimento) {
    const anoAtual = 2024; // Defina o ano atual aqui
    const mesesPorAno = 12;
    const diasPorMes = 30;

    // Calcula a idade em anos
    const idadeAnos = anoAtual - anoNascimento;

    // Calcula a idade total em meses e dias
    const idadeMeses = idadeAnos * mesesPorAno;
    const idadeDias = idadeAnos * 365; // Total de dias considerando 365 dias por ano

    return {
        anos: idadeAnos,
        meses: idadeMeses,
        dias: idadeDias
    };
}

// Exemplo de uso da função
const anoNascimento = 2007; // Defina o ano de nascimento aqui

const idade = calcularIdade(anoNascimento);
console.log(`Você viveu ${idade.anos} anos, ${idade.meses} meses e ${idade.dias} dias.`);