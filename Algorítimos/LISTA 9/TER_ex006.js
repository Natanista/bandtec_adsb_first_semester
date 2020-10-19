let forcaTotal1 = 100;
let forcaTotal2 = 100;
player1.width = `${forcaTotal1}%;`;
player2.width = `${forcaTotal2}%;`

    function bater() {
    let sorteio = ((Math.random() * 2) + 1);
    let forcaGolpe = Math.random() * 20;       

    if (sorteio == 1) {
        resultado.innerHTML = `Jogador 1 apanha`;
        forcaTotal1 - forcaGolpe;
    } else {
        resultado.innerHTML = `Jogador 2 apanha`;
        forcaTotal2 - forcaGolpe;
    }

}