function agregar(valor) {
    document.getElementById("pantalla").value += valor
    document.getElementById("subpantalla").value += valor
    if ("." || "+" || "/" || "-" || "*" !== valor ) {
        subcalcular()
    }
}

function borrar() {
    document.getElementById("pantalla").value = "" 
    document.getElementById("subpantalla").value = "" 
}

function calcular() {
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
    document.getElementById("subpantalla").value = ""
}

function subcalcular() {
    const valorSubpantalla = document.getElementById("subpantalla").value
    let resultado = eval(valorSubpantalla) 
    document.getElementById("subpantalla").value = resultado
}