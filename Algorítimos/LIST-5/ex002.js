function analisar() {
    let novoSaldo = Number(saldo.value) - Number(debito.value);
    if (novoSaldo < 0) {
        resultado.innerHTML = `<b style = "color:red">O novo saldo da conta é R$${novoSaldo}</b>`;
    } else if (novoSaldo >= 0) {
        resultado.innerHTML = `<i style = "color:blue">O novo saldo da conta é R$${novoSaldo}</i>`;
    } else {

    }

}