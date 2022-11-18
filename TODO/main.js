import BotaoConcluido from "./components/tarefaConcluida.js";
import BotaoExcluir from "./components/excluirTarefa.js";

  const criarTarefa = (evento) => {
  
  evento.preventDefault ();

  const lista = document.querySelector("[data-list]")
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;
  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  const conteudo = `<p class="content">${valor}</p>`;
  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConcluido());
  tarefa.appendChild(BotaoExcluir());
  lista.appendChild(tarefa);
  input.value = " ";

}

const novaTarefa = document.querySelector("[data-form-buttom]");
  novaTarefa.addEventListener("click", criarTarefa);