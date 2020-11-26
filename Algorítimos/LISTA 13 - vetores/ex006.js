aluno.value = ``;
let nomes = [];

function cadastrar() {
  nomes.push(aluno.value);
  aluno.value = ``;
}

function analisar(){
    div_mens.innerHTML = ``;
    let qtdeNomes = 0;
    let soma = 0;
    for(let i = 0; i <= nomes.length; i++){
        if(nomes[i] >= consulta.value){
            soma += Number(nomes[i]);
            qtdeNomes++;
            div_mens.innerHTML += `<br>${nomes[i]}`;
        }else{
            continue;
        }
    }
    let media = Number(soma / qtdeNomes);
    if(qtdeNomes == 0){
        div_mens.innerHTML += `<br><br>Não foram encontrados resultados para nota ${consulta.value}`;
    }else{
        div_mens.innerHTML += `<br><br>Foram cadastras ${qtdeNomes} notas maiores que ${consulta.value} e a média dessas notas é ${media.toFixed(2)}`;
    }
    consulta.value = ``;
}
