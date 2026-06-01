const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKey = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

// Pega todos os botões com a classe "charKey" e percorre cada um
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    
    // Adiciona um evento de clique em cada botão
    charKeyBtn.addEventListener('click', function () {

        // Pega o valor do atributo data-value do botão clicado
        const value = charKeyBtn.dataset.value;
        
        // Adiciona o valor do botão no input da calculadora
        input.value += value;
    })
})

// Ao clicar no botão de limpar (C), apaga tudo do input e coloca o foco de volta nele para o usuário continuar digitando

document.getElementById('clear').addEventListener('click', function () {
    input.value = '';
    input.focus();
})

input.addEventListener('keydown', function (ev) {
    ev.preventDefault();

    // Verifica se a tecla pressionada está na lista de teclas permitidas. Se estiver, adiciona ela no input manualmente e encerra a função.
    if (allowedKey.includes(ev.key)) {
        input.value += ev.key;
        return
    }

    // Se a tecla pressionada for "Backspace", remove o último caractere do input usando slice.
    // O -1 sempre aponta para antes do último caractere, independente do tamanho da string. É como dizer: "me dá tudo, menos o último."
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if (ev.key === 'Enter') {
        calculate();
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    // O eval() é uma função nativa do JavaScript que executa uma string como código. No caso da calculadora ela pega a String do input (Ex.: 2 + 2) e já interpreta o código e realiza o código. **NÃO USAR EM PROJETOS REAIS pois abre brexa para scripts maliciosos.
    const result = eval(input.value);
    resultInput.value = result;    
}
