
const dadosCardControleDeMedicamento = {
    titulo: 'Controle de Medicamentos',
    imagem: './imagens/controleDeMedicamentos.png',
    gif: '',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light'

    ],
    descricao: `O  Sistema Controle de Medicamentos, tem como objetivo gerenciar o que seria a farmacia de uma poss�vel posto de sa�de.
    Tendo como suas fun��es, a gest�o de estoque de medicamentos,o cadastro de pacientes, fornecedores, medicamentos. Entrada de medicamentos conforme solicita��es,
    adi��o e exclusao de estoque, o controle de prescri��es m�dicas e a sa�da de acordo as prescri��es recebidas.`
};

const dadosGestaoDeEquipamentos = {
    titulo: 'Gest�o de Equipamentos',
    imagem: './imagens/gestaoEquipamentos.png',
    gif: '',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light'

    ],
    descricao: `O  Sistema Gest�o de equipamentos, tem como objetivo o cadastro de equipamentos, onde o usu�rio pode cadastrar,
            visualisar equipamentos cadastrados, editar cadastro de equipamentos e excluir equipamentos cadastrados. 
            O sistema tamb�m permite a gestao de manuten��o de equipamentos, permitindo que o usu�rio cadastre, visualize, edite e 
            exclua chamadas de manuten��o cadastradas na op��o Manuten��o.`
}

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card n�o Selecionado.')

    const imgCard = document.getElementById('imgCard')
    const stackCrd = document.getElementById('stackCard')
    const tituloCard = document.getElementById('tituloCard')
    const descricaoCard = document.getElementById('descricaoCard')
    const urlRepositorio = document.getElementById('urlRepositorio')

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    descricaoCard.textContent = cardSelecionado.descricao;
    urlRepositorio.href = cardSelecionado.urlRepositorio;

    stackCrd.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img')
        iconeStack.width = 35;
        iconeStack.src = item;

        stackCrd.appendChild(iconeStack);
    }
}

function selecionarPrimeiroCard() {
    if (cardSelecionado == dadosCardControleDeMedicamento)
        return;

    cardSelecionado = dadosCardControleDeMedicamento;
    carregarDadosCardAtual();
}

function selecionarSegundoCard() {
    if (cardSelecionado == dadosGestaoDeEquipamentos)
        return;

    cardSelecionado = dadosGestaoDeEquipamentos;
    carregarDadosCardAtual();
}

function abrirModalProjeto() {
    document.getElementById('portfolioModalLabel').textContent = cardSelecionado.titulo;
    document.getElementById('portfolioModalImage').src = cardSelecionado.gif;
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnSelecionarSegundoCard = document.getElementById("btnSelecionarSegundoCard");
    const btnVerProjeto = document.getElementById("btnVerProjeto")


    btnPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    btnSegundoCard.addEventListener('click', selecionarSegundoCard);
    btnVerProjeto.addEventListener('click', abirModalProjeto);
    selecionarPrimeiroCard();
};

document.addEventListener('DOMContentLoaded', main);