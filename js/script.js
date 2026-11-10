/*
 * Projeto: MyGames - Backlog e Diário Gamer Brasileiro
 * Disciplina: DFEW.08 - Desenvolvimento Front-End para Web
 * Professor: Fabricio Olivo (Universidade Positivo)
 * Autores: Reinaldo Celestino Da Silva Neto e Gustavo Moreira Borges Arantes
 * Arquivo: js/script.js (Lógica Principal, Consumo de API Externa RAWG/CheapShark, Backlog, Wishlist, Análises e Perfil)
 */

const CATALOGO_PADRAO = [
    {
        id: "elden-ring",
        titulo: "Elden Ring",
        ano: 2022,
        genero: "RPG de Ação / Soulslike",
        plataformas: ["PC", "PlayStation 5", "Xbox Series X"],
        notaMedia: 4.9,
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg",
        sinopse: "Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
        desenvolvedora: "FromSoftware"
    },
    {
        id: "baldurs-gate-3",
        titulo: "Baldur's Gate 3",
        ano: 2023,
        genero: "RPG Tático",
        plataformas: ["PC", "PlayStation 5", "Xbox Series X"],
        notaMedia: 4.9,
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co670h.jpg",
        sinopse: "Reúna seu grupo e retorne aos Reinos Esquecidos em uma história de amizade, traição, sacrifício e sobrevivência.",
        desenvolvedora: "Larian Studios"
    },
    {
        id: "cyberpunk-2077",
        titulo: "Cyberpunk 2077",
        ano: 2020,
        genero: "RPG / Mundo Aberto",
        plataformas: ["PC", "PlayStation 5", "Xbox Series X"],
        notaMedia: 4.5,
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.jpg",
        sinopse: "Uma história de ação e aventura em mundo aberto ambientada em Night City, uma megalópole obcecada por poder e modificações corporais.",
        desenvolvedora: "CD Projekt RED"
    },
    {
        id: "hollow-knight",
        titulo: "Hollow Knight",
        ano: 2017,
        genero: "Metroidvania / Indie",
        plataformas: ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
        notaMedia: 4.8,
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rgi.jpg",
        sinopse: "Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis.",
        desenvolvedora: "Team Cherry"
    },
    {
        id: "the-witcher-3",
        titulo: "The Witcher 3: Wild Hunt",
        ano: 2015,
        genero: "RPG / Aventura",
        plataformas: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
        notaMedia: 4.9,
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
        sinopse: "Você é Geralt de Rívia, mercenário matador de monstros, em busca da Criança da Profecia em um continente devastado pela guerra.",
        desenvolvedora: "CD Projekt RED"
    },
    {
        id: "red-dead-redemption-2",
        titulo: "Red Dead Redemption 2",
        ano: 2018,
        genero: "Ação e Aventura",
        plataformas: ["PC", "PlayStation 4", "Xbox One"],
        notaMedia: 4.9,
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg",
        sinopse: "Arthur Morgan e a gangue Van der Linde são forçados a fugir enquanto agentes federais e caçadores de recompensas se aproximam.",
        desenvolvedora: "Rockstar Games"
    },
    {
        id: "god-of-war-ragnarok",
        titulo: "God of War Ragnarök",
        ano: 2022,
        genero: "Ação e Aventura",
        plataformas: ["PlayStation 5", "PlayStation 4", "PC"],
        notaMedia: 4.7,
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.jpg",
        sinopse: "Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para a batalha profetizada.",
        desenvolvedora: "Santa Monica Studio"
    },
    {
        id: "celeste",
        titulo: "Celeste",
        ano: 2018,
        genero: "Plataforma / Indie",
        plataformas: ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
        notaMedia: 4.8,
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3byy.jpg",
        sinopse: "Ajude Madeline a enfrentar seus demônios internos em sua jornada até o topo da Montanha Celeste neste jogo de plataforma superafiado.",
        desenvolvedora: "Maddy Makes Games"
    }
];

const BACKLOG_INICIAL = [
    {
        id: "elden-ring",
        titulo: "Elden Ring",
        plataforma: "PC",
        status: "Zerado",
        horas: 135,
        nota: 5.0,
        atualizadoEm: "05/11/2026"
    },
    {
        id: "baldurs-gate-3",
        titulo: "Baldur's Gate 3",
        plataforma: "PC",
        status: "Jogando",
        horas: 78,
        nota: 5.0,
        atualizadoEm: "08/11/2026"
    },
    {
        id: "cyberpunk-2077",
        titulo: "Cyberpunk 2077",
        plataforma: "PlayStation 5",
        status: "Quero Jogar",
        horas: 0,
        nota: 4.5,
        atualizadoEm: "02/11/2026"
    },
    {
        id: "hollow-knight",
        titulo: "Hollow Knight",
        plataforma: "Nintendo Switch",
        status: "Zerado",
        horas: 62,
        nota: 4.9,
        atualizadoEm: "20/10/2026"
    },
    {
        id: "red-dead-redemption-2",
        titulo: "Red Dead Redemption 2",
        plataforma: "PlayStation 4",
        status: "Pausado",
        horas: 41,
        nota: 4.8,
        atualizadoEm: "14/10/2026"
    }
];

const DESEJOS_INICIAIS = [
    {
        titulo: "God of War Ragnarök",
        plataforma: "PC",
        prioridade: "Alta",
        condicaoCompra: "Apenas em Promoção",
        precoAlvo: "R$ 149,90",
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.jpg"
    },
    {
        titulo: "Cyberpunk 2077: Phantom Liberty",
        plataforma: "PlayStation 5",
        prioridade: "Média",
        condicaoCompra: "Apenas em Promoção",
        precoAlvo: "R$ 99,90",
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.jpg"
    },
    {
        titulo: "Celeste",
        plataforma: "Nintendo Switch",
        prioridade: "Alta",
        condicaoCompra: "Recomendo Preço Cheio",
        precoAlvo: "R$ 36,99",
        capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3byy.jpg"
    }
];

const REVIEWS_INICIAIS = [
    {
        jogo: "Elden Ring",
        usuario: "reinaldo_neto",
        nota: 5,
        recomendacao: "Recomendo",
        plataforma: "PC",
        texto: "Direção de arte impecável e exploração recompensadora do começo ao fim. Um marco na história dos RPGs de ação.",
        data: "07/11/2026"
    },
    {
        jogo: "Baldur's Gate 3",
        usuario: "gustavo_arantes",
        nota: 5,
        recomendacao: "Recomendo",
        plataforma: "PlayStation 5",
        texto: "Liberdade absurda nas escolhas e personagens memoráveis. Cada campanha parece um jogo completamente diferente.",
        data: "06/11/2026"
    },
    {
        jogo: "Cyberpunk 2077",
        usuario: "reinaldo_neto",
        nota: 4,
        recomendacao: "Apenas em Promoção",
        plataforma: "PC",
        texto: "Após a atualização 2.0 e a expansão Phantom Liberty, Night City finalmente entregou a imersão prometida.",
        data: "01/11/2026"
    }
];

function obterClasseStatus(status) {
    const s = (status || "").toLowerCase();
    if (s.indexOf("jogando") !== -1) return "status-jogando";
    if (s.indexOf("zerado") !== -1) return "status-zerado";
    if (s.indexOf("quero jogar") !== -1 || s.indexOf("pretendo") !== -1) return "status-quero-jogar";
    if (s.indexOf("pausado") !== -1) return "status-pausado";
    if (s.indexOf("dropado") !== -1) return "status-dropado";
    return "status-quero-comprar";
}

function inicializarDadosPadrao() {
    if (!localStorage.getItem("mygames_catalogo")) {
        localStorage.setItem("mygames_catalogo", JSON.stringify(CATALOGO_PADRAO));
    }
    if (!localStorage.getItem("mygames_backlog")) {
        localStorage.setItem("mygames_backlog", JSON.stringify(BACKLOG_INICIAL));
    }
    if (!localStorage.getItem("mygames_desejos")) {
        localStorage.setItem("mygames_desejos", JSON.stringify(DESEJOS_INICIAIS));
    }
    if (!localStorage.getItem("mygames_reviews")) {
        localStorage.setItem("mygames_reviews", JSON.stringify(REVIEWS_INICIAIS));
    }
    if (!localStorage.getItem("mygames_perfil")) {
        const perfilInicial = {
            username: "reinaldo_neto",
            nomeExibicao: "Reinaldo Neto & Gustavo Arantes",
            email: "reinaldo.neto@up.edu.br",
            bio: "Estudantes de Desenvolvimento Front-End na Universidade Positivo. Apaixonados por RPGs, Soulslike e jogos indie. Organizando nosso backlog de 2026!",
            plataformaPreferida: "PC & PlayStation 5",
            avatarUrl: "img/Gemini_Generated_Image_ndhiqlndhiqlndhi.jpeg",
            favoritos: ["Elden Ring", "Baldur's Gate 3", "The Witcher 3: Wild Hunt", "Hollow Knight"],
            top5Ano: ["Baldur's Gate 3", "Elden Ring", "God of War Ragnarök", "Cyberpunk 2077", "Celeste"]
        };
        localStorage.setItem("mygames_perfil", JSON.stringify(perfilInicial));
    }
}

function configurarMenuMobile() {
    const botaoMenu = document.getElementById("btnMenuMobile");
    const menuNav = document.getElementById("menuPrincipal");
    if (botaoMenu && menuNav) {
        botaoMenu.addEventListener("click", function () {
            menuNav.classList.toggle("aberto");
        });
    }
}

function atualizarCabecalhoSessao() {
    const linkSessao = document.getElementById("linkSessaoUsuario");
    const usuarioLogado = localStorage.getItem("mygames_sessao_ativa");
    if (linkSessao) {
        if (usuarioLogado) {
            linkSessao.textContent = "@" + usuarioLogado;
            linkSessao.setAttribute("href", "perfil.html");
        } else {
            linkSessao.textContent = "Entrar / Conta";
            linkSessao.setAttribute("href", "login.html");
        }
    }
}

function atualizarEstatisticasHome() {
    const elTotalZerados = document.getElementById("statTotalZerados");
    const elTotalBacklog = document.getElementById("statTotalBacklog");
    const elTotalReviews = document.getElementById("statTotalReviews");

    if (!elTotalZerados || !elTotalBacklog || !elTotalReviews) {
        return;
    }

    const backlog = JSON.parse(localStorage.getItem("mygames_backlog")) || [];
    const reviews = JSON.parse(localStorage.getItem("mygames_reviews")) || [];

    let contadorZerados = 0;
    for (let i = 0; i < backlog.length; i++) {
        if (backlog[i].status === "Zerado") {
            contadorZerados++;
        }
    }

    elTotalZerados.textContent = contadorZerados;
    elTotalBacklog.textContent = backlog.length;
    elTotalReviews.textContent = reviews.length;
}

function criarHtmlReviewCard(item) {
    let classeSelo = "selo-recomendo";
    if (item.recomendacao === "Apenas em Promoção") {
        classeSelo = "selo-promocao";
    } else if (item.recomendacao === "Não Recomendo") {
        classeSelo = "selo-nao-recomendo";
    }

    let estrelasTexto = "";
    const notaInt = Number(item.nota) || 5;
    for (let s = 0; s < notaInt; s++) {
        estrelasTexto += "★";
    }

    const inicial = item.usuario ? item.usuario.charAt(0).toUpperCase() : "U";
    return `
        <div class="review-header">
            <div class="review-user">
                <div class="avatar-circle">${inicial}</div>
                <div>
                    <h4>${item.jogo}</h4>
                    <span style="font-size: 0.78rem; color: #9ab;">por @${item.usuario} • ${item.plataforma}</span>
                </div>
            </div>
            <span class="selo-recomendacao ${classeSelo}">${item.recomendacao}</span>
        </div>
        <p style="color: #cbd5e1; font-size: 0.9rem;">"${item.texto}"</p>
        <div class="card-meta">
            <span class="rating">${estrelasTexto} (${notaInt}/5)</span>
            <span style="font-size: 0.76rem; color: #678;">${item.data}</span>
        </div>
    `;
}

function renderizarReviewsRecentesHome() {
    const container = document.getElementById("reviewsRecentesHome");
    if (!container) {
        return;
    }

    const reviews = JSON.parse(localStorage.getItem("mygames_reviews")) || [];
    container.innerHTML = "";

    const limite = reviews.length > 3 ? 3 : reviews.length;
    for (let i = 0; i < limite; i++) {
        const card = document.createElement("article");
        card.className = "review-card";
        card.innerHTML = criarHtmlReviewCard(reviews[i]);
        container.appendChild(card);
    }
}

function configurarPaginaExplorar() {
    const gridCatalogo = document.getElementById("gridCatalogoExplorar");
    const inputBusca = document.getElementById("inputBuscaCatalogo");
    const selectGenero = document.getElementById("selectFiltroGenero");
    const selectPlataforma = document.getElementById("selectFiltroPlataforma");
    const btnBuscarApiReal = document.getElementById("btnBuscarApiReal");
    const inputPesquisaApiReal = document.getElementById("inputPesquisaApiReal");
    const inputRawgApiKey = document.getElementById("inputRawgApiKey");
    const statusBuscaApi = document.getElementById("statusBuscaApi");
    const resultadosApiExterna = document.getElementById("resultadosApiExterna");

    if (!gridCatalogo) {
        return;
    }

    function desenharCatalogo() {
        const catalogo = JSON.parse(localStorage.getItem("mygames_catalogo")) || CATALOGO_PADRAO;
        const termo = inputBusca ? inputBusca.value.toLowerCase().trim() : "";
        const genero = selectGenero ? selectGenero.value : "Todos";
        const plataforma = selectPlataforma ? selectPlataforma.value : "Todas";

        gridCatalogo.innerHTML = "";
        let encontrados = 0;

        for (let i = 0; i < catalogo.length; i++) {
            const jogo = catalogo[i];
            const bateNome = jogo.titulo.toLowerCase().indexOf(termo) !== -1;
            const bateGenero = genero === "Todos" || jogo.genero.toLowerCase().indexOf(genero.toLowerCase()) !== -1;
            const batePlataforma = plataforma === "Todas" || jogo.plataformas.join(", ").indexOf(plataforma) !== -1;

            if (bateNome && bateGenero && batePlataforma) {
                encontrados++;
                const card = document.createElement("article");
                card.className = "game-card";
                card.innerHTML = `
                    <div class="card-cover">
                        <span class="card-badge">${jogo.ano}</span>
                        <img src="${jogo.capa}" alt="${jogo.titulo}">
                    </div>
                    <div class="card-info">
                        <div>
                            <h3>${jogo.titulo}</h3>
                            <p>${jogo.genero} • ${jogo.desenvolvedora}</p>
                        </div>
                        <div>
                            <div class="card-meta" style="margin-bottom: 8px;">
                                <span class="rating">★ ${jogo.notaMedia}</span>
                                <a href="detalhes.html?jogo=${jogo.id}" class="card-link">Detalhes</a>
                            </div>
                            <div style="display: flex; gap: 6px;">
                                <button type="button" class="aba-btn" style="flex:1; padding: 5px; font-size: 0.72rem;" onclick="adicionarRapidoBacklog('${jogo.titulo.replace(/'/g, "")}', 'Quero Jogar')">+ Backlog</button>
                                <button type="button" class="aba-btn" style="flex:1; padding: 5px; font-size: 0.72rem;" onclick="adicionarRapidoDesejos('${jogo.titulo.replace(/'/g, "")}', '${jogo.capa}')">+ Desejos</button>
                            </div>
                        </div>
                    </div>
                `;
                gridCatalogo.appendChild(card);
            }
        }

        if (encontrados === 0) {
            gridCatalogo.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 32px; color:#9ab;">Nenhum jogo encontrado no catálogo local. Use a busca da API acima para importar qualquer jogo!</p>`;
        }
    }

    if (inputBusca) inputBusca.addEventListener("input", desenharCatalogo);
    if (selectGenero) selectGenero.addEventListener("change", desenharCatalogo);
    if (selectPlataforma) selectPlataforma.addEventListener("change", desenharCatalogo);

    if (btnBuscarApiReal && inputPesquisaApiReal) {
        btnBuscarApiReal.addEventListener("click", async function () {
            const termoApi = inputPesquisaApiReal.value.trim();
            const rawgKey = inputRawgApiKey ? inputRawgApiKey.value.trim() : "";

            if (!termoApi) {
                alert("Digite o nome de um jogo para pesquisar na API online!");
                return;
            }

            if (statusBuscaApi) {
                statusBuscaApi.style.display = "block";
                statusBuscaApi.textContent = "⏳ Consultando API externa em tempo real para '" + termoApi + "'...";
            }

            try {
                let jogosRetornados = [];

                if (rawgKey.length > 5) {
                    const respRawg = await fetch("https://api.rawg.io/api/games?key=" + encodeURIComponent(rawgKey) + "&search=" + encodeURIComponent(termoApi) + "&page_size=6");
                    const dadosRawg = await respRawg.json();
                    if (dadosRawg && dadosRawg.results) {
                        for (let r = 0; r < dadosRawg.results.length; r++) {
                            const item = dadosRawg.results[r];
                            jogosRetornados.push({
                                titulo: item.name,
                                capa: item.background_image || "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg",
                                nota: item.rating || 4.6,
                                ano: item.released ? item.released.substring(0, 4) : 2024,
                                preco: "Via RAWG API"
                            });
                        }
                    }
                } else {
                    const respPublica = await fetch("https://www.cheapshark.com/api/1.0/games?title=" + encodeURIComponent(termoApi) + "&limit=6");
                    const dadosPublicos = await respPublica.json();
                    if (Array.isArray(dadosPublicos)) {
                        for (let p = 0; p < dadosPublicos.length; p++) {
                            const g = dadosPublicos[p];
                            let capaAltaRes = g.thumb;
                            if (g.steamAppID) {
                                capaAltaRes = "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/" + g.steamAppID + "/library_600x900.jpg";
                            }
                            jogosRetornados.push({
                                titulo: g.external,
                                capa: capaAltaRes,
                                nota: 4.7,
                                ano: 2024,
                                preco: "US$ " + g.cheapest
                            });
                        }
                    }
                }

                resultadosApiExterna.innerHTML = "";
                resultadosApiExterna.style.display = "grid";

                if (jogosRetornados.length === 0) {
                    statusBuscaApi.textContent = "Nenhum resultado encontrado na API externa para '" + termoApi + "'.";
                    return;
                }

                statusBuscaApi.textContent = "✓ Foram encontrados " + jogosRetornados.length + " jogos na API Externa! Clique em Importar para salvar no seu Catálogo/Backlog:";

                for (let j = 0; j < jogosRetornados.length; j++) {
                    const jogoApi = jogosRetornados[j];
                    const tituloLimpo = jogoApi.titulo.replace(/'/g, "").replace(/"/g, "");
                    const cardApi = document.createElement("article");
                    cardApi.className = "game-card";
                    cardApi.innerHTML = `
                        <div class="card-cover">
                            <span class="card-badge">API Online</span>
                            <img src="${jogoApi.capa}" alt="${tituloLimpo}" onerror="this.src='https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg'">
                        </div>
                        <div class="card-info">
                            <div>
                                <h3>${jogoApi.titulo}</h3>
                                <p>Metadados Externos • ${jogoApi.preco}</p>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 6px;">
                                <button type="button" class="card-link" style="width:100%; text-align:center; padding: 6px;" onclick="importarJogoDaApi('${tituloLimpo}', '${jogoApi.capa}', ${jogoApi.ano})">📥 Importar p/ Catálogo &amp; Backlog</button>
                                <button type="button" class="aba-btn" style="width:100%; padding: 5px; font-size:0.72rem;" onclick="adicionarRapidoDesejos('${tituloLimpo}', '${jogoApi.capa}')">+ Lista de Desejos</button>
                            </div>
                        </div>
                    `;
                    resultadosApiExterna.appendChild(cardApi);
                }
            } catch (erro) {
                if (statusBuscaApi) {
                    statusBuscaApi.textContent = "Modo Offline Ativo: Adicionando '" + termoApi + "' diretamente ao catálogo local.";
                }
                window.importarJogoDaApi(termoApi, "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg", 2025);
            }
        });
    }

    window.importarJogoDaApi = function (titulo, capa, ano) {
        const catalogo = JSON.parse(localStorage.getItem("mygames_catalogo")) || [];
        const idGerado = titulo.toLowerCase().replace(/[^a-z0-9]+/g, "-");

        catalogo.unshift({
            id: idGerado,
            titulo: titulo,
            ano: ano || 2024,
            genero: "Importado via API",
            plataformas: ["PC", "PlayStation 5", "Xbox Series X"],
            notaMedia: 4.8,
            capa: capa,
            sinopse: "Jogo importado automaticamente através da integração com API Pública de metadados.",
            desenvolvedora: "API Global Database"
        });
        localStorage.setItem("mygames_catalogo", JSON.stringify(catalogo));
        window.adicionarRapidoBacklog(titulo, "Jogando");
        desenharCatalogo();
    };

    desenharCatalogo();
}

window.adicionarRapidoBacklog = function (tituloJogo, statusPadrao) {
    const backlog = JSON.parse(localStorage.getItem("mygames_backlog")) || [];
    const novoItem = {
        id: tituloJogo.toLowerCase().replace(/\s+/g, "-"),
        titulo: tituloJogo,
        plataforma: "PC",
        status: statusPadrao || "Quero Jogar",
        horas: 10,
        nota: 4.8,
        atualizadoEm: new Date().toLocaleDateString("pt-BR")
    };
    backlog.unshift(novoItem);
    localStorage.setItem("mygames_backlog", JSON.stringify(backlog));
    alert("Jogo '" + tituloJogo + "' salvo no seu Backlog com status: " + novoItem.status + "!");
};

window.adicionarRapidoDesejos = function (tituloJogo, capaUrl) {
    const desejos = JSON.parse(localStorage.getItem("mygames_desejos")) || [];
    desejos.unshift({
        titulo: tituloJogo,
        plataforma: "PC / Console",
        prioridade: "Alta",
        condicaoCompra: "Apenas em Promoção",
        precoAlvo: "R$ 99,90",
        capa: capaUrl || "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg"
    });
    localStorage.setItem("mygames_desejos", JSON.stringify(desejos));
    alert("Jogo '" + tituloJogo + "' adicionado à sua Lista de Desejos!");
};

function configurarPaginaDetalhes() {
    const elTitulo = document.getElementById("detalheTituloJogo");
    if (!elTitulo) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const idJogo = params.get("jogo") || "elden-ring";
    const catalogo = JSON.parse(localStorage.getItem("mygames_catalogo")) || CATALOGO_PADRAO;

    let jogoSelecionado = catalogo[0];
    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].id === idJogo) {
            jogoSelecionado = catalogo[i];
            break;
        }
    }

    elTitulo.textContent = jogoSelecionado.titulo;
    const elCapa = document.getElementById("detalheCapaJogo");
    const elSinopse = document.getElementById("detalheSinopseJogo");
    const elMeta = document.getElementById("detalheMetaJogo");
    const elNota = document.getElementById("detalheNotaJogo");

    if (elCapa) elCapa.setAttribute("src", jogoSelecionado.capa);
    if (elSinopse) elSinopse.textContent = jogoSelecionado.sinopse;
    if (elMeta) elMeta.textContent = jogoSelecionado.ano + " • " + jogoSelecionado.desenvolvedora + " • " + jogoSelecionado.genero + " (" + jogoSelecionado.plataformas.join(", ") + ")";
    if (elNota) elNota.textContent = "★ " + jogoSelecionado.notaMedia + " / 5.0";
}

function configurarPaginaBiblioteca() {
    const corpoTabela = document.getElementById("corpoTabelaJogos");
    const formBacklog = document.getElementById("formAdicionarBacklog");
    const botoesAbas = document.querySelectorAll(".aba-filtro-status");

    if (!corpoTabela) {
        return;
    }

    let filtroAtual = "Todos";

    function renderizarTabela() {
        const backlog = JSON.parse(localStorage.getItem("mygames_backlog")) || [];
        corpoTabela.innerHTML = "";

        let exibidos = 0;
        for (let i = 0; i < backlog.length; i++) {
            const item = backlog[i];
            if (filtroAtual === "Todos" || item.status === filtroAtual) {
                exibidos++;
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong>${item.titulo}</strong></td>
                    <td>${item.plataforma}</td>
                    <td><span class="status-pill ${obterClasseStatus(item.status)}">${item.status}</span></td>
                    <td>${item.horas}h</td>
                    <td><span class="rating">★ ${item.nota}</span></td>
                    <td>
                        <button type="button" class="aba-btn" style="padding: 4px 8px; font-size:0.72rem;" onclick="removerItemBacklog(${i})">Remover</button>
                    </td>
                `;
                corpoTabela.appendChild(tr);
            }
        }

        if (exibidos === 0) {
            corpoTabela.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#9ab;">Nenhum jogo registrado neste estado ainda.</td></tr>`;
        }
    }

    window.removerItemBacklog = function (indice) {
        const backlog = JSON.parse(localStorage.getItem("mygames_backlog")) || [];
        backlog.splice(indice, 1);
        localStorage.setItem("mygames_backlog", JSON.stringify(backlog));
        renderizarTabela();
    };

    for (let b = 0; b < botoesAbas.length; b++) {
        botoesAbas[b].addEventListener("click", function () {
            for (let k = 0; k < botoesAbas.length; k++) {
                botoesAbas[k].classList.remove("ativa");
            }
            this.classList.add("ativa");
            filtroAtual = this.getAttribute("data-status");
            renderizarTabela();
        });
    }

    if (formBacklog) {
        formBacklog.addEventListener("submit", function (evento) {
            evento.preventDefault();
            const titulo = document.getElementById("inputJogoBacklog").value;
            const plataforma = document.getElementById("selectPlataformaBacklog").value;
            const status = document.getElementById("selectStatusBacklog").value;
            const horas = Number(document.getElementById("inputHorasBacklog").value) || 0;
            const nota = Number(document.getElementById("inputNotaBacklog").value) || 5;

            const backlog = JSON.parse(localStorage.getItem("mygames_backlog")) || [];
            backlog.unshift({
                id: titulo.toLowerCase().replace(/\s+/g, "-"),
                titulo: titulo,
                plataforma: plataforma,
                status: status,
                horas: horas,
                nota: nota,
                atualizadoEm: new Date().toLocaleDateString("pt-BR")
            });
            localStorage.setItem("mygames_backlog", JSON.stringify(backlog));
            formBacklog.reset();
            renderizarTabela();
        });
    }

    renderizarTabela();
}

function configurarPaginaDesejos() {
    const gridDesejos = document.getElementById("gridListaDesejos");
    const formDesejo = document.getElementById("formAdicionarDesejo");

    if (!gridDesejos) {
        return;
    }

    function renderizarDesejos() {
        const desejos = JSON.parse(localStorage.getItem("mygames_desejos")) || [];
        gridDesejos.innerHTML = "";

        for (let i = 0; i < desejos.length; i++) {
            const item = desejos[i];
            const classeSelo = item.condicaoCompra === "Apenas em Promoção" ? "selo-promocao" : "selo-recomendo";
            const card = document.createElement("article");
            card.className = "game-card";
            card.innerHTML = `
                <div class="card-cover">
                    <span class="card-badge">Prioridade ${item.prioridade}</span>
                    <img src="${item.capa}" alt="${item.titulo}">
                </div>
                <div class="card-info">
                    <div>
                        <h3>${item.titulo}</h3>
                        <p>${item.plataforma} • Alvo: <strong>${item.precoAlvo}</strong></p>
                    </div>
                    <div>
                        <span class="selo-recomendacao ${classeSelo}" style="display:inline-block; margin-bottom:10px;">${item.condicaoCompra}</span>
                        <div class="card-meta">
                            <button type="button" class="card-link" onclick="moverDesejoParaBacklog(${i})">Comprei! Mover p/ Backlog</button>
                        </div>
                    </div>
                </div>
            `;
            gridDesejos.appendChild(card);
        }
    }

    window.moverDesejoParaBacklog = function (indice) {
        const desejos = JSON.parse(localStorage.getItem("mygames_desejos")) || [];
        const comprado = desejos.splice(indice, 1)[0];
        localStorage.setItem("mygames_desejos", JSON.stringify(desejos));

        if (comprado) {
            window.adicionarRapidoBacklog(comprado.titulo, "Jogando");
        }
        renderizarDesejos();
    };

    if (formDesejo) {
        formDesejo.addEventListener("submit", function (e) {
            e.preventDefault();
            const titulo = document.getElementById("tituloDesejo").value;
            const plataforma = document.getElementById("plataformaDesejo").value;
            const prioridade = document.getElementById("prioridadeDesejo").value;
            const condicao = document.getElementById("condicaoDesejo").value;
            const preco = document.getElementById("precoDesejo").value;

            const desejos = JSON.parse(localStorage.getItem("mygames_desejos")) || [];
            desejos.unshift({
                titulo: titulo,
                plataforma: plataforma,
                prioridade: prioridade,
                condicaoCompra: condicao,
                precoAlvo: preco,
                capa: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg"
            });
            localStorage.setItem("mygames_desejos", JSON.stringify(desejos));
            formDesejo.reset();
            renderizarDesejos();
        });
    }

    renderizarDesejos();
}

function configurarPaginaAnalises() {
    const muralReviews = document.getElementById("muralTodasAnalises");
    const formAnalise = document.getElementById("formPublicarAnalise");

    if (!muralReviews) {
        return;
    }

    function desenharMural() {
        const reviews = JSON.parse(localStorage.getItem("mygames_reviews")) || [];
        muralReviews.innerHTML = "";
        for (let i = 0; i < reviews.length; i++) {
            const card = document.createElement("article");
            card.className = "review-card";
            card.innerHTML = criarHtmlReviewCard(reviews[i]);
            muralReviews.appendChild(card);
        }
    }

    if (formAnalise) {
        formAnalise.addEventListener("submit", function (e) {
            e.preventDefault();
            const jogo = document.getElementById("analiseNomeJogo").value;
            const usuario = document.getElementById("analiseUsuario").value;
            const plataforma = document.getElementById("analisePlataforma").value;
            const nota = Number(document.getElementById("analiseNota").value);
            const recomendacao = document.getElementById("analiseRecomendacao").value;
            const texto = document.getElementById("analiseTexto").value;

            const reviews = JSON.parse(localStorage.getItem("mygames_reviews")) || [];
            reviews.unshift({
                jogo: jogo,
                usuario: usuario,
                plataforma: plataforma,
                nota: nota,
                recomendacao: recomendacao,
                texto: texto,
                data: new Date().toLocaleDateString("pt-BR")
            });
            localStorage.setItem("mygames_reviews", JSON.stringify(reviews));
            formAnalise.reset();
            desenharMural();
            alert("Análise publicada com sucesso no mural!");
        });
    }

    desenharMural();
}

function configurarPaginaPerfil() {
    const elUsername = document.getElementById("perfilUsername");
    if (!elUsername) {
        return;
    }

    function encontrarCapaDoJogo(titulo) {
        const catalogo = JSON.parse(localStorage.getItem("mygames_catalogo")) || CATALOGO_PADRAO;
        for (let i = 0; i < catalogo.length; i++) {
            if (catalogo[i].titulo.toLowerCase().indexOf(titulo.toLowerCase()) !== -1) {
                return catalogo[i].capa;
            }
        }
        return "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg";
    }

    function carregarPerfilNaTela() {
        const perfil = JSON.parse(localStorage.getItem("mygames_perfil")) || {};
        const backlog = JSON.parse(localStorage.getItem("mygames_backlog")) || [];
        const reviews = JSON.parse(localStorage.getItem("mygames_reviews")) || [];

        elUsername.textContent = "@" + (perfil.username || "reinaldo_neto");
        const elBio = document.getElementById("perfilBio");
        const elPlat = document.getElementById("perfilPlataformaPref");
        if (elBio) elBio.textContent = perfil.bio || "";
        if (elPlat) elPlat.textContent = "🎮 Plataforma Preferida: " + (perfil.plataformaPreferida || "PC & PlayStation 5");

        const gridFavs = document.getElementById("gridFavoritosPerfil");
        if (gridFavs && perfil.favoritos) {
            gridFavs.innerHTML = "";
            for (let f = 0; f < perfil.favoritos.length; f++) {
                const nomeFav = perfil.favoritos[f].trim();
                const capaFav = encontrarCapaDoJogo(nomeFav);
                const art = document.createElement("article");
                art.className = "game-card";
                art.innerHTML = `
                    <div class="card-cover">
                        <span class="card-badge">Favorito #${f + 1}</span>
                        <img src="${capaFav}" alt="${nomeFav}">
                    </div>
                    <div class="card-info">
                        <h3>${nomeFav}</h3>
                        <span class="rating">★ 5.0</span>
                    </div>
                `;
                gridFavs.appendChild(art);
            }
        }

        const corpoBacklogPerfil = document.getElementById("corpoBacklogNoPerfil");
        if (corpoBacklogPerfil) {
            corpoBacklogPerfil.innerHTML = "";
            for (let b = 0; b < backlog.length; b++) {
                const itemB = backlog[b];
                const trB = document.createElement("tr");
                trB.innerHTML = `
                    <td><strong>${itemB.titulo}</strong></td>
                    <td>${itemB.plataforma}</td>
                    <td><span class="status-pill ${obterClasseStatus(itemB.status)}">${itemB.status}</span></td>
                    <td>${itemB.horas}h</td>
                    <td><span class="rating">★ ${itemB.nota}</span></td>
                `;
                corpoBacklogPerfil.appendChild(trB);
            }
        }

        const gridReviewsPerfil = document.getElementById("gridReviewsDoPerfil");
        if (gridReviewsPerfil) {
            gridReviewsPerfil.innerHTML = "";
            for (let r = 0; r < reviews.length; r++) {
                const cardR = document.createElement("article");
                cardR.className = "review-card";
                cardR.innerHTML = criarHtmlReviewCard(reviews[r]);
                gridReviewsPerfil.appendChild(cardR);
            }
        }

        const listaTop5 = document.getElementById("listaTop5Ano");
        if (listaTop5 && perfil.top5Ano) {
            listaTop5.innerHTML = "";
            for (let i = 0; i < perfil.top5Ano.length; i++) {
                const li = document.createElement("li");
                li.style.padding = "10px 14px";
                li.style.backgroundColor = "#14181c";
                li.style.borderRadius = "4px";
                li.style.borderLeft = "3px solid #ea377a";
                li.style.marginBottom = "8px";
                li.innerHTML = `<strong>#${i + 1}</strong> — ${perfil.top5Ano[i]}`;
                listaTop5.appendChild(li);
            }
        }

        const tbodyPlataformas = document.getElementById("corpoZeradosPlataforma");
        if (tbodyPlataformas) {
            const contagem = { "PC": 0, "PlayStation 5": 0, "Nintendo Switch": 0, "Xbox Series X / PS4": 0 };
            for (let j = 0; j < backlog.length; j++) {
                if (backlog[j].status === "Zerado") {
                    const p = backlog[j].plataforma;
                    if (contagem[p] !== undefined) {
                        contagem[p]++;
                    } else {
                        contagem["Xbox Series X / PS4"]++;
                    }
                }
            }
            tbodyPlataformas.innerHTML = "";
            const chaves = Object.keys(contagem);
            for (let c = 0; c < chaves.length; c++) {
                const plat = chaves[c];
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${plat}</td><td><strong>${contagem[plat]} jogo(s) zerado(s)</strong></td>`;
                tbodyPlataformas.appendChild(tr);
            }
        }
    }

    const formPerfilBacklog = document.getElementById("formPerfilAddBacklog");
    if (formPerfilBacklog) {
        formPerfilBacklog.addEventListener("submit", function (e) {
            e.preventDefault();
            const nome = document.getElementById("perfilJogoNome").value;
            const status = document.getElementById("perfilJogoStatus").value;
            const plat = document.getElementById("perfilJogoPlataforma").value;
            const horas = Number(document.getElementById("perfilJogoHoras").value) || 0;
            const nota = Number(document.getElementById("perfilJogoNota").value) || 5;

            const backlog = JSON.parse(localStorage.getItem("mygames_backlog")) || [];
            backlog.unshift({
                id: nome.toLowerCase().replace(/\s+/g, "-"),
                titulo: nome,
                plataforma: plat,
                status: status,
                horas: horas,
                nota: nota,
                atualizadoEm: new Date().toLocaleDateString("pt-BR")
            });
            localStorage.setItem("mygames_backlog", JSON.stringify(backlog));
            formPerfilBacklog.reset();
            carregarPerfilNaTela();
            alert("Jogo adicionado ao Backlog do seu Perfil!");
        });
    }

    const formPerfilReview = document.getElementById("formPerfilAddReview");
    if (formPerfilReview) {
        formPerfilReview.addEventListener("submit", function (e) {
            e.preventDefault();
            const perfil = JSON.parse(localStorage.getItem("mygames_perfil")) || {};
            const jogo = document.getElementById("perfilReviewJogo").value;
            const nota = Number(document.getElementById("perfilReviewNota").value);
            const veredito = document.getElementById("perfilReviewVeredito").value;
            const texto = document.getElementById("perfilReviewTexto").value;

            const reviews = JSON.parse(localStorage.getItem("mygames_reviews")) || [];
            reviews.unshift({
                jogo: jogo,
                usuario: perfil.username || "reinaldo_neto",
                plataforma: perfil.plataformaPreferida || "PC",
                nota: nota,
                recomendacao: veredito,
                texto: texto,
                data: new Date().toLocaleDateString("pt-BR")
            });
            localStorage.setItem("mygames_reviews", JSON.stringify(reviews));
            formPerfilReview.reset();
            carregarPerfilNaTela();
            alert("Sua resenha foi publicada e já está visível no seu Perfil!");
        });
    }

    const formPerfil = document.getElementById("formEditarPerfil");
    if (formPerfil) {
        formPerfil.addEventListener("submit", function (e) {
            e.preventDefault();
            const perfil = JSON.parse(localStorage.getItem("mygames_perfil")) || {};
            perfil.username = document.getElementById("inputPerfilUsername").value;
            perfil.plataformaPreferida = document.getElementById("inputPerfilPlataforma").value;
            perfil.bio = document.getElementById("inputPerfilBio").value;

            const favsInput = document.getElementById("inputPerfilFavoritos");
            if (favsInput && favsInput.value.trim()) {
                perfil.favoritos = favsInput.value.split(",").map(function (s) { return s.trim(); }).slice(0, 4);
            }

            const top5Input = document.getElementById("inputPerfilTop5");
            if (top5Input && top5Input.value.trim()) {
                perfil.top5Ano = top5Input.value.split(",").map(function (s) { return s.trim(); }).slice(0, 5);
            }

            localStorage.setItem("mygames_perfil", JSON.stringify(perfil));
            carregarPerfilNaTela();
            alert("Perfil, Jogos Favoritos e Top 5 do Ano atualizados com sucesso!");
        });
    }

    carregarPerfilNaTela();
}

function configurarPaginaLogin() {
    const formLogin = document.getElementById("formLoginConta");
    const formRegistro = document.getElementById("formRegistroConta");

    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            e.preventDefault();
            const user = document.getElementById("loginUsername").value;
            localStorage.setItem("mygames_sessao_ativa", user);
            alert("Sessão iniciada com sucesso! Bem-vindo, @" + user);
            window.location.href = "perfil.html";
        });
    }

    if (formRegistro) {
        formRegistro.addEventListener("submit", function (e) {
            e.preventDefault();
            const novoUser = document.getElementById("regUsername").value;
            const novoEmail = document.getElementById("regEmail").value;
            const perfil = JSON.parse(localStorage.getItem("mygames_perfil")) || {};
            perfil.username = novoUser;
            perfil.email = novoEmail;
            localStorage.setItem("mygames_perfil", JSON.stringify(perfil));
            localStorage.setItem("mygames_sessao_ativa", novoUser);
            alert("Conta criada e autenticada com sucesso!");
            window.location.href = "perfil.html";
        });
    }
}

function configurarPaginaContato() {
    const formContato = document.getElementById("formContatoOficial");
    if (formContato) {
        formContato.addEventListener("submit", function (e) {
            e.preventDefault();
            const nome = document.getElementById("contatoNome").value;
            const assunto = document.getElementById("contatoAssunto").value;
            alert("Obrigado pelo contato, " + nome + "! Sua mensagem sobre '" + assunto + "' foi registrada.");
            formContato.reset();
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    inicializarDadosPadrao();
    configurarMenuMobile();
    atualizarCabecalhoSessao();
    atualizarEstatisticasHome();
    renderizarReviewsRecentesHome();
    configurarPaginaExplorar();
    configurarPaginaDetalhes();
    configurarPaginaBiblioteca();
    configurarPaginaDesejos();
    configurarPaginaAnalises();
    configurarPaginaPerfil();
    configurarPaginaLogin();
    configurarPaginaContato();
});
