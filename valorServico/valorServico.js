/**
 * 
 *@author Luiz e Murilo
 */

function calcularServico(){
    let salario, despesas, total, cargaHoraria, imposto, investimento, valorHora

    salario = parseFloat(frmValorServico.txtSalario.value.replace(",","."))
    despesas = parseFloat(frmValorServico.txtDespesas.value.replace(",","."))
    cargaHoraria = parseFloat(frmValorServico.txtCargaHoraria.value.replace(",","."))

    imposto = (salario * 30) / 100 
    investimento = (salario * 20) / 100

    total = (salario + despesas + imposto + investimento)
    valorHora = (salario + despesas + imposto + investimento) / cargaHoraria

    frmValorServico.txtImpostos.value = imposto.toFixed(2)
    frmValorServico.txtInvestimento.value = investimento.toFixed(2)
    frmValorServico.txtTotal.value = total.toFixed(2)
    frmValorServico.txtValorHora.value = valorHora.toFixed(2)
}
