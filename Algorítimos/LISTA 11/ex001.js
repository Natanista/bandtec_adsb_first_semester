function entrar(){
    let loginUser = document.getElementById("login").value;
    let senhaUser = document.getElementById("senha").value;
    const loginValido = senhaUser == "seinha" && loginUser == "aidimin"; 

    if(loginValido){
        res.innerHTML = `<span style="color:blue;">Usuário autenticado com sucesso!</span>`;
    }else if(loginUser == "aidimin" && senhaUser !== "seinha"){
        res.innerHTML = `<span style="color:red">Sua senha está inválida!</span>`;
        alert("Entre em contato com o suporte para recuperar sua senha");
    }else if(senhaUser == "seinha" && loginUser !== "aidimin" ){
        res.innerHTML = `<span style="color:red;">Seu login está inválido!</span>`
    }else{
        res.innerHTML = `<span style="color:red">Seu login está inválido!</span>`;
        res.innerHTML += `<br><span style="color:red;">Sua senha está inválida!</span>`;
    }

}