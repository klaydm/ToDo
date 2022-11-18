const BotaoExcluir = () => {
  const BotaoExcluir = document.createElement("button");
    BotaoExcluir.classList.add("delete-button");
    BotaoExcluir.innerText = "Excluir";
    BotaoExcluir.addEventListener("click", excluirTarefa);
  return BotaoExcluir
};

const excluirTarefa = (evento) => {
  const tarefaRemovida = event.target;
  const tarefaConcluida = tarefaRemovida.parentElement;
  tarefaConcluida.remove();
  return BotaoExcluir;
};  

export default BotaoExcluir;