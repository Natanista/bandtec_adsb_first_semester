
function ver() {
    let amor = 0;
let jogo = 0;
  res.innerHTML = ``;
  for (let c = 1; c <= 21; c++) {

    let randomico = Math.trunc(Math.random() * 2 + 1);
    if (randomico == 1) {
      res.innerHTML += `<img style="width:100px" src="img/jogo.png">`;
      jogo++;
    } else {
      res.innerHTML += `<img style="width:100px" src = "img/s2.png">`;
      amor++;
    }
  }
  if (jogo > amor) {
    res.innerHTML += `<br><h1>Você tem mais sorte no jogo<¹h1>`;
  } else {
    res.innerHTML += `<br>Você tem mais sorte no amor`;
  }
}
