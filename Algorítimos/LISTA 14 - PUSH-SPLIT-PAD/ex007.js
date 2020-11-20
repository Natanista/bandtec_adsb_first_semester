function checar() {
    
    div_mens.innerHTML = ``;
  let phrase = document.getElementById("frase").value;

  for(let c = 0; c < phrase.length; c++){
      div_mens.innerHTML += `<br>${phrase[c]}`;
  }

}
