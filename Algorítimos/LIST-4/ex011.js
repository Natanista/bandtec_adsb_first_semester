function ver() {
    if (hora.value > 19 && hora.value < 21) {
        resultado.innerHTML =
        `Não é recomendável que você assista sua séria favorita no horário ${hora.value}h`;
    } else {
        resultado.innerHTML = `O horário ${hora.value}h é adequado para assistir sua série favorita`;
    }
}