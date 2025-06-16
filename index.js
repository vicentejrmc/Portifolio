
const dadosCardControleDeMedicamento = {
    titulo: 'Controle de Medicamentos',
    imagem: './imagens/controle-de-medicamentos.png',
    gif: 'https://i.imgur.com/fgekUo6.gif',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light'

    ],
    descricao: `O Sistema Controle de Medicamentos, tem como objetivo gerenciar o que seria a farmacia de uma possível posto de saúde.
    Tendo como suas funcionlidades, a gestão de estoque de medicamentos,o cadastro de pacientes, fornecedores, medicamentos. Entrada de medicamentos conforme solicitações,
    adição e exclusao de estoque, o controle de prescrições médicas e a saída de acordo as prescrições recebidas.`,
    urlRepositorio: 'https://github.com/vicentejrmc/controle-de-medicamentos'
};

const dadosGestaoDeEquipamentos = {
    titulo: 'Gestão de Equipamentos',
    imagem: './imagens/gestao-de-equipamentos.png',
    gif: 'https://i.imgur.com/3od2Ro2.gif',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light'

    ],
    descricao: `O  Sistema Gestão de equipamentos, tem como objetivo o cadastro de equipamentos, onde o usuário pode cadastrar,
            visualisar equipamentos cadastrados, editar cadastro de equipamentos e excluir equipamentos cadastrados. 
            O sistema também permite que se realize chamados de manutenção de equipamentos, permitindo que o usuário cadastre, visualize, edite e 
            exclua chamadas de manutenção cadastradas.`,
    urlRepositorio: 'https://github.com/vicentejrmc/GestaoDeEquipamentos2025'
}

const dadosCardControleDeBar = {
    titulo: 'Controle de Bar',
    imagem: './imagens/controle-de-bar.png',
    gif: 'https://imgur.com/baheGyf',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light'
    ],
    descricao: 'O Sistema Controle de bar tem como objetivo de auxiliar de forma simples o gerenciamento do atendimento ao cliente. Com uma Inteface amigável e intuitiva, o sistema é ideal para estabelecimentos de pequeno porte. Por meio dele é possível realizar o Controle de vendas gerenciando os pedidos, Cadastro de produtos, Garsons e Mesas.'

    urlRepositorio: 'https://github.com/vicentejrmc/Controle-de-bar2025'
}

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card não Selecionado.')

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

function selecionarTerceiroCard() {
    if (cardSelecionado == dadosCardControleDeBar)
        return;

    cardSelecionado = dadosCardControleDeBar;
    carregarDadosCardAtual();
}

function abrirModalProjeto() {
    document.getElementById('portfolioModalLabel').textContent = cardSelecionado.titulo;
    document.getElementById('portfolioModalImage').src = cardSelecionado.gif;
}

function main() {
    const btnPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnSegundoCard = document.getElementById("btnSelecionarSegundoCard");
    const btnVerProjeto = document.getElementById("btnVerProjeto")


    btnPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    btnSegundoCard.addEventListener('click', selecionarSegundoCard);
    btnTerceiroCard.addEventListener('click', selecionarTerceiroCard);
    btnVerProjeto.addEventListener('click', abrirModalProjeto);
    selecionarPrimeiroCard();
};

document.addEventListener('DOMContentLoaded', main);