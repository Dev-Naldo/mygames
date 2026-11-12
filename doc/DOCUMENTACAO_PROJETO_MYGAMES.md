# DOCUMENTAÇÃO DO PROJETO FRONT-END WEB: MYGAMES — LOJA DIGITAL DE CHAVES OFICIAIS COM ATIVAÇÃO STEAM

**UNIVERSIDADE POSITIVO**  
**CURSO DE ENGENHARIA DE SOFTWARE**  
**DISCIPLINA:** DFEW.08 – Desenvolvimento Front-End para Web  
**Professor Orientador:** Fabricio Olivo (`fabricio@up.edu.br`)  
**Equipe (Autores):**  
- Reinaldo Celestino Da Silva Neto  
- Gustavo Moreira Borges Arantes  

---

## 1. TEMA ESCOLHIDO E OBJETIVOS DO SITE

O projeto **MyGames** é uma loja digital responsiva especializada na venda e distribuição oficial de chaves de ativação de jogos digitais para computador (*Steam Keys*), diretamente inspirada no modelo de negócios da plataforma brasileira **Nuuvem** e na estética escura da **Steam Store**.

Diferente de um cliente de download pesado, a proposta da **MyGames** é comercializar códigos oficiais de 15 dígitos verificados junto às distribuidoras: o usuário escolhe o jogo na loja, visualiza sua chave na aba **Minhas Compras** (`biblioteca.html`) e realiza a ativação diretamente na sua conta Steam.

### Objetivos Principais do Projeto:
- Construir um site responsivo composto por **10 páginas HTML navegáveis entre si** na pasta raiz e 100% funcionais em modo **offline** a partir do arquivo `index.html`.
- Apresentar a vitrine de promoções na **Loja** (`index.html`), categorias estruturadas com **CSS Grid Layout** em **Explorar** (`explorar.html`) e comparativo da crítica em uma **Tabela 4x4** na página **Análises** (`analises.html`).
- Exibir as chaves de ativação adquiridas (`ELDN-94KX-77PQ-2026` e `CYBR-2077-X89A-KEY1`) e conteúdos multimídia bônus (**Player de Vídeo Nativo** com o trailer oficial de *Elden Ring* e **Reprodutor de Áudio Nativo** com a trilha sonora original) na página **Minhas Compras** (`biblioteca.html`).
- Apresentar a página institucional **Sobre a MyGames** (`comunidade.html`) explicando quem somos, como funciona a ativação na Steam e os selos de garantia e segurança.
- Construir duas páginas completas utilizando exclusivamente **HTML5, CSS3 e JavaScript puros**, sem uso de frameworks: **Lista de Desejos** (`desejos.html`) e **Detalhes do Jogo** (`detalhes.html`).
- Implementar interatividade dinâmica no DOM e persistência local de dados no navegador utilizando `localStorage` para a Lista de Desejos, abertura de chamados de Suporte (`contato.html`) e sessão de Login (`login.html`).

---

## 2. FERRAMENTAS DE SUPORTE, LINGUAGENS E SITES DE REFERÊNCIA

### 2.1 Ferramentas Digitais e Recursos de Suporte (com Links)
- **Visual Studio Code (VS Code):** Ambiente de desenvolvimento utilizado para codificação, organização de pastas e padronização da indentação — https://code.visualstudio.com/
- **Git e GitHub Desktop:** Ferramentas empregadas para versionamento de código e publicação do repositório público no GitHub — https://desktop.github.com/ e https://github.com/
- **Bootstrap 5.3 (Armazenado Localmente):** Framework CSS/JS incluído localmente nos arquivos `css/bootstrap.min.css` e `js/bootstrap.bundle.min.js` para garantir funcionamento offline — https://getbootstrap.com/
- **MDN Web Docs (Mozilla) e W3Schools:** Documentações técnicas consultadas para semântica HTML5, Flexbox, Grid e Web Storage API — https://developer.mozilla.org/pt-BR/ e https://www.w3schools.com/

### 2.2 Linguagens Utilizadas
- **HTML5 Semântico:** Utilização das tags estruturais `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<video>`, `<audio>`, `<table>` e `<form>`.
- **CSS3:** Estilização por seletores de **TAG**, **CLASSE** e **IDENTIDADE (ID)** aplicada nos três níveis de escopo (em linha via atributo `style`, incorporado via tag `<style>` e externo em `css/style.css`), combinando CSS Grid, Flexbox, variáveis CSS e Media Queries.
- **JavaScript (ES6 Puro):** Manipulação de eventos e elementos do DOM, gravação e leitura em `localStorage` e aplicação das 4 estruturas básicas de programação.

### 2.3 Sites de Referência (Inspiração)
- **Nuuvem:** Principal referência brasileira de loja digital de chaves de jogos com ativação na Steam — https://www.nuuvem.com/
- **Steam Store:** Inspiração para a paleta de cores escura em tons de azul-petróleo e selos verdes de desconto — https://store.steampowered.com/

---

## 3. DIVISÃO DE TAREFAS E DIFICULDADES ENCONTRADAS

### 3.1 Divisão de Tarefas entre os Integrantes
- **Reinaldo Celestino Da Silva Neto:** Arquitetura da pasta raiz, marcação HTML5 semântica, desenvolvimento completo da folha de estilo `css/style.css`, construção das páginas puras sem Bootstrap (`desejos.html` e `detalhes.html`), configuração dos players de vídeo e áudio nativos e responsividade mobile/desktop.
- **Gustavo Moreira Borges Arantes:** Desenvolvimento da lógica em JavaScript puro (`js/script.js`) com manipulação do DOM e persistência em `localStorage`, implementação dos componentes utilitários do Bootstrap 5 nas demais páginas, validação dos formulários e redação da documentação acadêmica.

### 3.2 Dificuldades Encontradas no Desenvolvimento
- **Padronização do cabeçalho entre páginas com Bootstrap e páginas puras:** Nas páginas `desejos.html` e `detalhes.html` (que não utilizam Bootstrap por exigência do projeto), o cabeçalho apresentava inicialmente pequenas diferenças de espaçamento. O problema foi resolvido calibrando as classes `.pure-header`, `.pure-nav-container` e `.pure-nav a` no `style.css` com as mesmas medidas de largura máxima (`1320px`) e preenchimento das demais páginas.
- **Execução 100% Offline de Multimídia e Estilos:** Para evitar qualquer falha caso o computador de avaliação esteja sem internet, baixamos os arquivos do Bootstrap localmente e incluímos o trailer em vídeo (`video/trailer.mp4`), a trilha sonora (`audio/trilha.mp3`) e todas as imagens dentro das subpastas locais do projeto.

---

## 4. ESTUDO DE UX, UI, USABILIDADE, PALETA DE CORES E TIPOGRAFIA

### 4.1 Experiência do Usuário (UX) e Usabilidade
O projeto aplica as heurísticas de usabilidade mantendo consistência visual e estrutural em todas as 10 telas. A barra de navegação superior (Navbar) permanece na mesma posição em todas as páginas, destacando com fundo azul translúcido a página em que o usuário se encontra (classe `.active`). Nos formulários, o usuário recebe feedback visual imediato através das cores de borda nos estados `:hover`, `:focus`, `:valid` e `:invalid`.

### 4.2 Interface do Usuário (UI) e Escolha da Paleta de Cores
| Variável CSS | Código Hexadecimal | Aplicação na Interface |
| :--- | :--- | :--- |
| `--bg-main` | `#0f1419` | Fundo principal escuro de todas as páginas |
| `--bg-header` | `#171a21` | Cabeçalho de navegação (Navbar) e Rodapé |
| `--bg-card` | `#1b2838` | Superfície dos cartões de jogos, painéis e tabela de dados |
| `--bg-panel` | `#16202d` | Painéis internos de compra, áudio e cards da Lista de Desejos |
| `--accent-blue` | `#1a9fff` | Cor de destaque primária (botões, links externos e foco de inputs) |
| `--discount-green` / `--discount-text` | `#4c6b22` / `#a4d007` | Etiquetas de desconto percentual (-50%, -20%) e notas da crítica |
| Alerta de Erro / Sucesso | `#ef4444` / `#4c9a2a` | Validação visual dos campos de formulário (`:invalid` e `:valid`) |

### 4.3 Escolha da Tipografia
Foi definida a família tipográfica sem serifa `'Inter', 'Segoe UI', Roboto, Arial, sans-serif` no seletor `body`, garantindo leitura clara tanto em monitores desktop quanto em telas de smartphones, além de funcionar de forma nativa sem depender de carregamento externo.

---

## 5. MAPA DO SITE (SITEMAP) E AS 10 TELAS DESENVOLVIDAS

| Arquivo HTML | Nome no Menu | Descrição da Tela e Requisitos Atendidos |
| :--- | :--- | :--- |
| `index.html` | **Loja** | Página inicial com Hero Banner de *Elden Ring* (usando CSS inline e incorporado) e 3 colunas horizontais tipo cartão com imagem, título, texto, preço e botão estático. |
| `explorar.html` | **Explorar** | Galeria de 6 categorias de jogos construída com **CSS Grid Layout** (`.grid-gallery`). |
| `biblioteca.html` | **Minhas Compras** | Exibe as chaves de ativação Steam (*Steam Keys*) adquiridas pelo jogador, além do **Player de Vídeo Nativo** (`video/trailer.mp4`) e do **Reprodutor de Áudio Nativo** (`audio/trilha.mp3`). |
| `desejos.html` | **Lista de Desejos** | **1ª Página 100% Pura (HTML/CSS/JS sem Bootstrap):** Usa **CSS Flexbox** (`.flex-container`) e renderiza dinamicamente os jogos salvos no `localStorage`, permitindo removê-los. |
| `detalhes.html` | **Detalhes** | **2ª Página 100% Pura (HTML/CSS/JS sem Bootstrap):** Apresenta o banner, sinopse e caixa de preço da chave Steam com botão que adiciona o jogo ao `localStorage` da Lista de Desejos. |
| `analises.html` | **Análises** | Apresenta uma **Tabela de Dados 4x4** (4 colunas com títulos `<th>` por 4 linhas de jogos) comparando notas Metacritic, plataforma e gênero. |
| `comunidade.html` | **Sobre** | Página institucional explicando quem é a empresa MyGames, como funciona a ativação das chaves na Steam e os selos de garantia e segurança. |
| `perfil.html` | **Perfil** | Exibe o cartão de perfil do usuário (`Gustavo_CWB`, avatar, localização, nível na plataforma e contadores de jogos, platinas e horas). |
| `contato.html` | **Suporte** | Formulário de contato completo com `<label>` e campos `text`, `email`, `select`, `textarea` e `submit`, validações nativas (`required`, `minlength`, `pattern`, `placeholder`), estados `:hover`, `:focus`, `:invalid` e listagem de chamados salvos no `localStorage`. |
| `login.html` | **Entrar** | Tela de autenticação de conta com validação de usuário e senha e gravação da sessão ativa no `localStorage`. |

---

## 6. APLICAÇÕES DE JAVASCRIPT NAS PÁGINAS DO SITE

O script externo `js/script.js` foi programado em JavaScript puro, sem bibliotecas externas, manipulando o DOM por meio de eventos (`DOMContentLoaded`, `submit` e `click`) e cumprindo as **4 estruturas básicas de programação**:

1. **Estrutura Sequencial:** Declaração de constantes, leitura dos elementos de formulário com `document.getElementById().value`, conversão de dados com `JSON.parse()` e `JSON.stringify()` e atualização de elementos na tela com `.innerHTML` e `.textContent`.
2. **Estrutura Condicional (`if / else`):**
   - Na função `lerLista()`: verifica com operador condicional se já existem dados salvos no `localStorage` ou se deve usar a lista padrão.
   - No evento do formulário de Suporte (`contatoForm`): verifica se todos os campos foram preenchidos antes de salvar no `localStorage` e exibir o alerta verde de sucesso.
   - Na função `renderizarDesejos()`: verifica se a lista está vazia (`if (ids.length === 0)`) para mostrar mensagem orientando o usuário a visitar a Loja.
   - No formulário de Login (`loginForm`): verifica se o usuário possui ao menos 3 caracteres e a senha ao menos 6 caracteres.
3. **Estrutura de Repetição (`for`):**
   - Laço `for (let i = 0; i < salvos.length; i++)` para criar dinamicamente os itens `<li>` de chamados registrados na página de Suporte.
   - Laço `for (let i = 0; i < ids.length; i++)` para construir os cartões `<article class="flex-card">` na página Lista de Desejos.
   - Laço `for (let i = 0; i < botoesDesejo.length; i++)` para adicionar o ouvinte de clique nos botões `[data-desejo]`.
4. **Estruturas de Dados (Objetos e Vetores/Arrays):**
   - Objeto dicionário `catalogo` contendo os metadados de cada jogo (`cyberpunk`, `baldurs`, `forza`, `elden`).
   - Vetores (Arrays) armazenados em formato JSON nas chaves `listaContatos` e `listaDesejos` dentro do `localStorage`.
