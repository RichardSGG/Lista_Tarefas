const formulario = document.getElementById('formulario');
const entrada = document.getElementById('entrada');
const lista = document.getElementById('lista');
const alerta = document.getElementById('alerta');
const botaoFechar = document.querySelector('.fechar-alerta');

let tempoAlerta;

const gerarId = () => `item-${Date.now()}`;

function adicionarItem(evento) {
    evento.preventDefault();

    const nomeItem = entrada.value.trim();

    if (nomeItem === '') {
        alert('Por favor, digite o nome do item.');
        return;
    }

    const li = document.createElement('li');
    li.classList.add('item');

    const id = gerarId();

    li.innerHTML = `
        <div class="conteudo">
            <input type="checkbox" class="caixa-selecao" id="${id}">
            <label for="${id}">${nomeItem}</label>
        </div>
        <button class="botao-apagar" aria-label="Remover item">
            <i class="ph ph-trash"></i>
        </button>
    `;

    const botaoApagar = li.querySelector('.botao-apagar');
    botaoApagar.addEventListener('click', () => apagarItem(li));

    lista.appendChild(li);

    entrada.value = '';
    entrada.focus();
}

function apagarItem(elementoItem) {
    elementoItem.remove();
    mostrarAlerta();
}

function mostrarAlerta() {
    alerta.classList.remove('escondido');
    clearTimeout(tempoAlerta);

    tempoAlerta = setTimeout(() => {
        esconderAlerta();
    }, 3000);
}

function esconderAlerta() {
    alerta.classList.add('escondido');
}

formulario.addEventListener('submit', adicionarItem);
botaoFechar.addEventListener('click', esconderAlerta);

const botoesIniciais = document.querySelectorAll('.botao-apagar');
botoesIniciais.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        const elementoItem = evento.target.closest('.item');
        apagarItem(elementoItem);
    });
});