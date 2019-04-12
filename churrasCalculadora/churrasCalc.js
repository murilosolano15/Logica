/**
 * @author Luiz e Murilo
 */

function calcularChurras(){
    let homem, mulher, crianca, carne, cerveja, refrigerante
    let mediaCarne, qntCarne, mediaCerveja, qntCerveja, mediaRefri, qntRefri, total, dividir

    homem = parseFloat(frmChurras.txtHomem.value.replace(",","."))
    mulher = parseFloat(frmChurras.txtMulher.value.replace(",","."))
    crianca = parseFloat(frmChurras.txtCrianca.value.replace(",","."))
    carne = parseFloat(frmChurras.txtCarne.value.replace(",","."))
    cerveja = parseFloat(frmChurras.txtCerveja.value.replace(",","."))
    refrigerante = parseFloat(frmChurras.txtRefrigerante.value.replace(",","."))

    mediaCarne = ((carne * 30) / 100) * homem + ((carne * 30) / 100) * mulher + ((carne * 10) / 100) * crianca 
    qntCarne = ((homem * 30)/100) + ((mulher * 30)/100) + ((crianca * 10)/100)

    mediaCerveja = ((homem * 12) * cerveja) + ((mulher * 4) * cerveja)
    qntCerveja = (homem * 12) + (mulher * 4)

    mediaRefri = ((mulher * 2) * refrigerante) + ((crianca * 2) * refrigerante)
    qntRefri = (mulher * 2) + (crianca * 2)

    total = (mediaCarne + mediaCerveja + mediaRefri)
    dividir = (total / (homem + mulher))


    frmChurras.txtTotalCarne.value = mediaCarne.toFixed(2)
    frmChurras.txtQuantCarne.value = qntCarne.toFixed(2)
    frmChurras.txtTotalCerveja.value = mediaCerveja.toFixed(2)
    frmChurras.txtQuantCerveja.value = qntCerveja
    frmChurras.txtTotalRefrigerante.value = mediaRefri.toFixed(2)
    frmChurras.txtQuantRefrigerante.value = qntRefri
    frmChurras.txtTotal.value = total.toFixed(2)
    frmChurras.txtDividir.value = dividir.toFixed(2)



}

