function calcular() {
    var fase1 = Number(horas.value) * (5 / 100);
    var fase2 = Number(horas.value) * (45 / 100);
    var fase3 = Number(horas.value) * (30 / 100);
    var faseRem = Number(horas.value) * (20 / 100);
    resultado.innerHTML = `Ao dormir ${horas.value} horas, você dormiu:<br>
<u>${fase1}</u> horas na fase 1<br>
<u>${fase2}</u> horas na fase 2<br>
<u>${fase3}</u> horas na fase 3<br>
<u>${faseRem}</u> horas na fase REM`;
}