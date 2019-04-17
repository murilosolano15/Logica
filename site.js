/**
 * @author Arnaldo Victor Yamawaki Alves
 */
var onde = window.location.pathname;
//alert (onde)
function abrirSite() {
    let Entrada
    Entrada = parseInt(frmAbrir.txtEntrada.value)
    switch (Entrada) {
        case 1:
            window.location = "file:///C:/Users/murilo.soliva/Documents/Logic/calculoIMC/index.html";
            break
    }
    switch (Entrada) {
        case 2:
            window.location = "file:///C:/Users/murilo.soliva/Documents/Logic/conversorCelsius/celsius.html";
            break
    }
    switch (Entrada) {
        case 3:
            window.location = "file:///C:/Users/murilo.soliva/Documents/Logic/churrasCalculadora/index.html";
            break
    }
    switch (Entrada) {
        case 4:
            window.location = "file:///C:/Users/murilo.soliva/Documents/Logic/dolar/converterDolar.html";
            break
    }
    switch (Entrada) {
        case 5:
            window.location = "file:///C:/Users/murilo.soliva/Documents/Logic/jogoDado/index.html";
            break
    }
    switch (Entrada) {
        case 6:
            window.location = "file:///C:/Users/murilo.soliva/Documents/Logic/valorServico/index.html";
            break
    }
    switch (Entrada) {
        case 7:
            window.location = "file:///C:/Users/murilo.soliva/Documents/Logic/areaCirculo/areaCirculo.html";
            break
    }
    switch (Entrada) {
        case 8:
            window.location = "file:///C:/Users/murilo.soliva/Documents/Logic/appFlex/index.html";
            break
    }
    switch (Entrada) {
        case 9:
            window.location = "file:///C:/Users/murilo.soliva/Documents/Logic/calculodaMedia/index.html";
            break
    }
}