function Soma () {
    return 2 + 5;
}

console.log (Soma() );

function SomaII(n1, n2) {
    console.log(
        'O resultado da soma de', n1, '+', n2, 'é', n1+n2
    )
}

SomaII(5, 6)


function Multiplicacao(a1, a2) {
    console.log(
        'O resultado da multiplicacao de', a1, '*', a2, 'é', a1*a2
    )
}

Multiplicacao(6, 9)


function Subtracao(b1, b2) {
    console.log(
        'O resultado da Subtracao de', b1, '-', b2, 'é', b1-b2
    )
}

Subtracao(8, 10)

function Divisao(c1, c2) {
    console.log(
        'O resultado da Divisao de', c1, '/', c2, 'é', c1/c2
    )
}

Divisao(3, 2)


function Potencia(d1, d2) {
    console.log(
        'O resultado da Potencia de', d1, '^', d2, 'é', d1^d2
    )
}

Potencia(9, 10)

// Declarando funções anonimas ou arrow-function

const PotenciaII = (x, y) => {
    let result = x^y;
    return `${x} elevado a ${y} é igual a ${result}`;
}

console.log(PotenciaII(2, 3))


