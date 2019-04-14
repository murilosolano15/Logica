/**
 * Calculadora Flex
 * @author Murilo Solano Oliva
 */

let etanol, gasolina

function Calcular() {
    etanol = frmFlex.txtEtanol.value.replace(",", ".")
    gasolina = frmFlex.txtGasolina.value.replace(",", ".")

    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src = "etanol.png"
    }
    else {
        document.getElementById("status").src = "gasolina.png"
    }
}


function Resetar() {
    document.getElementById("status").src = "neutro.png"
}