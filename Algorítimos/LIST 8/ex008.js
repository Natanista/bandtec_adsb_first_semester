function analisar() {
    if (preco.value < 800) {
        resultado.innerHTML = `TV fora da faixa de preço`;
        resultado2.innerHTML = `Preço baixo demais!`;
        
    }  else if (preco.value >= 800 && preco.value <= 2000 && marca.value == 3 || marca.value == 4) {
        resultado.innerHTML = `Na faixa de preço, porém marca não confiável`;
        resultado2.innerHTML = ``;
    } else if (preco.value >= 800 && preco.value <= 2000 && marca.value == 1 || marca.value == 2) {
        resultado.innerHTML = `Essa TV pode entrar na sua lista!`;
        resultado2.innerHTML = ``;
    } else {
        resultado.innerHTML = `TV fora da faixa de preço`;
        resultado2.innerHTML = `TV cara demais, infelizmente`;
    }
    
}