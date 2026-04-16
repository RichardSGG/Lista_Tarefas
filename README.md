# Quicklist

Projeto desenvolvido durante a trilha de fundamentos da Rocketseat. O Quicklist é uma aplicação web simples e responsiva para gerenciar a lista de compras da semana.

**Acesse o projeto:** [richardsgg.github.io/Lista_Tarefas/](https://richardsgg.github.io/Lista_Tarefas/)

## Tecnologias Utilizadas

Este projeto foi construído usando tecnologias base e nomenclatura semântica em Português (pt-BR) para facilitar a leitura e manutenção do código:

- HTML5: Estruturação da aplicação.
- CSS3: Estilização, responsividade (Mobile First) e uso de variáveis CSS.
- JavaScript (Vanilla): Lógica limpa e direta para manipulação da DOM.
- Phosphor Icons: Biblioteca de ícones.
- Google Fonts: Tipografia Inter.

## Funcionalidades

- Adicionar Itens: Digite o nome do produto e clique em Adicionar. O campo é limpo logo em seguida.
- Validação: Impede a criação de itens vazios na lista.
- Marcar como Concluído: O CSS identifica quando a caixa de seleção é marcada e risca o texto.
- Remover Itens: O clique no ícone da lixeira remove o elemento da tela.
- Alerta Temporizado: Um aviso surge na parte de baixo da tela ao deletar algo, desaparecendo sozinho após 3 segundos.

## Explicação do JavaScript

O código JS funciona nas seguintes etapas:

### 1. gerarIdUnico()
Gera um identificador único para garantir que o clique no texto marque o checkbox correspondente.

### 2. adicionarNovoItem(evento)
- Impede o recarregamento da página.
- Cria o novo elemento na lista injetando o HTML.
- Atrela o evento de remoção ao botão criado.

### 3. removerItem(item)
Remove o elemento do HTML e dispara a função de alerta visual.

### 4. exibirAlerta()
Gerencia a visibilidade da mensagem de confirmação, utilizando um temporizador para ocultar o aviso automaticamente.

## Autor

Projeto desenvolvido por Richard.
