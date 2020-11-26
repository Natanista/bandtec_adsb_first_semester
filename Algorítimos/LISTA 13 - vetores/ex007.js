aluno.value = ``;
let nomes = [];

function cadastrar() {
  nomes.push(aluno.value);
  aluno.value = ``;
}

function rever(){
    div_mens.innerHTML = ``;
    let qtdeNomes = 0;
    let soma = 0;
    for(let i = 0; i <= nomes.length; i++){
        if(nomes[i] >= inicio.value && nomes[i] <= fim.value){
            soma += Number(nomes[i]);
            qtdeNomes++;
            div_mens.innerHTML += `<br>${nomes[i]}`;
        }else{
           continue;
        }
    }
    let media = Number(soma / qtdeNomes);
    if(qtdeNomes == 0){
        div_mens.innerHTML += `<br><br>Não foram encontrados resultados para notas entre ${inicio.value} e ${fim.value}`;
    }else{
        div_mens.innerHTML += `<br><br>Foram cadastras ${qtdeNomes} notas no intervalo entre ${inicio.value} e ${fim.value},sendo assim, a média dessas notas é de ${media.toFixed(2)}`;
    }
    inicio.value = ``;
    fim.value = ``;
}

