function agregar(valor) {
    document.getElementById("pantalla").value += valor
    document.getElementById("subpantalla").value += valor
    subcalcular()
}

function borrar() {
    document.getElementById("pantalla").value = "" 
}

function calcular() {
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
}

function subcalcular() {
    const valorSubpantalla = document.getElementById("subpantalla").value
    const resultado = eval(valorSubpantalla) 
    document.getElementById("subpantalla").value = resultado
}