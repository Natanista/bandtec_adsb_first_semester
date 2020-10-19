function analisar() {
  let saldoConta = Number(saldo.value) - Number(debito.value);
  result.innerHTML = `O saldo atual da conta corrente é R$${saldoConta}`;

  saldoConta < 0
    ? (result.style = "font-weight: bold;color:red;")
    : (result.style = "color:blue; font-style: italic;");
}
