function verificar() {
  if (temperatura.value < 10) {
    resultado.innerHTML = "Apropiada p/ conservar alimento";
    imagemResultado.src = 'img/fruta.jpeg';
  } else {
    resultado.innerHTML = "Inapropiado para cultivar alimento";
    imagemResultado.src = 'img/frutapodre.jpeg';
  }
}
