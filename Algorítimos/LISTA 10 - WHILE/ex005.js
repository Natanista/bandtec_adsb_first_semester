function sortear() {
  res.innerHTML = ``;
  let c = 0;
  let qtdVezes = document.getElementById("qtd").value;
  while (c < qtdVezes) {
    res.innerHTML += `<br>${Math.trunc(Math.random() * 101)}`;
    c++;
  }
}
