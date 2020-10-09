let media = 0;

function clique1() {
  media++;
  mediaFinal = media / 5;
  resultado.innerHTML = `<b>${mediaFinal.toFixed(1)}</b>`;
  if (mediaFinal < 2) {
    imagem.src = "img/crying.jpeg";
  } else if (mediaFinal >= 2 && mediaFinal <= 3) {
    imagem.src = "img/pokerface.jpeg";
  } else if (mediaFinal > 3 && mediaFinal <= 4.5) {
    //caso a média seja entre mais de 3 e 4.5.
    imagem.src = "img/happy.jpeg";
  } else {
    imagem.src = "img/sohappy.jpeg";
  }
}
