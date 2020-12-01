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
  campo.value = ``;
  div_mens.innerHTML = ``;
  //1
  let alunoAcima = 0;
  let soma = 0;
  let somaNova = 0;
  let qtdeAlunos = 0;
  let consulta = campo.value;

  if(consulta == "P"){

    for(let i = 0; i < raAlunos.length; i++){

      if(raAluno[i] % 2 == 0){

        soma += Number(notaAlunos[i]);
        qtdeAlunos++;
        
      }

    }
    let media = Number(soma) / Number(qtdeAlunos);
    for(let i = 0; i < raAlunos.length; i++){
      if(notaAlunos[i] >= media){
        div_mens.innerHTML += `<br>Aluno com RA: ${raAlunos[i]} e nota ${notaAlunos[i]} foi selecionado pois a média é de ${media}`;
        alunoAcima++;
        somaNova += Number(notaAlunos[i]);
      }
    }
  }
  else{// caso "I"

  for(let i = 0; i < raAlunos.length; i++){
    if(raAlunos[i] % 2 != 0){
      soma += notaAlunos[i];
      qtdeAlunos++;
    }
  }
  let media = Number(soma) / Number(qtdeAlunos);
    for(let i = 0; i < raAlunos.length; i++){
      if(notaAlunos[i] >= media){
        div_mens.innerHTML += `<br>Aluno com RA: ${raAlunos[i]} e nota ${notaAlunos[i]} foi selecionado pois a média é de ${media}`;
        alunoAcima++;
        somaNova += Number(notaAlunos[i]);
      }
    }
   
  } 
  let novaMedia = Number(somaNova) / Number(alunoAcima);
   
  div_mens.innerHTML += `<br>Alunos acima da média : ${alunoAcima}<br>Nova média: ${novaMedia.toFixed(2)}`;

  
} //1
