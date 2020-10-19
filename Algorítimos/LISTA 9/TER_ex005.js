function verificar() {
  let media = (Number(nota1.value) + Number(nota2.value)) / 2;

  media >= 6 && media <= 7.5
    ? (resultado.innerHTML = `Aprovado - Automação, Seg ou Testes`)
    : media > 7.5
    ? (resultado.innerHTML = `Aprovado - DEV`)
    : (resultado.innerHTML = `Infelizmente Reprovado`);
}
