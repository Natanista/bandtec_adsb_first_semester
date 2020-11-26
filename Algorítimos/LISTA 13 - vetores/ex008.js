// conjunto para guardar os valores e os dias
let carteira = [];
let valores = [];

//contador de dias para resposta final
let contador = 0;

// função para guardar os valores em "carteira"
function guardar() {
  //verificação de dia válido 1-31
  if (dia.value < 1 || dia.value > 30 || valor < 0) {
    alert(`Digite apenas valores válidos`);
  } else {
    //inserindo os valores nos respectivos vetores
    carteira.push(`${dia.value}º - ${valor.value}`);

   
}
  }
  //zerando os inputs
  dia.value = ``;
  valor.value = ``;
     

//funcao para rever os depositos
function rever() {
  //looping para decorrer sobre os valores do vetor "carteira"
  for (let i = 0; i <= carteira.length; i++) {
    //verificando se a primeira "letra" do valor referido 'i' do array é igual aos valores solicitados
    if (carteira[i].split("", 1) == dia.value) {
      //verdade - mostra o item
      div_mens.innerHTML += `<br>${carteira[i]}`;
    } else {
      //continua o laço
      continue;
    }
  }
  // zerando os inputs de "rever"
  diaAnalise1.value = ``;
  diaAnalise2.value = ``;
}
