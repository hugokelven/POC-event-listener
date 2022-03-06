//EXEMPLO 1

const botaoClickExemplo1 = document.querySelector(".botao1-ex1")

botaoClickExemplo1.addEventListener('click', exibirEventoClickNaTela)

function exibirEventoClickNaTela() {
    const tela = document.querySelector("aside")

    tela.innerHTML += "O botão foi clicado <br>"
}

const botaoMouseOverExemplo1 = document.querySelector(".botao2-ex1")

botaoMouseOverExemplo1.addEventListener('mouseover', exibirEventoMouseOverNaTela)

function exibirEventoMouseOverNaTela() {
    const tela = document.querySelector("aside")

    tela.innerHTML += "cursor sobre o botão <br>"
}

const botaoMouseOutExemplo1 = document.querySelector(".botao3-ex1")

botaoMouseOutExemplo1.addEventListener('mouseout', exibirEventoMouseOutNaTela)

function exibirEventoMouseOutNaTela() {
    const tela = document.querySelector("aside")

    tela.innerHTML += "cursor saiu do botão <br>"
}

//EXEMPLO 2

const botaoExemplo2 = document.querySelector(".botao-ex2")

/* botaoExemplo2.addEventListener('click', exibirEventoClickNaTela)
botaoExemplo2.addEventListener('mouseover', exibirEventoMouseOverNaTela)
botaoExemplo2.addEventListener('mouseout', exibirEventoMouseOutNaTela) */

botaoExemplo2.addEventListener('click', event => {exibirEventoNaTela(event)})
botaoExemplo2.addEventListener('mouseover', event => {exibirEventoNaTela(event)})
botaoExemplo2.addEventListener('mouseout', event => {exibirEventoNaTela(event)})

function exibirEventoNaTela(event) {
    const tela = document.querySelector("aside")
    //console.log(event)

    if (event.type === 'click') {
        tela.innerHTML += "O botão foi clicado <br>"
    } else if (event.type === 'mouseover') {
        tela.innerHTML += "cursor sobre o botão <br>"
    } else if (event.type === 'mouseout') {
        tela.innerHTML += "cursor saiu do botão <br>"
    } else {
        tela.innerHTML += "outro evento foi acionado <br>"
    }
}

//EXEMPLO 3a

const propagacaoEx3a = false

const maisInterno = document.querySelector(".mais-interno")
const maisExterno = document.querySelector(".mais-externo")

maisInterno.addEventListener('click', () => {
    const tela = document.querySelector("aside")
    tela.innerHTML += "elemento preto clicado <br>"
}, propagacaoEx3a)

maisExterno.addEventListener('click', () => {
    const tela = document.querySelector("aside")
    tela.innerHTML += "elemento vermelho clicado <br>"
}, propagacaoEx3a)

//EXEMPLO 3b

const propagacaoEx3b = false

const maisInterno3b = document.querySelector(".mais-interno3b")
const noMeio = document.querySelector(".no-meio")
const maisExterno3b = document.querySelector(".mais-externo3b")

maisInterno3b.addEventListener('click', (event) => {
    const tela = document.querySelector("aside")
    tela.innerHTML += "elemento preto clicado <br>"

    validarCheck(event, "preto")
}, propagacaoEx3b)

noMeio.addEventListener('click', (event) => {
    const tela = document.querySelector("aside")
    tela.innerHTML += "elemento verde clicado <br>"

    validarCheck(event, "verde")
}, propagacaoEx3b)

maisExterno3b.addEventListener('click', (event) => {
    const tela = document.querySelector("aside")
    tela.innerHTML += "elemento vermelho clicado <br>"

    validarCheck(event, "vermelho")
}, propagacaoEx3b)

function validarCheck(event, cor) {
    if (document.getElementById(cor).checked) {
        event.stopPropagation();
    } else { }
}


// UTILITÁRIOS

let exemploAtual = "exemplo1"

function habilitarEx1(botao) {
    document.querySelector(".selecionado").classList.remove("selecionado")

    let exemplo = document.querySelector(`.${exemploAtual}`)
    exemplo.classList.add("escondido")

    exemploAtual = "exemplo1"

    exemplo = document.querySelector(`.${exemploAtual}`)
    exemplo.classList.remove("escondido")

    botao.classList.add("selecionado")
}

function habilitarEx2(botao) {
    document.querySelector(".selecionado").classList.remove("selecionado")

    let exemplo = document.querySelector(`.${exemploAtual}`)
    exemplo.classList.add("escondido")

    exemploAtual = "exemplo2"

    exemplo = document.querySelector(`.${exemploAtual}`)
    exemplo.classList.remove("escondido")

    botao.classList.add("selecionado")
}

function habilitarEx3a(botao) {
    document.querySelector(".selecionado").classList.remove("selecionado")

    let exemplo = document.querySelector(`.${exemploAtual}`)
    exemplo.classList.add("escondido")

    exemploAtual = "exemplo3a"

    exemplo = document.querySelector(`.${exemploAtual}`)
    exemplo.classList.remove("escondido")

    botao.classList.add("selecionado")
}

function habilitarEx3b(botao) {
    document.querySelector(".selecionado").classList.remove("selecionado")

    let exemplo = document.querySelector(`.${exemploAtual}`)
    exemplo.classList.add("escondido")

    exemploAtual = "exemplo3b"

    exemplo = document.querySelector(`.${exemploAtual}`)
    exemplo.classList.remove("escondido")

    botao.classList.add("selecionado")
}

const botaoClear = document.querySelector(".clear")

botaoClear.addEventListener('click', limparTela)

function limparTela() {
    const tela = document.querySelector("aside")

    tela.innerHTML = ""
}