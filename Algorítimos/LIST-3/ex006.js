function calcular(){
    var valorPorAmigo = Number(valor.value) / Number(amigos.value);
     resultado.innerHTML = `Cada amigo vai colaborar com <u>R$${valorPorAmigo}</u>  para a pizza de ${sabor.value}`;
}