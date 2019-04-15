/**
 * calculo da media
 * @author Murilo Solano
 */

function calcularIMC() {
    let Peso
    let Altura
    let media

    /*
       parseFloat converte a String da caixa de texto do formulario para um tipo numerico
       Float (numros reais, casas decimais)
       int (numeros inteiros)
       .replace(",",".") (troca um caractere por outro)
    */
    Peso = parseFloat(frmMedia.txtPeso.value.replace(",", "."))
    Altura = parseFloat(frmMedia.txtAltura.value.replace(",", "."))
    media = Peso / (Altura * Altura)
    //toFixed(2) -> formatar o resultado em 2 casas decimais
    frmMedia.txtResultado.value = media.toFixed(1)

    if (media < 18.5) {
        frmMedia.txtStatus.value = "Abaixo do Peso"
    }
    else if (media > 18.6 && media < 24.6) {
        frmMedia.txtStatus.value = "Peso Ideal"
    }
    else if (media > 25 && media < 29.9) {
        frmMedia.txtStatus.value = "Levemente Acima do Peso"
    }
    else if (media > 30 && media < 35) {
        frmMedia.txtStatus.value = "Obesidade Grau 1"
    }
    else if (media > 35 && media < 40){
        frmMedia.txtStatus.value = "Obesidade Severa"
    }
    else 
    frmMedia.txtStatus.value = "Obesidade Morbida"

}