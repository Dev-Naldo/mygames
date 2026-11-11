/* MyGames - Scripts da aplicação (contato, lista de desejos e login) */
document.addEventListener("DOMContentLoaded", function() {
    const catalogo = {
        cyberpunk: { nome: "Cyberpunk 2077", tag: "Ação / Sci-Fi", preco: "R$ 99,90", img: "img/cyberpunk.png", data: "10/11/2026" },
        baldurs: { nome: "Baldur's Gate III", tag: "RPG Tático", preco: "R$ 159,90", img: "img/baldurs.png", data: "02/11/2026" },
        forza: { nome: "Forza Horizon 6", tag: "Corrida", preco: "R$ 129,00", img: "img/forza6.png", data: "28/10/2026" },
        elden: { nome: "Elden Ring: Shadow of the Erdtree", tag: "RPG de Ação", preco: "R$ 199,90", img: "img/elden-ring.jpg", data: "11/11/2026" }
    };

    function lerLista(chave, padrao) {
        const bruto = localStorage.getItem(chave);
        return bruto ? JSON.parse(bruto) : padrao;
    }

    function mostrarAlerta(elemento, mensagem, tipo) {
        elemento.innerHTML = mensagem;
        elemento.className = "alert alert-" + tipo + " mt-3";
    }

    const listaChamados = document.getElementById("listaChamados");
    const form = document.getElementById("contatoForm");
    const alerta = document.getElementById("alertaForm");

    function renderizarChamados() {
        if (!listaChamados) return;
        listaChamados.innerHTML = "";
        const salvos = lerLista("listaContatos", []);

        if (salvos.length === 0) {
            listaChamados.innerHTML = '<li class="list-group-item bg-transparent text-secondary px-0">Nenhum chamado registrado ainda.</li>';
            return;
        }

        for (let i = 0; i < salvos.length; i++) {
            const item = document.createElement("li");
            item.className = "list-group-item bg-transparent text-light border-secondary-subtle px-0";
            item.textContent = "#" + (i + 1) + " - " + salvos[i].nome + " (" + salvos[i].assunto + ")";
            listaChamados.appendChild(item);
        }
    }

    renderizarChamados();

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const dadosContato = {
                nome: document.getElementById("nome").value.trim(),
                email: document.getElementById("email").value.trim(),
                assunto: document.getElementById("assunto").value,
                mensagem: document.getElementById("mensagem").value.trim()
            };

            if (dadosContato.nome !== "" && dadosContato.email !== "" && dadosContato.assunto !== "" && dadosContato.mensagem !== "") {
                const contatosSalvos = lerLista("listaContatos", []);
                contatosSalvos.push(dadosContato);
                localStorage.setItem("listaContatos", JSON.stringify(contatosSalvos));

                mostrarAlerta(alerta, "Chamado registrado com sucesso para <strong>" + dadosContato.nome + "</strong>!", "success");
                form.reset();
                renderizarChamados();
            } else {
                mostrarAlerta(alerta, "Preencha todos os campos obrigatórios.", "danger");
            }
        });
    }

    const listaDesejos = document.getElementById("listaDesejos");

    function renderizarDesejos() {
        if (!listaDesejos) return;
        const ids = lerLista("listaDesejos", ["cyberpunk", "baldurs", "forza"]);
        const contador = document.getElementById("contadorDesejos");
        listaDesejos.innerHTML = "";
        contador.textContent = ids.length + (ids.length === 1 ? " jogo salvo" : " jogos salvos");

        if (ids.length === 0) {
            listaDesejos.innerHTML = '<p class="pure-subtitle">Sua lista de desejos está vazia. Visite a <a href="index.html">Loja</a>.</p>';
            return;
        }

        for (let i = 0; i < ids.length; i++) {
            const jogo = catalogo[ids[i]];
            const card = document.createElement("article");
            card.className = "flex-card";
            card.innerHTML =
                '<img src="' + jogo.img + '" alt="' + jogo.nome + '" class="flex-card-img">' +
                '<div class="flex-card-body">' +
                '<div><span class="pure-tag">' + jogo.tag + '</span><h3>' + jogo.nome + '</h3><p>Adicionado em ' + jogo.data + '</p></div>' +
                '<div class="flex-card-footer"><span class="pure-price">' + jogo.preco + '</span>' +
                '<div><a href="detalhes.html" class="pure-btn-sm">Ver Página</a> ' +
                '<button type="button" class="btn-remover" data-remover="' + ids[i] + '">Remover</button></div></div></div>';
            listaDesejos.appendChild(card);
        }
    }

    if (listaDesejos) {
        listaDesejos.addEventListener("click", function(event) {
            const id = event.target.getAttribute("data-remover");
            if (id) {
                const ids = lerLista("listaDesejos", ["cyberpunk", "baldurs", "forza"]);
                localStorage.setItem("listaDesejos", JSON.stringify(ids.filter(function(item) { return item !== id; })));
                renderizarDesejos();
            }
        });
    }

    renderizarDesejos();

    const botoesDesejo = document.querySelectorAll("[data-desejo]");
    for (let i = 0; i < botoesDesejo.length; i++) {
        botoesDesejo[i].addEventListener("click", function() {
            const id = botoesDesejo[i].getAttribute("data-desejo");
            const ids = lerLista("listaDesejos", ["cyberpunk", "baldurs", "forza"]);
            if (ids.indexOf(id) === -1) {
                ids.push(id);
                localStorage.setItem("listaDesejos", JSON.stringify(ids));
            }
        });
    }

    const formLogin = document.getElementById("loginForm");
    const alertaLogin = document.getElementById("alertaLogin");

    if (formLogin) {
        const salvo = localStorage.getItem("usuarioLogado");
        if (salvo) {
            mostrarAlerta(alertaLogin, "Sessão ativa como <strong>" + salvo + "</strong>.", "info");
        }

        formLogin.addEventListener("submit", function(event) {
            event.preventDefault();
            const usuario = document.getElementById("usuario").value.trim();
            const senha = document.getElementById("senha").value;

            if (usuario.length >= 3 && senha.length >= 6) {
                localStorage.setItem("usuarioLogado", usuario);
                mostrarAlerta(alertaLogin, "Bem-vindo, <strong>" + usuario + "</strong>!", "success");
                formLogin.reset();
            } else {
                mostrarAlerta(alertaLogin, "Usuário (mín. 3) e senha (mín. 6 caracteres) são obrigatórios.", "danger");
            }
        });
    }
});
