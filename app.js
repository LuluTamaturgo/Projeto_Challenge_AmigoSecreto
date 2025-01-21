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

    // Adicionar o nome na lista de amigos
    listaAmigos.push(nomeAmigo);

    // Limpar o campo de entrada para facilitar a próxima adição
    campoInput.value = "";

    // Atualizar a lista exibida na página
    atualizarListaAmigos();
}

// Função para mostrar a lista de amigos na tela
function atualizarListaAmigos() {
    // Pegar o elemento <ul> onde os nomes serão exibidos
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista antes de atualizá-la

    listaAmigos.forEach(function(amigo) {
        let itemLista = document.createElement('li'); // Criar um item da lista
        itemLista.textContent = amigo; // Definir o nome do amigo como texto do item
        lista.appendChild(itemLista); // Adicionar o item à lista no HTML
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verificar se há amigos na lista
    if (listaAmigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear."); // Aviso se a lista estiver vazia
        return;
    }

    // Gerar um número aleatório para escolher um amigo
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio]; // Escolher o nome com base no número gerado

    // Mostrar o resultado do sorteio na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="sorteado">Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
