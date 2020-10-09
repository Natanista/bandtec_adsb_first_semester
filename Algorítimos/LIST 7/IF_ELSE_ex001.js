function classificar() {
  let notaAluno = nota.value;
  if (notaAluno < 5) {
    alert("O aluno precisa de muita ajuda!");
  } else if (notaAluno >= 5 && notaAluno <= 7) {
    alert("Aluno na média");
  } else if (notaAluno > 7 && notaAluno <= 9.5) {
    alert("Aluno acima da média");
  } else {
    alert("Aluno fora da curva");
  }
}
