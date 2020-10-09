function verificar() {
    if(cabelo.value <=2 && altura.value >=1.7){
        imagem.src = 'img/happy.jpeg';
    } else {
        imagem.src = 'img/sad.jpeg';
    }
}