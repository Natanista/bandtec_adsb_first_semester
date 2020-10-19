function comprar() {
  let precoChocolate = 3;
  chocolates.value > 12 ? (precoChocolate = 2.5) : (precoChocolate = 3);
  let totalChocolate = precoChocolate * chocolates.value;
  resultado.innerHTML = `${totalChocolate}`;
}
