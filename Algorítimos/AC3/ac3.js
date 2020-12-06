//zerando os inputs ao atualizar a pagina
nome.value = "";
multiMercado.value = "";
rendaFixa.value = "";
poupanca.value = "";

let nomes = [];
let depositosRendaFixa = [];
let depositosPoupanca = [];
let depositosMultiMercado = [];
let Rendimentos = [];

function guardar() {
  let nomeCliente = nome.value;
  let depositadoMultiMercado = multiMercado.value;
  let depositadoRendaFixa = rendaFixa.value;
  let depositadoPoupanca = poupanca.value;

  if (
    depositadoMultiMercado > 0 &&
    depositadoPoupanca > 0 &&
    depositadoRendaFixa > 0 &&
    nomeCliente.length > 0
  ) {
    nomes.push(nomeCliente);
    depositosMultiMercado.push(Number(depositadoMultiMercado));
    depositosRendaFixa.push(Number(depositadoRendaFixa));
    depositosPoupanca.push(Number(depositadoPoupanca));

    //zerando os inputs caso os dados sejam validos
    nome.value = "";
    multiMercado.value = "";
    rendaFixa.value = "";
    poupanca.value = "";
  } else {
    if (nomeCliente.length <= 0) {
      alert("O nome do cliente deve ser preenchido");
    }
    if (depositadoMultiMercado <= 0) {
      alert("O valor de deposito em Multi Mercado deve ser maior que 0!");
    }
    if (depositadoRendaFixa <= 0) {
      alert("O valor de deposito em Renda Fixa deve ser maior que 0!");
    }
    if (depositadoPoupanca <= 0) {
      alert("O valor de deposito na Poupança deve ser maior que 0!");
    }
  }
}

let listados = 0;
let totalPoupanca = 0;
let totalRendaFixa = 0;
let totalMultiMercado = 0;

function analisar() {
  let qtdeClientes = 0;
  let percentualTodos = 0;

  div_mens.innerHTML = "";

  for (let i = 0; i < nomes.length; i++) {
    totalPoupanca += Number(depositosPoupanca[i]);
    totalRendaFixa += Number(depositosRendaFixa[i]);
    totalMultiMercado += Number(depositosMultiMercado[i]);

    let valorRendimento =
      Number(depositosPoupanca[i]) * 0.05 +
      Number(depositosPoupanca[i]) * 0.07 +
      Number(depositosMultiMercado[i]) * 0.09;

    let totalDepositado =
      Number(depositosMultiMercado[i]) +
      Number(depositosPoupanca[i]) +
      Number(depositosRendaFixa[i]);

    let percentualRendimento =
      (Number(valorRendimento) / Number(totalDepositado)) * 100;

    Rendimentos.push(Number(percentualRendimento));

    percentualTodos += Number(percentualRendimento);

    let sourceIMG = "";
    let valorDePoupanca = Number(depositosPoupanca[i]);
    let valorDeMultiMercado = Number(depositosMultiMercado[i]);
    let valorDeRendaFixa = Number(depositosRendaFixa[i]);

    if (
      valorDePoupanca > valorDeMultiMercado &&
      valorDePoupanca > valorDeRendaFixa
    ) {
      sourceIMG = `img/poupanca.jpg`;
    } else if (
      valorDeMultiMercado > valorDeRendaFixa &&
      valorDeMultiMercado > valorDePoupanca
    ) {
      sourceIMG = `img/multimercado.jpg`;
    } else if (
      valorDeRendaFixa > valorDePoupanca &&
      valorDeRendaFixa > valorDeMultiMercado
    ) {
      sourceIMG = `img/renda_fixa.jpg`;
    } else if (
      valorDePoupanca == valorDeMultiMercado &&
      valorDeRendaFixa == valorDeMultiMercado
    ) {
      sourceIMG = `img/poupanca.jpg`;
    } else if (
      valorDeRendaFixa == valorDePoupanca &&
      valorDeRendaFixa > valorDeMultiMercado
    ) {
      sourceIMG = `img/poupanca.jpg`;
    } else if (
      valorDeMultiMercado == valorDeRendaFixa &&
      valorDeMultiMercado > valorDePoupanca
    ) {
      sourceIMG = `img/renda_fixa.jpg`;
    } else if (
      valorDePoupanca == valorDeMultiMercado &&
      valorDeMultiMercado > valorDeRendaFixa
    ) {
      sourceIMG = `img/poupanca.jpg`;
    } else if (
      valorDeRendaFixa == valorDePoupanca &&
      valorDePoupanca < valorDeMultiMercado
    ) {
      sourceIMG = `img/multimercado.jpg`;
    } else {
      sourceIMG = `img/poupanca.jpg`;
    }

    div_mens.innerHTML += `<br>O cliente ${
      nomes[i]
    } com Investimento total de R$${totalDepositado} obteve o Rendimento de R$${valorRendimento.toFixed(
      2
    )} com percentual de ${percentualRendimento.toFixed(
      2
    )}%<br><img src="${sourceIMG}">`;

    qtdeClientes++;
  }

  let media = Number(percentualTodos.toFixed(2)) / Number(qtdeClientes);

  for (let i = 0; i <= nomes.length; i++) {
    if (Number(Rendimentos[i]) >= media) {
      listados++;
    }
  }

  div_mens.innerHTML += `<br><br> RENDIMENTO MÉDIO DA CARTEIRA: ${media.toFixed(
    2
  )}%<br>TOTAL DE CLIENTES CADASTRADOS: ${qtdeClientes}<br>TOTAL DE CLIENTES LISTADOS:${listados}<br>TOTAL GERAL POUPANÇA =  R$${totalPoupanca}<br>TOTAL GERAL RENDA FIXA = R$${totalRendaFixa}<br>TOTAL GERAL MULTI MERCADO = R$${totalMultiMercado}`;

  totalDepositado = 0;
  totalMultiMercado = 0;
  totalRendaFixa = 0;
  totalPoupanca = 0;
  listados = 0;
  valorRendimento = 0;
  percentualRendimento = 0;
  percentualTodos = 0;
}
