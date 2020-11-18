function acompanhar() {
    //zerando os valores antigos da div
  res.innerHTML = ``;
  // definindo a const para o valor inserido
  const valorDeposito = Number(valor.value);
  //definindo a variavel para o valor inserido
  let valorDep = valorDeposito;

  //looping c
  for (c = 1; c <= qtde.value; c++) {
      //se o c for divisivel por c fazer...
    if (c % 3 == 0) {
      //variavel bonus 1% do valorDepositado
      let valorBonus = valorDep * (1 / 100);
      //soltar na div valorDep + valorBonus
      res.innerHTML += `<br>${c}º mes: R$ ${(valorDep += valorBonus)}`;
      //valorDep agora é igual ao valorDep + valor inserido de Depósito
      valorDep = valorDep + valorDeposito;
      //se não...
    } else {
      
      valorDep = valorDep + valorDeposito;
      res.innerHTML += `<br>${c}º mes: R$ ${valorDep}`;
    }
  }
  res.innerHTML += `<br>Total acumulado: R$ ${valorDep}`;
}
