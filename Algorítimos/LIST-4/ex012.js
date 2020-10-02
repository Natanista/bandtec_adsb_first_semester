function ver() {
    if(ano.value < 1965) {
        resultado.innerHTML = `No ano ${ano.value} o email nem havia sido criado ainda...`;
    } else if(ano.value == 1965) {
        resultado.innerHTML = `No ano ${ano.value} o email estava sendo criado...`;
    } else if(ano.value > 1965 && ano.value <= 1969){
        resultado.innerHTML = `No ano ${ano.value} o email já havia sido criado...`;
    } else {
        resultado.innerHTML = `No ano ${ano.value} o email já havia sido aprimorado - Poderia ser enviado para outro computador...`;
    }
}