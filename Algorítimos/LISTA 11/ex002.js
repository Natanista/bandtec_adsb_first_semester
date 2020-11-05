function analisar(){
    let alturaAtleta = document.getElementById("altura").value;

    if(alturaAtleta < 160){
        res.innerHTML = `Pode tentar ser piloto(a) de corrida`;
        res.innerHTML += `<br>Pode tentar ser velejador(a)`;
    }else if(alturaAtleta > 160 && alturaAtleta <= 185){
        res.innerHTML = `Pode tentar ser jogador de futebol ou handebol`;
    }else{
        res.innerHTML = `Pode tentar ser jogador de voleibol`;
        res.innerHTML += `<br>Pode tentar ser jogador de basquete`;
    }
}