//Ao atualizar a pagina os campos vão esvaziar
campoSenha.value = "";
loja.value = "";
conta.value = "";
digito.value = "";
//variaveis iniciando em 0
let digitoValor = 0;
let senha = 0;
let tentativas = 0;

//Inicio do validador
function conferir() {
  //parâmetros para o dígito
  if (conta.value % loja.value < 3) {
    digitoValor = 1;
    senha = "recife";
  } else if (conta.value % loja.value >= 3 && conta.value % loja.value <= 6) {
    digitoValor = 2;
    senha = "manaus";
  } else {
    digitoValor = 3;
    senha = "fortaleza";
  }

  //Validador de Loja, Conta e Digito
  if (
    loja.value >= 1 &&
    loja.value <= 10 &&
    conta.value > 0 &&
    digito.value == digitoValor
  ) {
    tela_inicial.style = "display:none";
    ola.style = "display:block";
  } else if (
    loja.value < 1 &&
    loja.value > 10 &&
    conta.value > 0 &&
    digito.value == digitoValor
  ) {
    alert("Loja Inválida");
  } else if (
    loja.value >= 1 &&
    loja.value <= 10 &&
    conta.value > 0 &&
    digito !== digitoValor
  ) {
    alert("DIgito Inváldo");
  } else if (
    loja.value < 1 &&
    loja.value > 10 &&
    conta.value <= 0 &&
    digito.value == digitoValor
  ) {
    alert("Loja Inválida");
    alert("Conta Inválida");
  } else if (
    loja.value >= 1 &&
    loja.value <= 10 &&
    conta.value <= 0 &&
    digito.value !== digitoValor
  ) {
    alert("Conta Inválida");
    alert("Digito Inválido");
  } else if (
    loja.value < 1 &&
    loja.value > 10 &&
    conta.value > 0 &&
    digito.value !== digitoValor
  ) {
    alert("Loja Inválida");
    alert("Digito Inválido");
  } else if (
    loja.value >= 1 &&
    loja.value <= 10 &&
    conta.value <= 0 &&
    digito.value == digitoValor
  ) {
    alert("Conta Inválida");
  } else {
    alert("Loja Inválida");
    alert("Digito Inválido");
    alert("Conta Inválida");
  }
}
//Fim do Validador

//Botão limpar senha
function limparSenha() {
  campoSenha.value = "";
}
//Botão validador de senha
function entrar() {
  if (campoSenha.value == senha) {
    combo.style = "display: block";
    ola.style = "display:none";
  } else {
    senhaInvalida.innerHTML += "<br>Senha Inválida";
  }
  //contador de tentativas
  if (tentativas > 2) {
    alert(
      "Você excedeu o número de tentativas, sua conta está bloqueada, PROCURE O SUPORTE"
    );
    ola.style = "display:none";
    combo.style = "display:none";
    tela_inicial.style = "display:block";
    tentativas = 0;
    senhaInvalida.innerHTML = "";
    campoSenha.value = "";
    loja.value = "";
    conta.value = "";
    digito.value = "";
  } else {
    tentativas++;
  }
}
//revela o input de qtdCadeiras e a imagem das cadeiras
function mostrar() {
  imagem.style = "display:block; width: 150px;";
  material.style = "display:block;";

  if (cadeira.value == "Cadeira de Praia") {
    imagem.src = "img/praia.jpg";
    qtd.style = "display:none";
    materialCadeira.value = "material";
  } else if (cadeira.value == "Cadeira de Jardim") {
    imagem.src = "img/jardim.jpg";
    qtd.style = "display:none";
    materialCadeira.value = "material";
  } else {
    imagem.src = "";
    qtd.style = "display:none";
    material.style = "display:none";
  }
}
//revela o input para quantidade de cadeiras
function mostrar2() {
  if (materialCadeira.value == "Alumínio") {
    qtd.style = "display:block";
    qtdCadeiras.value = 0;
    orcamento.innerHTML = "";
    aVista.innerHTML = "";
  } else if (materialCadeira.value == "Plástico") {
    qtd.style = "display:block";
    qtdCadeiras.value = 0;
    orcamento.innerHTML = "";
    aVista.innerHTML = "";
  } else if (materialCadeira.value == "Ferro") {
    qtd.style = "display:block";
    qtdCadeiras.value = 0;
    orcamento.innerHTML = "";
    aVista.innerHTML = "";
  } else {
    qtd.style = "display:none";
  }
}
//Calcula o preço de acordo com a qtd de cadeiras
function calcular() {
  let preco = 0;
  let precoTotal = qtdCadeiras * preco;

  //Definindo o preço de cada tipo de cadeira
  if (
    cadeira.value == "Cadeira de Praia" &&
    materialCadeira.value == "Alumínio"
  ) {
    preco = 75;
  } else if (
    cadeira.value == "Cadeira de Praia" &&
    materialCadeira.value == "Plástico"
  ) {
    preco = 50;
  } else if (
    cadeira.value == "Cadeira de Jardim" &&
    materialCadeira.value == "Ferro"
  ) {
    preco = 55;
  } else if (
    cadeira.value == "Cadeira de Jardim" &&
    materialCadeira.value == "Alumínio"
  ) {
    preco = 70;
  } else if (
    cadeira.value == "Cadeira de Jardim" &&
    materialCadeira.value == "Plástico"
  ) {
    preco = 35;
  } else if (
    cadeira.value == "Cadeira de Praia" &&
    materialCadeira.value == "Ferro"
  ) {
    preco = 80;
  } else {
    preco = 0;
  }
  //Desconto de 3% caso a qtd seja maior que 50
  if (qtdCadeiras > 50) {
    precoTotal = precoTotal - (3 / 100) * precoTotal;
  } else {
    precoTotal = qtdCadeiras.value * preco;
  }

  //define que qtdCadeiras não pode ser 0
  if (qtdCadeiras.value <= 0) {
    orcamento.style = "display:none";
    aVista.style = "display:none";
    alert("Digite um valor maior que zero");
  } else {
    aVista.style = "display:block";
    orcamento.style = "display: block";
  }

  orcamento.innerHTML = `O orçamento para a compra de <b>${qtdCadeiras.value}</b> <i>${cadeira.value}</i> de <i>${materialCadeira.value}</i> é de R$<b>${precoTotal}</b>`;

  //desconto de 5% caso seja de plastico ou ferro
  let descontoPasticoOuFerro = precoTotal - (5 / 100) * precoTotal;
  //desconto de 3.5% caso seja de aluminio
  let descontoAluminio = precoTotal - (3.5 / 100) * precoTotal;
  //valor final com todos descontos
  let precoOficial = 0;
  //desconto a ser definido de acordo com o material
  let desconto = 0;

  //define o desconto e o preco oficial dependendo do material
  if (materialCadeira.value == "Plástico" || materialCadeira.value == "Ferro") {
    precoOficial = descontoPasticoOuFerro;
    desconto = 5;
  } else {
    precoOficial = descontoAluminio;
    desconto = 3.5;
  }

  aVista.innerHTML = `Para o pagamento a vista o desconto é de ${desconto}% e seu pedido ficará em R$${precoOficial} `;
}
