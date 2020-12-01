let raAlunos = [];
let campoDigitavel = document.getElementById("campo").value;
let notaAlunos = [];
function guardar() {
  if (nota.value < 0 || nota.value > 10 || nota.value == ``) {
    alert("Por favor, digite notas entre 1 e 10!");
    nota.value = ``;
  } else if (ra.value == `` || ra.value < 0) {
    alert(`Digite um valor de RA válido`);
  } else {
    raAlunos.push(Number(ra.value));
    notaAlunos.push(Number(nota.value));
  }
  nota.value = ``;
  ra.value = ``;
}

function ver() {
  if (campo.value == `I` || campo.value == `P`) {
    alert(`Pode prosseguir`);
  } else if (campo.value == "p" || campo.value == "i") {
    alert(`Digite apenas valores maiusculos`);
  } else {
    alert(`Valor inválido, entre com P ou I`);
  }
}

function analisar() {
  //1
  let soma2 = 0;
  let soma = 0;
  let qtdeAcima = 0;
  let contadorAlunos = 0;
  if (campo.value == "P") {
    //2
    for (let i = 0; i < notaAlunos.length; i++) {
      //3
      //par

      if (raAlunos[i] % 2 == 0) {
        //4
        soma += Number(notaAlunos[i]);
        contadorAlunos++;
        let media = (soma / contadorAlunos).toFixed;

        if (notaAlunos[i] >= media) {
          qtdeAcima++;
          div_mens.innerHTML += `<br>Aluno com RA = ${raAlunos[i]} e nota = ${notaAlunos[i]} foi selecionado pois a média é de ${media}`;
        } else {
          continue;
        }
        div_mens.innerHTML += `<br>Quantidade de notas acima da média: ${qtdeAcima}<br>Nova média: ${novaMedia}`;
      } // 4

      //impar
      else {
        //5
        soma += Number(notaAlunos[i]);
        contadorAlunos++;
        let media = (soma / contadorAlunos).toFixed;

        if (notaAlunos[i] >= media) {
          qtdeAcima++;
          div_mens.innerHTML += `<br>Aluno com RA = ${raAlunos[i]} e nota = ${notaAlunos[i]} foi selecionado pois a média é de ${media}`;
        } else {
          continue;
        }
        div_mens.innerHTML += `<br>Quantidade de notas acima da média: ${qtdeAcima}<br>Nova média: ${novaMedia}`;
      } //5
    } //3
  } //2
  campo.value = ``;
} //1
