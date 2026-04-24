alert("JS carregado com sucesso!");
const display = document.getElementById('display');
        
        const display = document.getElementById('display');

        function adicionarAoVisor(valor) {
            display.value += valor;}

        function limparVisor() {
            display.value = "";}

        function calcular() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Erro";
                setTimeout(limparVisor, 1500);}}
