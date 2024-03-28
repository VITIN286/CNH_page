let enviar = document.getElementById('enviar');

enviar.addEventListener("click", function() {
    let idade = parseInt(document.getElementById('idade').value);
    if (!isNaN(idade)) { // Verifica se a idade é um número válido
        if(idade >= 18) {
            document.getElementById('resultado').innerText = 'Parabéns! Você é maior de idade e está apto(a) para tirar sua CNH em 2024.';
        } else {
            document.getElementById('resultado').innerText = 'Poxa! Infelizmente você ainda é menor de idade e não pode tirar sua CNH em 2024.';
        }
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira uma idade válida.';
    }
});
