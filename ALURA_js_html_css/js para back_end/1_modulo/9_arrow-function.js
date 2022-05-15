const apresentarArrow = nome => `meu nome é ${nome}`

const soma = (num1, num2) => num1 + num2

// com mais de uma linha;

const somaNumeroPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2
    }
}