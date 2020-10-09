function verificar() {
    if(renda.value <=2000 || renda.value <=3000) {
        resultado.innerHTML = `Você terá direito ao auxílio`;
    } else {
        resultado.innerHTML = `Sem direito ao auxílio`;
    }
}