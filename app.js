//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const listaAmigos = document.getElementById("listaAmigos");

  const nome = input.value.trim();
  if (!nome) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  amigos.push(nome);
  input.value = "";

  const li = document.createElement("li");
  li.textContent = nome;
  listaAmigos.appendChild(li);
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  const li = document.createElement("li");
  li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
  resultado.appendChild(li);
}
