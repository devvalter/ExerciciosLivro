var inSalario = document.getElementById("inSalario");
var rbEstagiario = document.getElementById("rbEstagiario");
var rbTemporario = document.getElementById("rbTemporario");
var rbEfetivado = document.getElementById("rbEfetivado");
var btLimpar = document.getElementById("btLimpar");
var outResposta = document.getElementById("outResposta");
var btCalcular = document.getElementById("btCalcular");


btCalcular.addEventListener("click", calcularSalario);


function calcularSalario() {

    var salario = Number(inSalario.value);
    var estagiario = rbEstagiario.checked;
    var temporario = rbTemporario.checked;
    var efetivado = rbEfetivado.checked;

    if (estagiario == false && temporario == false && efetivado == false) {
        alert("Por favor, informe sua situação na empresa...");
        inSalario.focus();
        return;
    }

    if (salario == 0 || isNaN(salario)) {
        alert("Por favor, informe o seu salário.");
        inSalario.focus()
        return;
    }

    if (estagiario) {
        var novoSalario = salario * 1.05
    }

    if (temporario) {
        var novoSalario = salario * 1.08
    }

    if (efetivado) {
        var novoSalario = salario * 1.15
    }

    outResposta.textContent = "Seu novo salário será de R$: " + novoSalario.toFixed(2);

}
btLimpar.addEventListener("click", limparCampos);


function limparCampos() {
    inSalario.value = "";
    rbTemporario.checked = false;
    rbEstagiario.checked = false;
    rbEfetivado.checked = false;
    outResposta.textContent = "";
    inSalario.focus();
}

