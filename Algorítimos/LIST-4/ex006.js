let custo = 0;
        function calcular() {
                custo = Number(consumo.value) * 0.85;
             if(consumo.value < 100) {
                custo = custo - ((10 / 100) * custo)
            }
            alert(`R$${custo.toFixed(2)}`);
        }