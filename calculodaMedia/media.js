/**
 * Calculo da media
 * @author Murilo Solano Oliva
 */

 function calcularMedia(){
     let nota1,nota2,media //variaveis do mesmo tipo
     /*
        parseFloat converte a String da caixa de textodo formulario para um tipo numérico
        Float (numeros reais, casas decimais)
        int (numeros inteiros)
        .replace(",",".") (troca um caractere por outro)
     */
     nota1 = parseFloat(frmMedia.txtNota1.value.replace(",","."))
     nota2 = parseFloat(frmMedia.txtNota2.value.replace(",","."))
     media = (nota1 + nota2) / 2
     //toFixed(2) -> formatar o resultado em 2 casas decimais
     frmMedia.txtResultado.value = media.toFixed(1)

     if(media < 5){
         frmMedia.txtStatus.value = "Reprovado"
     }
     else{
         frmMedia.txtStatus.value = "Aprovado"
     }
 }