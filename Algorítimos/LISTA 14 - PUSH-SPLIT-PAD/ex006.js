function checar() {
  let senhaUser = document.getElementById("senha").value;

  senhaUser = senhaUser.replaceAll('a', "@");
  senhaUser = senhaUser.replaceAll('A', "@");
  senhaUser = senhaUser.replaceAll('e', "3");
  senhaUser = senhaUser.replaceAll('E', "3");
  div_mens.innerHTML = `${senhaUser}`;
}
