function expressar(){
    res.innerHTML = ``;
    let amada = document.getElementById("pessoa").value;
    let qtdAmor = document.getElementById("numero").value;
    let c=0;

    while(c < qtdAmor){
        res.innerHTML += `<br><b>${amada}</b>, eu te amo! <i>Sempre lembre disso!</i>`;
        c++;
    }
    
}