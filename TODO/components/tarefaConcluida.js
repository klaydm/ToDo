const tarefaConcluida = (atualiza, id) => {
  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"))

  tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;
  localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));

  atualiza();
};

const BotaoConcluido = (atualiza, id) => {
  const BotaoConcluido = document.createElement("button");
    BotaoConcluido.classList.add("check-button");
    BotaoConcluido.innerText = "Concluído";
    BotaoConcluido.addEventListener("click", () => tarefaConcluida(atualiza, id));
  return BotaoConcluido
};

export default BotaoConcluido;