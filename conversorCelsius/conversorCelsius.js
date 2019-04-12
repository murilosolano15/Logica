/**
 * @author Luiz e Murilo
 * 
 */

 function calcular(){
    let celsius, fahrenheit = 0

    fahrenheit = parseFloat(frmConversor.txtFahrenheit.value.replace(",","."))

    celsius = (fahrenheit-32) * (5/9)
    
    frmConversor.txtCelsius.value = celsius.toFixed(2)

 }