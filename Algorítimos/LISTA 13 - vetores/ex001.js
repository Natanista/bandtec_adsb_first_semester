let movies = [];
filme.value = ``;
function cadastrar() {
movies.push(filme.value);
filme.value = ``;
favorito.innerHTML = `${movies[0]}`;
terceiro.innerHTML =  `${movies[2]}`;
total.innerHTML = `${movies.length}`;

if(filmes[2] == undefined){
    terceiro.innerHTML = `Ainda não Existe`;
}else{
    terceiro.innerHTML =  `${movies[2]}`;
}

}