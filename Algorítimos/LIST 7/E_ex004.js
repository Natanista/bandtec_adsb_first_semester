function verificar() {
  if (anos.value >= 5 && trigo.value >= 300 && faltas.value <= 5) {
    resultado.innerHTML = `Minha filha será sua!`;
    imagem.src = "img/noiva.jpeg";
  } else {
    resultado.innerHTML = `Deu ruim!Trabalhe mais 2 anos`;
    imagem.src = "img/angry.jpeg";
  }
}
