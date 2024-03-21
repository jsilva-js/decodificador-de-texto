// Função para criptografar o texto
function encryptText(text) {
    let encryptedText = [];
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        switch (letter) {
            case "e":
                encryptedText.push("enter");
                break;
            case "i":
                encryptedText.push("imes");
                break;
            case "a":
                encryptedText.push("ai");
                break;
            case "o":
                encryptedText.push("ober");
                break;
            case "u":
                encryptedText.push("ufat");
                break;
            default:
                encryptedText.push(letter);
        }
    }
    return encryptedText.join('');
}

// Função para descriptografar o texto
function decryptText(encryptedText) {
    encryptedText = encryptedText.replace(/enter/g, 'e');
    encryptedText = encryptedText.replace(/imes/g, 'i');
    encryptedText = encryptedText.replace(/ai/g, 'a');
    encryptedText = encryptedText.replace(/ober/g, 'o');
    encryptedText = encryptedText.replace(/ufat/g, 'u');
    return encryptedText;
}

function setup() {
    const encryptButton = document.querySelector('.button-encrypt');
    const decryptButton = document.querySelector('.button-decrypt');
    const copyButton = document.querySelector('.button-copy');
    const textInput = document.getElementById('text-input');
    const messageOutput = document.getElementById('message-output');

    encryptButton.addEventListener('click', function () {
        const encryptedText = encryptText(textInput.value);
        messageOutput.value = encryptedText;
    });

    decryptButton.addEventListener('click', function () {
        const decryptedText = decryptText(messageOutput.value); // Descriptografa o texto atual no campo de saída
        messageOutput.value = decryptedText; // Atualiza o campo de saída com o texto descriptografado
    });

    copyButton.addEventListener('click', function () {
        messageOutput.select();
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
    });
}

// Executar a função setup() quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', setup);