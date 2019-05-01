function moverCanos(elem, inicio, fim, passo) {
    const novoInicio = inicio - passo
    if(novoInicio >= fim) {
        elem.style.left = novoInicio + 'px'
        setTimeout(() => moverCanos(elem, novoInicio, fim, passo), 7)
    }
}

elementosCano = document.querySelectorAll('[cano]')
elementosCanoArray = Array.from(elementosCano)

elementosCanoArray.forEach(e => {
    posFim = - (innerWidth * (elementosCanoArray.length)/2)
    moverCanos(e, 900, posFim, 1)
})