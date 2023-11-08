const questions = [
  {
    questio: "Que pais tiene mas poblacion",
    respostaCorrecta: "China",
    respuestaIncorrecta: "Andorra",
  },
  {
    questio: "El primer astronauta en pisar la luna?",
    respostaCorrecta: "Neil Amstrong",
    respuestaIncorrecta: "Paco Pons",
  },
];

let indexQuestioActual = 0;
let respostesCorrectes = 0;
let respostesIncorrectes = 0;

const questioProposada = document.getElementById("questioProposada");
const btnEsquerre = document.getElementById("btnEsquerre");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const btnReiniciar = document.getElementById("btnReiniciar");

function barrejaRespostes(correcta, incorrecta) {
  const respostes = [correcta, incorrecta];
  respostes.sort(() => Math.random() - 0.5);
  return respostes;
}

function mostraQuestio() {
  if (indexQuestioActual < questions.length) {
    //devuelve un array con los resultados ordenados aleatoriamente
    const questioActual = questions[indexQuestioActual];
    questioProposada.textContent = questioActual.questio;

    const [barrejatCorrecte, barrejatIncorrecte] = barrejaRespostes(
      questioActual.respostaCorrecta,
      questioActual.respuestaIncorrecta
    );
    btnDret.textContent = barrejatCorrecte;
    btnEsquerre.textContent = barrejatIncorrecte;
  } else {
    //El juego a terminado
    if (respostesCorrectes === questions.length) {
      questioProposada.textContent = "";
      missatge.textContent =
        "Has ganado! Has respondido todas la preguntas correctamente";
    } else {
      questioProposada.textContent = "";
      missatge.textContent = `Juego acabado. Respuestas correctas: ${respostesCorrectes}, Respuestas Incorrectas: ${respostesIncorrectes}`;
    }
    btnEsquerre.style.display = "none";
    btnDret.style.display = "none";
    btnReiniciar.style.display = "block";
  }
}

function comprobaResposta(respostaSeleccionada) {
  const questioActual = questions[indexQuestioActual];
  if (respostaSeleccionada === questioActual.respostaCorrecta) {
    respostesCorrectes++;
  } else {
    respostesIncorrectes++;
  }

  indexQuestioActual++;
  mostraQuestio();
}

btnEsquerre.addEventListener("click", () =>
  comprobaResposta(btnEsquerre.textContent)
);
btnDret.addEventListener("click", () => comprobaResposta(btnDret.textContent));

btnReiniciar.addEventListener("click", () => {
  indexQuestioActual = 0;
  respostesCorrectes = 0;
  respostesIncorrectes = 0;
  missatge.textContent = "";
  btnEsquerre.style.display = "inline-block";
  btnDret.style.display = "inline-block";
  btnReiniciar.style.display = "none";

  mostraQuestio();
});
mostraQuestio();
