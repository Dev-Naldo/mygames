const formulario = document.getElementById('formAdicionarJogo');
const corpoTabela = document.getElementById('corpoTabelaJogos');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome = document.getElementById('nomeJogo').value;
        const email = document.getElementById('emailUser').value;
        const status = document.getElementById('statusJogo').value;
        const analise = document.getElementById('analiseJogo').value;

        const novoJogo = {
            nome: nome,
            email: email,
            status: status,
            analise: analise
        };

        let jogosSalvos = JSON.parse(localStorage.getItem('bibliotecaJogos')) || [];
        
        jogosSalvos.push(novoJogo);
        localStorage.setItem('bibliotecaJogos', JSON.stringify(jogosSalvos));

        formulario.reset();
        alert('Jogo salvo com sucesso!');
        window.location.href = 'biblioteca.html';
    });
}

if (corpoTabela) {
    let jogosSalvos = JSON.parse(localStorage.getItem('bibliotecaJogos')) || [];

    if (jogosSalvos.length === 0) {
        corpoTabela.innerHTML = '<tr><td colspan="4">Nenhum jogo cadastrado ainda.</td></tr>';
    } else {
        jogosSalvos.forEach(function(jogo) {
            const linha = document.createElement('tr');
            
            linha.innerHTML = `
                <td>${jogo.nome}</td>
                <td>${jogo.status}</td>
                <td>${jogo.email}</td>
                <td>${jogo.analise}</td>
            `;
            corpoTabela.appendChild(linha);
        });
    }
}
