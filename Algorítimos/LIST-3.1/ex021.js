function calcular() {
    let custo = Number(saborUM.value) + Number(saborDOIS.value) + Number(saborTRES.value);
    resultado.innerHTML = `A pizza de ${sabor.value} vai custar um total de R$${custo}`;
}

function mudarIMG1() {
    if (saborUM.value == '10') {
        foto1.src = '/LIST-3.1/img/queijo.jpeg';
    } else if(saborUM.value == '5') {
        foto1.src = '/LIST-3.1/img/presunto.jpeg';
    } else if(saborUM.value == '3') {
        foto1.src = '/LIST-3.1/img/ovo.jpeg';
    } else if (saborUM.value == '7') {
        foto1.src ='/LIST-3.1/img/palmito.jpeg';
    } else if (saborUM.value == 6) {
        foto1.src = '/LIST-3.1/img/catupiry.jpeg';
    } else {
        foto1.src ='/LIST-3.1/img/frango.jpeg';
    }
}

function mudarIMG2() {
    if (saborDOIS.value == '10') {
        foto2.src = '/LIST-3.1/img/queijo.jpeg';
    } else if(saborDOIS.value == '5') {
        foto2.src = '/LIST-3.1/img/presunto.jpeg';
    } else if(saborDOIS.value == '3') {
        foto2.src = '/LIST-3.1/img/ovo.jpeg';
    } else if (saborDOIS.value == '7') {
        foto2.src ='/LIST-3.1/img/palmito.jpeg';
    } else if (saborDOIS.value == 6) {
        foto2.src = '/LIST-3.1/img/catupiry.jpeg';
    } else {
        foto2.src ='/LIST-3.1/img/frango.jpeg';
    }
}

function mudarIMG3() {
    if (saborTRES.value == '10') {
        foto3.src = '/LIST-3.1/img/queijo.jpeg';
    } else if(saborTRES.value == '5') {
        foto3.src = '/LIST-3.1/img/presunto.jpeg';
    } else if(saborTRES.value == '3') {
        foto3.src = '/LIST-3.1/img/ovo.jpeg';
    } else if (saborTRES.value == '7') {
        foto3.src ='/LIST-3.1/img/palmito.jpeg';
    } else if (saborTRES.value == 6) {
        foto3.src = '/LIST-3.1/img/catupiry.jpeg';
    } else {
        foto3.src ='/LIST-3.1/img/frango.jpeg';
    }
}