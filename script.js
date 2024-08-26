document.getElementById("boton-encriptar").addEventListener("click", function() {
    procesarTexto("encriptar");
});

document.getElementById("boton-desencriptar").addEventListener("click", function() {
    procesarTexto("desencriptar");
});

document.getElementById("boton-copiar").addEventListener("click", function() {
    copiarTexto();
});

function procesarTexto(accion) {
    const textoEntrada = document.getElementById("entrada-texto").value;
    let textoResultado = "";

    if (textoEntrada === "") {
        document.getElementById("resultado").style.display = "none";
        document.getElementById("mensaje-error").style.display = "block";
        document.getElementById("mensaje-instrucciones").style.display = "block";
        document.getElementById("boton-copiar").style.display = "none";
    } else {
        if (accion === "encriptar") {
            textoResultado = encriptar(textoEntrada);
        } else {
            textoResultado = desencriptar(textoEntrada);
        }
        document.getElementById("resultado").textContent = textoResultado;
        document.getElementById("resultado").style.display = "block";
        document.getElementById("mensaje-error").style.display = "none";
        document.getElementById("mensaje-instrucciones").style.display = "none";
        document.getElementById("boton-copiar").style.display = "inline-block";
    }
}

function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copiarTexto() {
    const resultado = document.getElementById("resultado");
    navigator.clipboard.writeText(resultado.textContent).then(() => {
        alert("Texto copiado al portapapeles");
    });
}


