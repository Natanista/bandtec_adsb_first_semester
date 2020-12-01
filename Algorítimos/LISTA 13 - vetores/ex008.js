// conjunto para guardar os valores e os dias
let dia = ['1'];
let valores = ['1'];


function guardar() {
  if (dias.value < 1 || dias.value > 30 || valor.value <= 0) {
    alert(`Digite apenas valores válidos`);
  } else {
    dia.push(`${dias.value}`);
    valores.push(`${valor.value}`);
  }
  dias.value = ``;
  valor.value = ``;
}

function rever() {
  div_mens.innerHTML = ``;
  let soma = 0;
  let contador = 0;
  let diaInicio= diaAnalise1.value;
  let diaFinal = diaAnalise2.value;

  for (let i = 1; i <= valores.length - 1; i++) {


    if(i >= diaInicio && i <= diaFinal){
      div_mens.innerHTML += `<br>sequencia de digitação: ${i}º, dia ${dia[i]}, valor depositado R$${valores[i]}`;
      soma += Number(valores[i]);
      contador++;
    }


  }


  let media = Number(soma) / Number(contador);
  div_mens.innerHTML += `<br>Dias selecionados: ${contador}, valor total de depósitos: ${soma}, media do valor dos depósitos ${media}`;
  diaAnalise1.value = ``;
  diaAnalise2.value = ``;
}
