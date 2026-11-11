# DOCUMENTAÇÃO DO PROJETO WEB — MYGAMES (ESTILO BACKLOGGD BR)

**Universidade Positivo**  
**Disciplina:** DFEW.08 – Desenvolvimento Front-End para Web  
**Professor:** Fabricio Olivo (`fabricio@up.edu.br`)  
**Equipe:**  
- Reinaldo Celestino Da Silva Neto  
- Gustavo Moreira Borges Arantes  

---

## 1. TEMA E OBJETIVOS DO SITE

O **MyGames** é uma plataforma brasileira de catalogação, diário gamer (*backlog*), lista de desejos (*wishlist*) e análises comunitárias de jogos eletrônicos, diretamente inspirada no **Backloggd** e no **Letterboxd**, totalmente adaptada para o português brasileiro.

### Objetivos Principais:
- Permitir que jogadores organizem seus jogos por estado: **Jogando, Zerado, Quero Jogar (Pretendo Jogar), Pausado, Dropado e Quero Comprar (Lista de Desejos)**.
- Oferecer um sistema de **Análises (Reviews)** com avaliação de **0 a 5 estrelas**, resenha em texto e selos de veredito: **Recomendo**, **Não Recomendo** e **Apenas em Promoção**.
- Disponibilizar um **Perfil Gamer Customizável** contendo foto de avatar, banner, biografia (até 500 caracteres), vitrine de **4 Jogos Favoritos**, **Top 5 Jogos do Ano**, **Plataforma Preferida** e estatística de **Jogos Zerados por Plataforma**.
- Garantir persistência local de dados no navegador utilizando `localStorage` e funcionamento 100% offline a partir do arquivo `index.html`.

---

## 2. FERRAMENTAS, LINGUAGENS E SITES DE REFERÊNCIA

### Linguagens e Tecnologias Utilizadas:
- **HTML5 Semântico:** Uso estruturado de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<table>`, `<form>`, `<video>` e `<audio>`.
- **CSS3:** Estilização em três níveis de escopo (externo em `css/style.css`, incorporado via `<style>` e em linha via atributo `style`), utilizando variáveis CSS, **Flexbox**, **CSS Grid Layout** e **Media Queries** responsivas (`990px` e `728px`).
- **JavaScript (ES6+ Puro):** Manipulação dinâmica do DOM, eventos (`submit`, `input`, `change`, `click`), armazenamento no `localStorage` e uso das 4 estruturas fundamentais (sequencial, condicional `if/else`, repetição `for` e estruturas de dados em Arrays/Objetos JSON).
- **Bootstrap 5.3:** Aplicado na página `comunidade.html` para alertas descartáveis, cartões, formulários e botões utilitários.

### Ferramentas de Suporte:
- **Visual Studio Code** (codificação e indentação) — https://code.visualstudio.com/
- **Git & GitHub Desktop** (controle de versão e publicação) — https://desktop.github.com/
- **Google Fonts** (tipografias *Outfit* e *Inter*) — https://fonts.google.com/

### Sites de Referência (Inspiração e Metadados):
1. **Backloggd** — https://www.backloggd.com/ (Principal referência estética de pôsteres, perfil gamer e diário de backlog).
2. **RAWG Video Games Database API** — https://rawg.io/apidocs (Referência para metadados, capas e plataformas).
3. **IGDB (Internet Game Database)** — https://www.igdb.com/ (Referência para capas verticais e informações técnicas).

---

## 3. DIVISÃO DE TAREFAS E DIFICULDADES ENCONTRADAS

### Divisão de Tarefas entre os Integrantes:
- **Reinaldo Celestino Da Silva Neto:** Arquitetura das páginas HTML5 semânticas (`index.html`, `explorar.html`, `detalhes.html`, `perfil.html`, `contato.html`), criação da folha de estilo `css/style.css` inspirada no Backloggd, responsividade (Media Queries) e validação nativa de formulários.
- **Gustavo Moreira Borges Arantes:** Desenvolvimento da lógica em JavaScript (`js/script.js`), integração com `localStorage`, páginas `biblioteca.html`, `desejos.html`, `analises.html`, `login.html`, implementação do Bootstrap em `comunidade.html` e modelagem de dados.

### Dificuldades Encontradas e Soluções:
- **Padronização visual entre páginas puras e Bootstrap:** Resolvido mantendo o cabeçalho e rodapé unificados e aplicando classes de tema escuro compatíveis com a paleta `#14181c` do Backloggd.
- **Persistência de dados entre múltiplas páginas sem servidor back-end:** Resolvido centralizando as chaves `mygames_catalogo`, `mygames_backlog`, `mygames_desejos`, `mygames_reviews` e `mygames_perfil` no `localStorage`.

---

## 4. ESTUDO DE UX, UI, USABILIDADE, PALETA DE CORES E TIPOGRAFIA

### Experiência do Usuário (UX) e Usabilidade:
- **Navegação Consistente:** Todas as 10 páginas contam com a mesma barra de navegação superior fixa (*sticky navbar*) com indicador visual da página ativa (`.ativo`).
- **Ações Rápidas:** No catálogo (`explorar.html`), o usuário pode adicionar um jogo ao Backlog ou à Lista de Desejos com apenas 1 clique, sem precisar preencher formulários longos.
- **Feedback Visual:** Campos de formulário mudam de cor no estado `:hover` (amarelo), `:focus` (rosa neon) e `:invalid` (vermelho) para orientar o preenchimento correto.

### Interface do Usuário (UI) e Paleta de Cores (Inspirada no Backloggd):
| Elemento | Código Hexadecimal | Aplicação na Interface |
| :--- | :--- | :--- |
| **Fundo Principal (Dark Slate)** | `#14181c` | Plano de fundo geral das páginas (`body`) |
| **Fundo Secundário / Containers** | `#1b2128` | Painéis, formulários, barras de filtro e tabelas |
| **Fundo dos Cards / Pôsteres** | `#212832` | Cartões de jogos e resenhas |
| **Rosa/Magenta Backloggd (Acento Primário)** | `#ea377a` | Botões principais, destaques, abas ativas e bordas de foco |
| **Verde Esmeralda (Avaliação/Sucesso)** | `#00e054` | Estrelas de nota, selo "Recomendo" e status "Zerado" |
| **Azul Ciano** | `#40bcf4` | Links externos e status "Jogando" |
| **Amarelo Âmbar** | `#fbbf24` | Selo "Apenas em Promoção" e estado `:hover` de inputs |
| **Vermelho Alerta** | `#ef4444` | Selo "Não Recomendo", status "Dropado" e estado `:invalid` |

### Tipografia Escolhida:
- **Títulos (`h1` a `h6`) e Logotipo:** **Outfit** (Sans-serif geométrica de alto impacto visual para cabeçalhos e números estatísticos).
- **Corpo de Texto, Tabelas e Formulários:** **Inter** (Altíssima legibilidade em telas escuras para leitura de resenhas longas e tabelas).

---

## 5. MAPA DO SITE (SITEMAP) E AS 10 TELAS DESENVOLVIDAS

Todas as **10 páginas HTML** encontram-se na pasta raiz do projeto e são navegáveis entre si:

1. **`index.html` (Início):** Hero banner com arte de destaque, contadores dinâmicos do backlog, linha horizontal de cartões dos Jogos Populares da Semana e mural com as 3 análises mais recentes.
2. **`explorar.html` (Catálogo de Jogos):** Grade em **CSS Grid Layout** com busca por texto em tempo real, filtro por gênero e plataforma, botão de sincronização de metadados (IGDB/RAWG) e botões rápidos `+ Backlog` e `+ Desejos`.
3. **`detalhes.html` (Jogo em Destaque & Multimídia):** Ficha completa do jogo selecionado com capa, sinopse, nota média, **Player de Vídeo Nativo (`<video controls>`)** com o trailer e **Reprodutor de Áudio Nativo (`<audio controls>`)** com a trilha sonora.
4. **`biblioteca.html` (Meu Backlog & Diário):** Abas de filtro por estado (*Jogando, Zerado, Quero Jogar, Pausado, Dropado*), **Tabela de Dados (6 colunas x múltiplas linhas)** e formulário para cadastrar novos registros no `localStorage`.
5. **`desejos.html` (Lista de Desejos / Quero Comprar):** Grade de cartões dos jogos desejados com prioridade, preço-alvo, etiqueta (*"Apenas em Promoção"* vs *"Vale o Preço Cheio"*) e botão *"Comprei! Mover p/ Backlog"*.
6. **`analises.html` (Análises & Reviews):** Formulário validado para publicar análises com nota de 0 a 5 estrelas e veredito (*Recomendo, Não Recomendo, Apenas em Promoção*) + mural completo da comunidade.
7. **`perfil.html` (Perfil Gamer Customizável):** Exibição de avatar, banner, biografia (máx. 500 caracteres), vitrine dos **4 Jogos Favoritos**, lista **Top 5 Jogos do Ano**, tabela automática de **Jogos Zerados por Plataforma** e formulário de edição do dono do perfil.
8. **`login.html` (Autenticação e Contas):** Formulários de Login e Registro de Conta com validação de username único (`pattern="^[a-zA-Z0-9_]{3,20}$"`), e-mail e senha, criando sessão persistente no navegador.
9. **`comunidade.html` (Comunidade Bootstrap):** Página construída com classes utilitárias do **Bootstrap 5** (`alert`, `card`, `btn`, `form-control`, `badge`, `row/col`) para listas e tópicos dos usuários.
10. **`contato.html` (Contato & Equipe):** Formulário de contato oficial contendo rótulos (`<label>`) e campos `text`, `email`, `select`, `textarea` e `submit` com validações nativas (`required`, `minlength`, `pattern`, `placeholder`), além da apresentação da dupla.

---

## 6. MODELO DE DADOS COMPLETO (ENTIDADES E RELAÇÕES)

*(Complementação integral da especificação iniciada no documento Word do projeto)*

### ENTIDADE 1 — USUÁRIO (`USUARIO`)
| ATRIBUTO | DOMÍNIO | TIPO DE CHAVE | OBRIGATÓRIO | DESCRIÇÃO |
| :--- | :--- | :--- | :--- | :--- |
| `username` | `VARCHAR(20)` | **PK** | Sim | Nome de usuário único para identificação na plataforma |
| `email` | `VARCHAR(50)` | Unique | Sim | Endereço de e-mail para login e notificações da plataforma |
| `password_hash` | `VARCHAR(255)` | — | Sim | Senha criptografada (hash) para autenticação segura |
| `avatar_url` | `VARCHAR(255)` | — | Não | Caminho/URL da foto de avatar do perfil |
| `banner_url` | `VARCHAR(255)` | — | Não | Imagem ou gradiente de fundo do cabeçalho do perfil |
| `biografia` | `VARCHAR(500)` | — | Não | Texto biográfico do jogador com limite máximo de 500 caracteres |
| `plataforma_preferida` | `VARCHAR(40)` | — | Sim | Plataforma principal do jogador (ex: PC, PS5, Switch, Xbox) |
| `criado_em` | `DATETIME` | — | Sim | Data e hora de criação do registro da conta |

### ENTIDADE 2 — JOGO / CATÁLOGO (`JOGO`)
| ATRIBUTO | DOMÍNIO | TIPO DE CHAVE | OBRIGATÓRIO | DESCRIÇÃO |
| :--- | :--- | :--- | :--- | :--- |
| `id_jogo` | `VARCHAR(40)` | **PK** | Sim | Identificador único (slug ou ID externo da API IGDB/RAWG) |
| `titulo` | `VARCHAR(100)` | — | Sim | Título oficial do jogo |
| `ano_lancamento` | `INT(4)` | — | Sim | Ano de lançamento original |
| `genero` | `VARCHAR(60)` | — | Sim | Gênero principal (RPG, Ação, Indie, Metroidvania, etc.) |
| `plataformas` | `VARCHAR(120)` | — | Sim | Lista de plataformas compatíveis |
| `capa_url` | `VARCHAR(255)` | — | Sim | URL da arte de capa vertical (pôster) |
| `nota_media` | `DECIMAL(2,1)` | — | Sim | Nota média geral na plataforma (0.0 a 5.0) |

### ENTIDADE 3 — REGISTRO DO BACKLOG / DIÁRIO (`REGISTRO_BACKLOG`)
| ATRIBUTO | DOMÍNIO | TIPO DE CHAVE | OBRIGATÓRIO | DESCRIÇÃO |
| :--- | :--- | :--- | :--- | :--- |
| `id_registro` | `INT` | **PK** | Sim | Identificador único do item no diário/backlog |
| `username` | `VARCHAR(20)` | **FK** (`USUARIO`) | Sim | Usuário dono do registro no backlog |
| `id_jogo` | `VARCHAR(40)` | **FK** (`JOGO`) | Sim | Jogo vinculado ao registro |
| `estado_jogo` | `VARCHAR(25)` | — | Sim | Estado: *Jogando, Zerado, Quero Jogar, Pausado, Dropado, Quero Comprar* |
| `plataforma_jogada` | `VARCHAR(40)` | — | Sim | Plataforma em que o usuário jogou/zerou o título |
| `horas_jogadas` | `INT` | — | Não | Total de horas dedicadas ao jogo |
| `atualizado_em` | `DATE` | — | Sim | Data da última atualização de status |

### ENTIDADE 4 — ANÁLISE / REVIEW (`ANALISE`)
| ATRIBUTO | DOMÍNIO | TIPO DE CHAVE | OBRIGATÓRIO | DESCRIÇÃO |
| :--- | :--- | :--- | :--- | :--- |
| `id_analise` | `INT` | **PK** | Sim | Identificador único da análise publicada |
| `username` | `VARCHAR(20)` | **FK** (`USUARIO`) | Sim | Autor da resenha |
| `id_jogo` | `VARCHAR(40)` | **FK** (`JOGO`) | Sim | Jogo avaliado |
| `nota_estrelas` | `DECIMAL(2,1)` | — | Sim | Avaliação de 0 a 5 estrelas |
| `recomendacao` | `VARCHAR(25)` | — | Sim | Opção: *Recomendo*, *Não Recomendo* ou *Apenas em Promoção* |
| `texto_resenha` | `TEXT` | — | Sim | Crítica detalhada escrita pelo jogador |
| `data_publicacao` | `DATE` | — | Sim | Data de publicação da review |

---

## 7. APLICAÇÕES DE JAVASCRIPT NAS PÁGINAS DO SITE

O arquivo `js/script.js` implementa toda a interatividade do cliente sem dependência de bibliotecas externas, contemplando obrigatoriamente as **4 estruturas básicas de programação**:

1. **Estrutura Sequencial:** Declaração de constantes, leitura de valores de inputs de formulário (`.value`), conversão de strings JSON (`JSON.parse` e `JSON.stringify`) e atualização de elementos DOM (`.textContent` e `.innerHTML`).
2. **Estrutura Condicional (`if / else if / else`):**
   - Verificação da existência de dados iniciais no `localStorage` em `inicializarDadosPadrao()`.
   - Verificação de sessão ativa de login (`mygames_sessao_ativa`) para alterar o botão do cabeçalho.
   - Aplicação condicional das classes de cores de recomendação (`selo-recomendo`, `selo-promocao`, `selo-nao-recomendo`) e de status do jogo (`status-jogando`, `status-zerado`, etc.).
3. **Estrutura de Repetição (`for`):**
   - Varredura da lista de jogos para filtrar por busca textual, gênero e plataforma em `configurarPaginaExplorar()`.
   - Geração dinâmica das linhas `<tr>` da tabela de Backlog em `configurarPaginaBiblioteca()` e contagem de jogos zerados por plataforma em `configurarPaginaPerfil()`.
   - Construção das estrelas (`★`) proporcionalmente à nota atribuída pelo usuário.
4. **Estruturas de Dados (Vetores/Arrays e Objetos JSON):**
   - Manipulação de listas de objetos representando o catálogo (`CATALOGO_PADRAO`), itens do backlog (`BACKLOG_INICIAL`), lista de desejos (`DESEJOS_INICIAIS`), análises (`REVIEWS_INICIAIS`) e objeto de perfil (`mygames_perfil`) persistidos no `localStorage`.
