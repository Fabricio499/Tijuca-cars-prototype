//calcula a idade do usuaria para saber se ele possui mais de 20 anos.
var calculaIdade = function(dataAtual,dataNascimento) {
    //o mes de janeiro é = 0
    //analisa os anos
    var anos = dataAtual.getFullYear() - dataNascimento.getFullYear();

    //analisa os meses
    if (dataAtual.getMonth() != dataNascimento.getMonth()) {
        if (dataAtual.getMonth() < dataNascimento.getMonth()) {
            anos--
        }
    } else {
        //analise do dia
        if (dataAtual.getDate() < dataNascimento.getDate()) {
            anos--
        }
    }

    return anos ;
}

module.exports = calculaIdade;