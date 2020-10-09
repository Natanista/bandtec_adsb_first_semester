let vezes = 0;

function aumentar() {
    vezes++;
    result.innerHTML = vezes;
    if (vezes == 3 || vezes == 4 || vezes == 7 || vezes == 10) {
        alert(`Você clicou ${vezes} vezes e Juliana gosta desse número!`);
    }
}