function encriptar() {
    let texto = document.getElementById("texto-entrada").value;
    if (validarTexto(texto)) {
        let textoEncriptado = texto.replace(/e/g, "enter")
                                   .replace(/i/g, "imes")
                                   .replace(/a/g, "ai")
                                   .replace(/o/g, "ober")
                                   .replace(/u/g, "ufat");
        mostrarResultado(textoEncriptado);
    } else {
        alert("Por favor ingrese solo letras minúsculas sin acentos.");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto-entrada").value;
    if (validarTexto(texto)) {
        let textoDesencriptado = texto.replace(/enter/g, "e")
                                      .replace(/imes/g, "i")
                                      .replace(/ai/g, "a")
                                      .replace(/ober/g, "o")
                                      .replace(/ufat/g, "u");
        mostrarResultado(textoDesencriptado);
    } else {
        alert("Por favor ingrese solo letras minúsculas sin acentos.");
    }
}

function mostrarResultado(texto) {
    document.getElementById("texto-salida").innerText = texto;
}

function copiarTexto() {
    let texto = document.getElementById("texto-salida").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles.");
    });
}

function validarTexto(texto) {
    let regex = /^[a-z\s]*$/;
    return regex.test(texto);
}
