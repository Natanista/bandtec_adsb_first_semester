function analisar() {
  res.innerHTML = ``;
  let salto = Number(document.getElementById("dias").value);
  let c = 1;
 

  while (c < 31) {

    if(c % salto  == 1){
      res.innerHTML += `<br>Dia ${c} - <b>Musculação</b>`
    }else{
      res.innerHTML += `<br>Dia ${c} - Comer e dormir`
    }
    c++;
    
  }
}
