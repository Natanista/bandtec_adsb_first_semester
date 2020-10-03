function avaliar() {
    if(idade.value >= 18) {
        resultado.innerHTML = `${nome.value} vamos tirar a CNH?`;
    } else {
        resultado.innerHTML = `${nome.value} vai jogar Playstation!`;
    }
    
}