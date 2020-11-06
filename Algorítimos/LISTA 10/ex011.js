function curtir(){
    let c = 0;

    while(c < 101){
        
        if(c % 3 == 0 && c % 5 == 0){
            res.innerHTML += `<br><b>É TRI! É PENTA!</b>`;
        }else if(c % 5 == 0){
            res.innerHTML += `<br><b>É PENTA</b>`;
        }else if(c % 3 == 0){
            res.innerHTML += `<br><b>É TRI!</b>`;
        }else{
            res.innerHTML +=`<br>${c}`;
        }
        c++;
    }
}