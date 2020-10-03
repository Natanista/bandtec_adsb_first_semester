function comprar() {
    let porTres = Number(chocolates.value) * 3;
    let porDois = Number(chocolates.value) * 2.5;
                if(chocolates.value > 12) {
        resultado.innerHTML = `O valor da sua compra foi de R$${porDois}`
    } else {
        resultado.innerHTML = `O valor da sua compra foi de  R$${porTres}`;
    }
}