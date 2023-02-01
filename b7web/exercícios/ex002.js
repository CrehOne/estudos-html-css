function calcularImovel(x, y) {
    if (y == 1) {
        return x * (3000 * 1)
    } else if (y == 2) {
        return x * (3000 * 1.2)
    } else {
        return x * (3000 * 1.5)
    }
}

let metragem = 123
let quartos =  3
let preco = calcularImovel(metragem, quartos)
console.log(`A casa custa R$ ${preco}`)