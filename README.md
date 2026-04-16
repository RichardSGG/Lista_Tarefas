Quicklist
Projeto desenvolvido durante a trilha de fundamentos da Rocketseat. O Quicklist é uma aplicação web simples e responsiva para gerenciar a lista de compras da semana.

Acesse o projeto: richardsgg.github.io/Lista_Tarefas/

Tecnologias Utilizadas
Este projeto foi construído usando tecnologias base e nomenclatura semântica em Português (pt-BR) para facilitar a leitura e manutenção do código:

HTML5: Estruturação da aplicação.

CSS3: Estilização, responsividade (Mobile First) e uso de variáveis CSS.

JavaScript (Vanilla): Lógica limpa e direta para manipulação da DOM.

Phosphor Icons: Biblioteca de ícones.

Google Fonts: Tipografia Inter.

Funcionalidades
Adicionar Itens: Digite o nome do produto e clique em Adicionar. O campo é limpo logo em seguida.

Validação: Impede a criação de itens vazios na lista.

Marcar como Concluído: O CSS identifica quando a caixa de seleção é marcada e risca o texto.

Remover Itens: O clique no ícone da lixeira remove o elemento da tela.

Alerta Temporizado: Um aviso surge na parte de baixo da tela ao deletar algo, desaparecendo sozinho após 3 segundos.

Explicação do JavaScript
O código JS foi criado sem comentários no arquivo principal para se manter limpo, funcionando nas seguintes etapas:

1. gerarId()
Gera um identificador único usando o Date.now(). Isso é essencial para que o clique no texto marque o checkbox correspondente.

2. adicionarItem(evento)
Função conectada ao envio do formulário:

Usa preventDefault para impedir que a página recarregue.

Valida se o campo de entrada tem texto.

Cria um novo elemento na lista e injeta o HTML dinamicamente.

Atrela o evento de apagar ao novo botão criado.

Limpa e foca novamente no campo de digitação.

3. apagarItem(elementoItem)
Recebe a linha como parâmetro, remove o elemento do HTML e dispara a função de alerta.

4. mostrarAlerta() e esconderAlerta()
Trabalham trocando a classe de visibilidade do alerta. O sistema utiliza setTimeout para fechar a mensagem sozinho após 3 segundos, limpando timers anteriores para evitar conflitos de exibição.

Autor
Projeto desenvolvido por Richard.
