
        function analisar() {
            let saldoAtual = saldo.value
            let novoSaldo = saldoAtual - Number(debito.value);
              resultado.innerHTML = `O saldo atual da conta corrente é de R$${novoSaldo}`;
              if(novoSaldo < 0){
                  resultado.innerHTML = `<b><span style="color:red">O saldo atual da conta corrente é R$${novoSaldo}</span></b>`;
              }
        }