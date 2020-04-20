function fazerFatorial() {
    var numero = document.getElementById("numero").value
    var h2 = document.getElementById("resultado")
    var aux = parseInt(numero)
    if (!isNaN(numero)) {
        if (numero == "") {
            h2.innerHTML = "Digite um valor!"
        } else {
            var valorTotal = 1;

            for (var i = numero; i > 1; i--) {
                valorTotal = valorTotal * i
            }

            h2.innerHTML = "Resultado = " + valorTotal

        }
    } else {
        h2.innerHTML = numero + " não é um valor valido"


    }


}