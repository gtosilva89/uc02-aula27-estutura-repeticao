// while
// do/while
// for

// Criar uma lista com 5 nomes usando while
let numeroDeVezes = 0;

while (numeroDeVezes < 7) {
    console.log("Passou aqui!")
    numeroDeVezes = numeroDeVezes + 1
}

// lista, array ou vetor

let lista = ['banana', 'maçã', 'kiwi', 'morango', 'laranja', 'pera']

// matriz
// let listaDeListas = [
//     ['banana', 'maçã', 'kiwi', 'morango', 'laranja']
//     ['banana', 'maçã', 'kiwi', 'morango', 'laranja']
//     ['banana', 'maçã', 'kiwi', 'morango', 'laranja']
// ]

// Cria uma variavel de contador
let posicao = 0

// Cria uma lista não ordenada
const listaEmTela = document.createElement("ol")

while (posicao < lista.length) {
    console.log(lista[posicao])
    const itemLista = document.createElement("li")
    itemLista.textContent = lista[posicao]
    listaEmTela.appendChild(itemLista)
    posicao = posicao + 1
}

document.body.appendChild(listaEmTela)

posicao = 0
const listaEmTelaDoWhile = document.createElement("li")

do {
    console.log(lista[posicao])
    const itemLista = document.createElement("li")
    itemLista.textContent = lista[posicao]
    listaEmTelaDoWhile.appendChild(itemLista)
    posicao = posicao + 1
} while (posicao < lista.length)

document.body.appendChild(listaEmTela)