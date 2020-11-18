function acompanhar() {
    let valorDigitado = Number(document.getElementById("valor").value);
  res.innerHTML = "";

  for (let c = 1; c <= qtde.value; c++) {
    let novoValor = valorDigitado * c;
    res.innerHTML += `<br>${c}º Mês: R$${novoValor}`;
  }
}
