# Quicklist 🛒

Desafio desenvolvido durante a trilha de fundamentos da **Rocketseat**. O Quicklist é uma aplicação web simples e responsiva para gerenciar uma lista de compras da semana.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído usando tecnologias base e nomenclatura semântica em **Português (pt-BR)** para facilitar a leitura e manutenção do código:

- **HTML5:** Estruturação da aplicação.
- **CSS3:** Estilização, responsividade (Mobile First) e uso de variáveis CSS.
- **JavaScript (Vanilla):** Lógica limpa e direta para manipulação da DOM.
- **Phosphor Icons:** Biblioteca de ícones.
- **Google Fonts:** Tipografia 'Inter'.

## 💻 Funcionalidades

- **Adicionar Itens:** Digite o nome do produto e aperte "Adicionar". O input é limpo logo em seguida.
- **Validação:** Evita a criação de itens em branco na lista.
- **Marcar como Concluído:** O CSS identifica quando a `caixa-selecao` (checkbox) é marcada e risca o texto usando `text-decoration: line-through`.
- **Remover Itens:** O clique no ícone da lixeira destrói o elemento da tela.
- **Alerta Temporizado:** Um aviso surge na parte de baixo da tela ao deletar algo, desaparecendo sozinho após 3 segundos.

## ⚙️ Explicação do JavaScript (O "Motor" da Aplicação)

O código JS foi criado sem comentários no arquivo principal para se manter limpo, mas a sua lógica funciona nas seguintes etapas:

### 1. `gerarId()`
Gera um identificador único usando o `Date.now()`. Isso é essencial para que o clique no texto (`<label>`) consiga marcar o checkbox correspondente (`<input>`).

### 2. `adicionarItem(evento)`
Essa é a função conectada ao envio do formulário (`submit`). 
- Ela usa `evento.preventDefault()` para impedir que a página recarregue.
- Valida se o campo de `entrada` tem texto.
- Cria um novo elemento `<li>` com a classe `item` e injeta o HTML dinamicamente.
- Ela já atrela o "escutador de eventos" (EventListener) ao novo `botao-apagar` recém-criado para que ele também possa ser deletado.
- Adiciona o item na `lista` (`appendChild`) e foca novamente no campo de digitação.

### 3. `apagarItem(elementoItem)`
Recebe a linha (o `<li>` inteiro) como parâmetro, executa o comando `.remove()` para destruí-la do HTML e engatilha a função de alerta.

### 4. `mostrarAlerta()` e `esconderAlerta()`
Trabalham trocando a classe `escondido` da div do alerta. 
O truque aqui está no `clearTimeout` e `setTimeout`. Sempre que o alerta é chamado, ele limpa qualquer timer anterior e inicia uma contagem de 3 segundos (3000ms) antes de fechar a mensagem sozinho.

## 👨‍💻 Autor

Projeto desenvolvido por **Richard** 🚀.
