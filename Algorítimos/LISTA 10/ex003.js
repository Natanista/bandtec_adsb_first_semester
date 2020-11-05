function verificar(){
    let timeBom = document.getElementById("time1").value;
    let timeRuim = document.getElementById("time2").value;
    let c = 0;

    while(c < 10){
        res.innerHTML += `<br><b>${timeBom}</b> é melhor do que <b>${timeRuim}</b>`;
        c++;
    }
}