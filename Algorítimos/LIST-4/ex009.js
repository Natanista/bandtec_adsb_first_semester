  //Calcula o peso total de pessoas no elevador
  let pesoTOTAL = (Number(homens.value) * 80) + (Number(mulheres.value) * 60);

  //fala o peso total do elevador + um alerta caso pesoTOTAL > 800
  function analisar() {
      resultado.innerHTML =
          `Este elevador suporte 800Kg e o peso estimado desta lotação é de ${pesoTOTAL}kg`;
      if (pesoTOTAL > 800) {
          aviso.innerHTML =
              `<span style="color:blue">Será necessário descer alguém para que o elevador se movimente</span>`;
      }
  }