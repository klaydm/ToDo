const excluirTarefa = (atualiza, id) => {
  const index = id;
  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));
  tarefasCadastradas.splice(index, 1)
  localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));
  
  atualiza();
};  

const BotaoExcluir = (atualiza, id) => {
  const BotaoExcluir = document.createElement("button");
    BotaoExcluir.classList.add("delete-button");
    BotaoExcluir.innerText = "Excluir";
    BotaoExcluir.addEventListener("click", () => excluirTarefa(atualiza, id));
  return BotaoExcluir
};


export default BotaoExcluir;