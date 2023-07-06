var inA = document.getElementById("inA");
var inB = document.getElementById("inB");
var inC = document.getElementById("inC");
var btCalcular = document.getElementById("btCalcular");
var outResultado = document.getElementById("outResultado");
var outTipo = document.getElementById("outTipo");

btCalcular.addEventListener("click", tipoTriangulo);

function tipoTriangulo() {

    var a = Number(inA.value);
    var b = Number(inB.value);
    var c = Number(inC.value);

    if (a + b < c || b + c < a || c + a < b) {
        outResultado.textContent = "Os valores informados não formam um triângulo."
        outTipo.textContent = ""

    } else {
        outResultado.textContent = "Esses lados formam um triângulo."
        if (a == b && b == c) {
            outTipo.textContent = "Triângulo Equilátero."
        }

        else if (a == b || b == c || c == a) {
            outTipo.textContent = "Triângulo Isósceles."
        }

        else {
            outTipo.textContent = "Triângulo Escaleno."

        }
    }
}
