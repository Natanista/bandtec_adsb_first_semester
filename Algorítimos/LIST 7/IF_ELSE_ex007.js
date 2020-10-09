function alterar() {
  let mes = meses.value;
  if (mes >= 3 && mes <= 5) {
    imagem.src = "img/primavera.jpeg";
  } else if (mes >= 6 && mes <= 8) {
    imagem.src = "img/verao.jpeg";
  } else if (mes >= 9 && mes <= 11) {
    imagem.src = "img/outono.jpeg";
  } else {
    imagem.src = "img/inverno.jpeg";
  }
}
