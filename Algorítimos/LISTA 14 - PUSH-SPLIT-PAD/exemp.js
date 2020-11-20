function checar() {
    let senhaUser = document.getElementById("senha").value;
  
    
      div_mens.innerHTML = `${senhaUser.replaceAll('/a|e|A|E','@|@|3|3')}`;
  
  }
  