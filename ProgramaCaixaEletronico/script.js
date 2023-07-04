var inSaque = document.getElementById("inSaque");
var outNotaVinte = document.getElementById("outNotaVinte");
var outNotaDuzentos = document.getElementById("outNotaDuzentos");
var outNotaCinquenta = document.getElementById("outNotaCinquenta");
var outNotaCinco = document.getElementById("outNotaCinco");
var btMostrar = document.getElementById("btMostrar");

btMostrar.addEventListener("click", exibirNotas);

function exibirNotas() {

    var saque = Number(inSaque.value);

    if (saque == " " || isNaN(saque)) {
        alert("Por favor, informe o valor do saque corretamente...");
        inSaque.focus();
        return;
    }

    if (saque % 5 != 0) {
        alert("Valor inválido para notas disponíveis.");
        inSaque.focus();
        return;
    }

    var notaDuzentos = Math.floor(saque / 200);
    var resto = saque % 200;
    var notaCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    var notaVinte = Math.floor(resto / 20);
    resto = resto % 20;
    var notaCinco = Math.floor(resto / 5);

    if (notaDuzentos > 0) {
        outNotaDuzentos.textContent = "Notas de R$ 200,00: " + notaDuzentos;
    }

    if (notaCinquenta > 0) {
        outNotaCinquenta.textContent = "Notas de R$ 50,00: " + notaCinquenta;
    }

    if (notaVinte > 0) {
        outNotaVinte.textContent = "Notas de R$ 20,00: " + notaVinte;
    }

    if (notaCinco > 0) {
        outNotaCinco.textContent = "Notas de R$ 5,00: " + notaCinco;
    }
}
