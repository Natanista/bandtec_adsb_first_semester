filme.value = ``;
let filmes = [];
let c = 1;

function cadastrar() {
  filmes.push(filme.value);
  filme.value = ``;

        c++;
        if(c % 2 == 0){
            res.innerHTML += `<br><span style = "color:red;">${filmes[filmes.length - 1]}</span>`;
        }else{
            res.innerHTML += `<br><span style = "color:blue;">${filmes[filmes.length - 1]}</span>`;
        }

    }

