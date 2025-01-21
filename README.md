# <h1 align="center"> Desafio : Amigo Secreto </h1>
***
### <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">⭕</font></font>Descrição:
***

O desafio solicita que seja criado uma aplicação para gerenciar de forma interativa, uma lista contendo nomes de amigos e sortear aleatoriamente um deles.
Para a execução deste código, foi de suma importância todo o contéudo abordado até aqui:
🔺Variáveis;

🔺Estrutura Condicional;

🔺Estrutura de Repetição;

🔺Funções;

🔺Listas;

A funcionalidade da aplicação é necessário capturar os dados informados pelo usuário, no caso os nomes dos amigos, validar as informações, por exemplo não aceitar que o usuário salve na lista campo vazio ou duplicado, exibir na interface os nomes adicionados e por fim, sortear um nome.

### <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">⭕</font></font> Primeiro Passo:
***
Primeiramente, houve a necessidade de realizar a leitura das orientações passadas pela Alura. Aqui, foi apresentado um passo a passo de como trabalhar o raciocício lógico, descrevendo os críterios da execução de cada função. 

### <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">⭕</font></font> Desafios encontrados no caminho:
***

Conforme avançando na elaboração do código, foi surgindo a necessidade de explorar a linguagem javascript, com objetivo de buscar aprender mais sobre a linguagem, seus metodos, durante pesquisas aprendi sobre:

📍 O metodo trim(): metodo que remove excesso de palavras

~~~~javascript
    let nome_amigo = input.value.trim(); // trim = metodo que remove espaços extras antes/depois da palavra: 
~~~~

📍 o uso do comando de repetição .forEach() : utilizado para percorrer a lista lista_amigos:

~~~~javascript
lista_amigos.forEach((amigo) => {
~~~~

📍appendChild() : metodo para adicionar novos elementos, no caso do código, foi utilizado para adicionar cada elemento do nome à lista HTML:

~~~~javascript
const listItem = document.createElement('li'); // para cada amigo, é criado um elemento <li> com nome como texto
        listItem.textContent = amigo;
        lista.appendChild(listItem); // appendChild = add o elemento <li> ao <ul>
~~~~

📍uso do git e github: funcionalidades importantissimas para profissionais de tecnologia, garantindo segurança em seus projetos e também divulgação dos mesmos;


### <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">⭕</font></font> Aprendizado:
***

- [x] Raciocinío lógico, resolvendo problemas de forma estruturada;
- [x] validação de dados;
- [x] planejamento e organização;
