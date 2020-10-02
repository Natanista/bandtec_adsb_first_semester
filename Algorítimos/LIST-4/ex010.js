        function verificar() {
            let horasAssistidas = (Number(eps.value) * 22) / 60; //Eps assistidos * 22 minutos, divide por 60 para tranformar em horas
            resultado.innerHTML = `Vejo que você gosta da série ${serie.value}`;
            if(horasAssistidas > 30){
                gostou.innerHTML = `Uau, você realmente gosta dessa série!`;
            }
        }