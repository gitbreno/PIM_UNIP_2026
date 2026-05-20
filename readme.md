# 💪 FitLife — Dashboard de Acompanhamento Fitness

Projeto desenvolvido como parte do **PIM (Projeto Integrado Multidisciplinar) da UNIP 2026**.

O FitLife é um dashboard web para acompanhamento de treinos e saúde, desenvolvido com **HTML, CSS e JavaScript puro**, sem uso de frameworks ou bibliotecas externas.

---

## 📁 Estrutura de Arquivos

```
PIM_UNIP_2026/
├── index_inicial.html        → Página principal do dashboard
├── emdesenvolvimento.html    → Página exibida para seções ainda não finalizadas
├── README.md                 → Documentação do projeto
├── CSS/
│   ├── style_inicial.css     → Estilos da página principal
│   └── emdesenvolvimento.css → Estilos da página em desenvolvimento
└── JS/
    └── script.js             → Lógica e interatividade do dashboard
```

---

## 🖥️ O que o site faz

O FitLife simula um aplicativo de acompanhamento fitness. Em uma única tela o usuário consegue visualizar:

- O progresso geral da semana em forma de anel animado
- A evolução do peso nos últimos 30 dias em gráfico de linha
- A quantidade de treinos concluídos por semana em gráfico de barras
- Um calendário de treinos navegável por mês
- O histórico de conquistas desbloqueadas
- Controle de acessibilidade para aumentar e diminuir o tamanho da fonte

---

## ⚙️ Funcionalidades

### 🏠 Menu Lateral
Navegação com 7 itens: Painel, Meus Treinos, Alimentação, Evolução, Metas, Calendário e Perfil. O item ativo fica destacado em verde. Clicar nos itens fora do Painel redireciona para a página `emdesenvolvimento.html`.

### 📅 Botão de Período
Botão no cabeçalho que alterna entre **Semana**, **Mês** e **Ano** a cada clique, voltando para o início após a última opção.

### 🔔 Botão Sino
Alterna entre o ícone 🔔 (com notificação) e 🔕 (sem notificação) a cada clique, simulando a leitura de notificações.

### 🔵 Anel de Progresso
Animação automática que preenche o anel de 0% até 80% ao carregar a página, atualizando o número no centro a cada 20 milissegundos.

### 📈 Gráfico de Peso
Gráfico de linha desenhado diretamente no `<canvas>` mostrando a evolução do peso ao longo de 7 pontos: 100, 97, 95, 93, 92, 91 e 91 kg.

### 📊 Gráfico de Treinos
Gráfico de barras desenhado no `<canvas>` com a quantidade de treinos por dia da semana. A barra da semana atual aparece em cor escura para se destacar.

### 📆 Calendário de Treinos
Calendário dinâmico gerado pelo JavaScript que:
- Exibe o mês e ano atuais automaticamente
- Calcula e exibe os dias corretos de cada mês
- Destaca o dia de hoje com cor escura
- Permite navegar entre meses com os botões **‹** e **›**
- Permite selecionar qualquer dia com um clique

### 🏆 Histórico de Conquistas
Grade de badges gerada automaticamente pelo JavaScript a partir de um array de objetos, exibindo ícone e nome de cada conquista.

### ♿ Botão de Acessibilidade
Botão fixo no canto inferior direito da tela com duas opções:
- **A+** — aumenta o tamanho da fonte (até 20px)
- **A-** — diminui o tamanho da fonte (até 10px)

A fonte escala por toda a página de forma proporcional, incluindo menu, textos, títulos e calendário.

### 🚧 Página Em Desenvolvimento
Página simples exibida ao clicar nos itens do menu e nas atividades da semana que ainda não possuem conteúdo, com botão para voltar ao painel.

---

## 🗂️ Explicação do Código

### index_inicial.html

Estrutura da página dividida em dois blocos principais:

- **`.sidebar`** — menu lateral fixo com logo e links de navegação
- **`.conteudo`** — área principal com cabeçalho e dois grids de cards

O grid superior (`.linha-topo`) tem 3 colunas: progresso, peso e treinos. O grid inferior (`.linha-baixo`) tem 2 colunas: calendário e conquistas. No final do `body` fica o bloco de acessibilidade e a importação do `script.js`.

---

### CSS/style_inicial.css

O arquivo começa com uma variável global que controla o tamanho de toda a fonte da página:

```css
:root {
    --fonte: 14px;
}
```

Todos os `font-size` do projeto usam a unidade `em`, que é relativa ao tamanho base do `body`. Isso permite que o botão de acessibilidade atualize toda a tipografia de uma vez.

| Seção | O que faz |
|---|---|
| `:root` | Define a variável `--fonte` usada em toda a página |
| `*` | Reset geral: remove margens e espaçamentos padrão do navegador |
| `body` | Define fonte, cor de fundo, layout em linha e tamanho base via variável |
| `.sidebar` | Menu lateral fixo de 190px com fundo escuro |
| `.menu-item` | Links do menu com destaque verde para o item `.ativo` |
| `.cabecalho` | Barra superior branca com sombra |
| `.linha-topo` / `.linha-baixo` | Grids CSS que organizam os cards em colunas |
| `.card` | Fundo branco, bordas arredondadas e sombra suave |
| `.anel` | Círculo com `conic-gradient` que simula o preenchimento do progresso |
| `.anel-texto` | Círculo branco interno centralizado com a porcentagem |
| `.calendario-grade` | Grid de 7 colunas para os dias da semana |
| `.conquistas-grade` | Grid de 3 colunas para os badges |
| `.acessibilidade` | Botão flutuante fixo no canto inferior direito |

---

### JS/script.js

O arquivo está dividido em 9 seções comentadas:

**1. Menu Lateral**
Percorre todos os links `.menu-item` com um `for` e adiciona um evento de clique. Ao clicar, remove a classe `ativo` de todos os itens e adiciona somente no clicado.

**2. Botão de Período**
Usa um array com as 3 opções e uma variável de índice. A cada clique o índice avança e volta ao zero ao chegar no final, ciclando entre Semana, Mês e Ano.

**3. Botão Sino**
Verifica o texto atual do botão: se for 🔔 troca para 🔕, e vice-versa.

**4. Anel de Progresso**
Usa `setInterval` para chamar `animarProgresso` a cada 20ms. A cada chamada, incrementa a variável `porcentagem`, atualiza o `conic-gradient` do anel e o número no centro. Quando chega a 80, cancela o intervalo com `clearInterval`.

**5. Gráfico de Peso**
Obtém o contexto 2D do `<canvas>` com `getContext("2d")`. Percorre o array de pesos calculando X e Y de cada ponto e os conecta com `moveTo` e `lineTo`, desenhando a linha com `stroke()`.

**6. Gráfico de Treinos**
Percorre o array de treinos desenhando um retângulo com `fillRect` para cada valor. O índice 4 (semana atual) recebe cor escura para se destacar.

**7. Calendário**
A função `renderCalendario` reconstrói o calendário do zero a cada chamada:
- Limpa o conteúdo anterior com `innerHTML = ""`
- Atualiza o título com mês e ano
- Adiciona os nomes dos dias da semana
- Calcula o primeiro dia do mês para alinhar a grade corretamente
- Descobre o total de dias com `new Date(ano, mes + 1, 0).getDate()`
- Cria um `<div>` para cada dia e marca o dia de hoje com a classe `hoje`

A função `mudarMes` soma ou subtrai 1 ao mês e trata a virada de ano automaticamente.

**8. Conquistas**
Percorre o array `conquistas` com um `for` e cria dinamicamente o HTML de cada badge usando `createElement` e `innerHTML`, inserindo na grade com `appendChild`.

**9. Acessibilidade**
Usa `document.documentElement.style.setProperty` para alterar a variável CSS `--fonte` diretamente pelo JavaScript. Como todo o CSS usa `em` (relativo ao tamanho base), toda a tipografia da página escala automaticamente:

```js
document.documentElement.style.setProperty("--fonte", tamanhoFonte + "px");
```

---

## 🚀 Como Usar

1. Baixe todos os arquivos mantendo a estrutura de pastas
2. Abra o arquivo `index_inicial.html` no navegador
3. Nenhuma instalação ou conexão com internet é necessária

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| HTML5 | Estrutura e organização da página |
| CSS3 | Estilização, Flexbox, Grid, variáveis CSS e conic-gradient |
| JavaScript | Interatividade, animações e geração dinâmica de conteúdo |
| Canvas API | Desenho dos gráficos de linha e barras sem bibliotecas externas |

---

## 👨‍💻 Projeto Acadêmico

Desenvolvido para o **PIM — Projeto Integrado Multidisciplinar**  
**Instituição:** UNIP — Universidade Paulista  
**Ano:** 2026
