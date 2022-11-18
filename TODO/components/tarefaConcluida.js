const BotaoConcluido = () => {
  const BotaoConcluido = document.createElement("button");
    BotaoConcluido.classList.add("check-button");
    BotaoConcluido.innerText = "Concluído";
    BotaoConcluido.addEventListener("click", tarefaConcluida);
  return BotaoConcluido
};

const tarefaConcluida = (evento) => {
    const botaoConcluido = evento.target;
    const tarefaCompleta = botaoConcluido.parentElement;
    tarefaCompleta.classList.toggle("done");
};

export default BotaoConcluido;