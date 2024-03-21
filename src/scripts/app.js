// Função para criptografar o texto
function encryptText(text) {
    // Inverter a string
    return text.split('').reverse().join('');
}

// Função para descriptografar o texto
function decryptText(encryptedText) {
    // Inverter a string novamente
    return encryptedText.split('').reverse().join('');
}

function setup() {
    const encryptButton = document.querySelector('.button-encrypt');
    const decryptButton = document.querySelector('.button-decrypt');
    const copyButton = document.querySelector('.button-copy');
    const textInput = document.getElementById('text-input');
    const messageOutput = document.getElementById('message-output');

    encryptButton.addEventListener('click', function() {
        const encryptedText = encryptText(textInput.value);
        messageOutput.value = encryptedText;
    });

    decryptButton.addEventListener('click', function() {
        const decryptedText = decryptText(messageOutput.value); // Descriptografa o texto atual no campo de saída
        messageOutput.value = decryptedText; // Atualiza o campo de saída com o texto descriptografado
    });

    copyButton.addEventListener('click', function() {
        messageOutput.select();
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
    });
}

// Executar a função setup() quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', setup);