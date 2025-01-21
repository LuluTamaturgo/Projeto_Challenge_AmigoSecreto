//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para guardar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um novo amigo
function adicionarAmigo() {
    // Pegar o nome digitado pelo usuário
    let campoInput = document.getElementById('amigo');
    let nomeAmigo = campoInput.value.trim(); // Remove espaços extras no início e no fim do texto

    // Verificar se o nome foi preenchido
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome."); // apresenta na tela o alerta caso o usuário não informe um nome
        return;
    }

    // Verificar se o nome já está na lista
    if (listaAmigos.includes(nomeAmigo)) {
        alert("Este nome já está na lista!"); // apresenta um alerta na tela informando que o nome já existe
        return;
    }
}