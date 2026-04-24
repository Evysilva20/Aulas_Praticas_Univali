// O ERRO ESTAVA AQUI: O ID correto no seu HTML é 'display'
const display = document.getElementById('display'); 

function adicionarAoVisor(valor) {
    if (display.value === "Erro") {
        display.value = "";
    }
    display.value += valor;
}

function limparVisor() {
    display.value = "";
}

function calcular() {
    try {
        if (display.value !== "") {
            // eval() resolve a conta matemática que está no texto
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Erro";
        setTimeout(limparVisor, 1500);
    }
}
