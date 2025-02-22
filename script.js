function processarComando() {
    let comando = document.getElementById("inputText").value.toLowerCase();
    let resposta = "";

    if (comando.includes("tempo")) {
        resposta = "Aqui está a previsão do tempo: Ensolarado, 30°C.";
    } else if (comando.includes("abrir site")) {
        resposta = "Abrindo o site...";
        window.open("https://www.google.com", "_blank");
    } else if (comando.includes("olá")) {
        resposta = "Olá! Como posso te ajudar?";
    } else {
        resposta = "Desculpe, não entendi o comando.";
    }

    document.getElementById("outputText").textContent = resposta;
}

function reconhecimentoVoz() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    
    recognition.onstart = function() {
        document.getElementById("outputText").textContent = "Ouvindo...";
    };
    
    recognition.onresult = function(event) {
        const comandoVoz = event.results[0][0].transcript.toLowerCase();
        document.getElementById("inputText").value = comandoVoz;
        processarComando();
    };

    recognition.start();
}
