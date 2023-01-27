var branco = "preto"
var preto = "cinza"
var cinza = "branco"
var carro = "preto"
var valor = 30000
var prestacao = 750

function prestacaoDeEntrada(valor){
    const totalDeParcela = 30000 / 750

    const valorDoCarro = 30000 - valor

    return valorDoCarro / totalDeParcela
}

console.log(prestacaoDeEntrada(3000))