let valorFinal = 0;

function calcular() {
  valorFinal = Number(preco.value) / Number(amigos.value);
  if (valorFinal > 20) {
    alerta.innerHTML = "Deu Ruim!Pizza muito cara!";
  } else if(valorFinal == 20) {
      alerta.innerHTML = `Uhul! Vai rolar Pizza!`;
  } else {
      
  }
  resultado.innerHTML = `Cada amigo vai pagar R$${valorFinal.toFixed(
    2
  )} pela pizza`;
}
