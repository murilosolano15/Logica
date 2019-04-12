/**
 * @author Luiz e Murilo
 */

function calcularCirculo() {
    let raio, area

    raio = parseFloat(frmCirculo.txtRaio.value.replace(",","."))

    area = (raio * raio) * 3.14159

    frmCirculo.txtArea.value = area.toFixed(2)


}