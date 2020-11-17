function calcular() {
  res.innerHTML = ``;
  for (let c = 0; c < 101; c++) {
    console.log(c);
    if (c % 2 == 0) {
      res.innerHTML += `<br>${c}`;
    } else {
      res.innerHTML += ``;
    }
  }
}
