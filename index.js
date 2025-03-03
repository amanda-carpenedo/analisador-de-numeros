
let numerosAdicionados = []  // declarada fora da funçao para ser acessível entre chamadas


function adicionar() {
    let numeros = document.getElementById('numero')
    let valorNumeros = Number(numeros.value)
    let boxNumero = document.getElementById('boxnumero')
    let boxMensagem = document.getElementById('boxmensagem')

    if (valorNumeros == 0 || valorNumeros > 100 || isNaN(valorNumeros)) {
        alert('Por favor, digite um número válido! ')
    } else {
        if (numerosAdicionados.includes(valorNumeros)) {
            alert('Este número já foi selecionado, por favor escolha outro')
        } else {
            numerosAdicionados.push(valorNumeros) //coloca o número em uma lista do array
            let item = document.createElement('option')
            item.text = `Valor ${valorNumeros} adicionado`
            boxNumero.appendChild(item)
            document.getElementById('boxparagrafo').innerHTML = '' // limpa o paragrafo de analise quando se adiciona um novo


            if (boxMensagem) { //Remove a mensagem 'digite um número'
                boxMensagem.remove()
            }
            numeros.value = '' //limpa o campo de entrada NÃO ESQUECER DO VALUE
            numeros.focus() // para deixar a barra selecionada no input
        }
    }

}


function somar(numerosAdicionados) {
    let numerosSoma = 0
    for (let i = 0; i < numerosAdicionados.length; i++) {
        numerosSoma += numerosAdicionados[i]
    }
    return numerosSoma
}


function finalizar() {
    if (numerosAdicionados.length === 0) {
        alert('Adicione valores antes de analisar!')
    } else {
        let totalSoma = somar(numerosAdicionados)
        let numerosContados = numerosAdicionados.length
        let maiorNumero = Math.max(...numerosAdicionados) // Math.max serve para retornar o maior número e o ... expande o array para argumentos individuais
        let menorNumero = Math.min(...numerosAdicionados)
        let numerosMedia = totalSoma / numerosContados

        document.getElementById('boxparagrafo').innerHTML = `Ao todo temos ${numerosContados} números cadastrados <br>A soma dos valores é ${totalSoma}<br> O maior número é ${maiorNumero}<br> O menor número é ${menorNumero}<br> A média dos valores digitados é ${numerosMedia}`

    }



}

function reiniciar() {
    let boxNumero = document.getElementById('boxnumero')
    boxNumero.innerHTML = ''

    let itemMensagem = document.createElement('option')
    itemMensagem.text = 'Digite um número'
    itemMensagem.id = 'boxmensagem'
    boxNumero.appendChild(itemMensagem)

    numerosAdicionados = []
    document.getElementById('boxparagrafo').innerHTML = ''

}



