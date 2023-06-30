function agregar(valor) {
    if (document.getElementById("subpantalla").value === "") {
            document.getElementById("subpantalla").value =  document.getElementById("pantalla").value
    }
    document.getElementById("pantalla").value += valor
    document.getElementById("subpantalla").value = document.getElementById("pantalla").value
    if (valor !== '.' && valor !== '+' && valor !== '/' && valor !== '-' && valor !== '*'  ) {
        subcalcular()
        console.log(document.getElementById("pantalla").value)
    }
}

function borrar() {
    document.getElementById("pantalla").value = "" 
    document.getElementById("subpantalla").innerHTML = "" 
}

function calcular() {
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
    document.getElementById("subpantalla").innerHTML = ""

}

function subcalcular() {
    const valorSubpantalla = document.getElementById("pantalla").value
    const resultado = eval(valorSubpantalla) 
    document.getElementById("subpantalla").innerHTML = resultado
}