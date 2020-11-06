function verificar() {
  res.innerHTML = ``;
  let imagem = `<img style="width:100px" src="img/juventus.png" alt="">`;
  let c = 0;
  while (c < 7) {
    res.innerHTML += `<br>${imagem}`;
    c++;
  }
}
