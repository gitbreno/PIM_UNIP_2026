💪 FitLife — Dashboard de Acompanhamento Fitness
Projeto de dashboard web para acompanhamento de treinos, progresso semanal e conquistas pessoais. Desenvolvido com HTML, CSS e JavaScript puro, sem frameworks ou bibliotecas externas.

📁 Estrutura de Arquivos
projeto/
├── index.html               → Página principal do dashboard
├── emdesenvolvimento.html   → Página exibida ao clicar em itens ainda não finalizados
├── CSS/
│   └── style_inicial.css    → Todos os estilos visuais do projeto
│   └── emdesenvolvimento.css → 
└── JS/
    └── script.js            → Toda a lógica e interatividade do projeto

🖥️ O que o site faz
O FitLife é um painel (dashboard) que simula um aplicativo de acompanhamento fitness. Ele exibe, em uma única tela, as principais informações de saúde e treino do usuário:

Progresso geral da semana em formato de anel animado
Evolução do peso ao longo dos últimos 30 dias
Quantidade de treinos concluídos por semana
Calendário de treinos navegável por mês
Histórico de conquistas desbloqueadas


⚙️ Funcionalidades
🏠 Menu Lateral
Navegação com 7 itens: Painel, Meus Treinos, Alimentação, Evolução, Metas, Calendário e Perfil. O item ativo fica destacado em verde. Clicar nos itens fora do Painel redireciona para a página emdesenvolvimento.html.
📅 Botão de Período
Botão no cabeçalho que alterna entre Semana, Mês e Ano a cada clique, ciclando entre as três opções.
🔔 Botão Sino
Alterna entre o ícone de sino com notificação (🔔) e sem notificação (🔕) a cada clique, simulando marcar notificações como lidas.
🔵 Anel de Progresso
Animação automática ao carregar a página: o anel parte de 0% e preenche até 80% com cor verde, atualizando o número no centro a cada 20 milissegundos.
📈 Gráfico de Peso
Gráfico de linha desenhado no elemento Canvas mostrando a queda de peso ao longo do tempo, com os valores: 100, 97, 95, 93, 92, 91 e 91 kg.
📊 Gráfico de Treinos
Gráfico de barras desenhado no Canvas com os treinos de cada dia da semana. A barra da semana atual aparece em cor escura para se destacar das demais.
📆 Calendário
Calendário dinâmico gerado pelo JavaScript que:

Exibe o mês e ano atuais
Mostra os dias corretos de cada mês (sem travar em 31)
Destaca o dia de hoje automaticamente
Permite navegar entre meses com os botões ‹ e ›
Permite clicar em qualquer dia para selecioná-lo

🏆 Conquistas
Grade de badges gerada dinamicamente pelo JavaScript a partir de um array de objetos. Cada badge exibe um ícone e o nome da conquista.
🚧 Página Em Desenvolvimento
Página simples exibida ao clicar nos itens do menu e nas atividades da semana que ainda não têm conteúdo, com botão para voltar ao painel.

🗂️ Explicação do Código
index.html
O HTML define a estrutura visual da página dividida em dois blocos principais:

.sidebar — menu lateral fixo com logo e links de navegação
.conteudo — área principal com cabeçalho e dois grids de cards

O grid superior (.linha-topo) tem 3 colunas com os cards de progresso, peso e treinos. O grid inferior (.linha-baixo) tem 2 colunas com o calendário e as conquistas.
Os gráficos usam a tag <canvas> e os botões do cabeçalho chamam funções JavaScript diretamente pelo atributo onclick.

style_inicial.css
O CSS está organizado em seções comentadas:
SeçãoO que faz* { }Reset geral: remove margens e paddings padrão do navegadorbodyDefine a fonte, cor de fundo e o layout em linha (flexbox).sidebarMenu lateral fixo de 190px com fundo escuro.menu-itemEstilo dos links do menu, com destaque verde para o item .ativo.cabecalhoBarra superior branca com sombra suave.linha-topo / .linha-baixoGrids CSS que organizam os cards em colunas.cardFundo branco, borda arredondada e sombra suave.anelCírculo com conic-gradient que simula o preenchimento do anel.anel-textoCírculo branco menor centralizado dentro do anel.calendario-gradeGrid de 7 colunas para os dias da semana.conquistas-gradeGrid de 3 colunas para os badges

script.js
O JavaScript está dividido em 8 seções comentadas:
1. Menu Lateral
Percorre todos os links .menu-item com um for e adiciona um evento de clique em cada um. Ao clicar, remove a classe ativo de todos e adiciona apenas no clicado.
2. Botão de Período
Usa um array com as 3 opções e um índice numérico. A cada clique, o índice avança e volta ao zero quando chega ao final, ciclando as opções.
3. Botão Sino
Verifica o texto atual do botão: se for 🔔 troca para 🔕, e vice-versa.
4. Anel de Progresso
Usa setInterval para chamar a função animarProgresso a cada 20ms. A cada chamada, incrementa a variável porcentagem e atualiza o conic-gradient do anel e o texto do centro. Quando chega a 80, o intervalo é cancelado com clearInterval.
5. Gráfico de Peso
Obtém o contexto 2D do Canvas com getContext("2d"). Percorre o array de pesos com um for, calculando a posição X e Y de cada ponto, e desenha uma linha conectando todos com moveTo e lineTo.
6. Gráfico de Treinos
Percorre o array de treinos e desenha um retângulo (fillRect) para cada valor. O índice 4 recebe cor escura para destacar a semana atual.
7. Calendário
A função renderCalendario reconstrói o calendário do zero a cada chamada:

Limpa o HTML anterior com innerHTML = ""
Atualiza o título com mês e ano
Adiciona os nomes dos dias da semana (D, S, T...)
Calcula o dia da semana do primeiro dia do mês para alinhar corretamente
Descobre o total de dias do mês com new Date(ano, mes + 1, 0).getDate()
Cria um <div> para cada dia e marca o dia de hoje com a classe hoje

A função mudarMes soma ou subtrai 1 ao mês atual e trata a virada de ano.
8. Conquistas
Percorre o array conquistas com um for e cria dinamicamente os elementos HTML de cada badge usando createElement e innerHTML, inserindo-os na grade com appendChild.

🚀 Como Usar

Baixe todos os arquivos mantendo a estrutura de pastas
Abra o arquivo index.html no navegador
Nenhuma instalação ou internet é necessária


🛠️ Tecnologias Utilizadas

HTML5 — estrutura e semântica da página
CSS3 — estilização, flexbox, grid e conic-gradient
JavaScript — interatividade, animações e geração dinâmica de conteúdo
Canvas API — desenho dos gráficos de linha e barras