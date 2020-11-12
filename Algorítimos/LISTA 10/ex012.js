function atazanar(){
    res.innerHTML = ``;
    let qtdElefantes = Number(document.getElementById("qtd").value);
    let c = 1;
    let incomodam = "incomodam ";
    
    

    while(c < qtdElefantes){
        res.innerHTML += `<br><i>1 elefante incomoda muita gente!<br>${c} elefantes ${incomodam} muito mais!</i><br><br>`;
        c++;
    }

}