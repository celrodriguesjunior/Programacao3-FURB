function somarNumeros() {
    var naoNumeros = 0;
    var listaInput = document.getElementsByTagName("input");
    var soma = 0;
    for (var i = 0; i < listaInput.length; i++) {
        if(!isNaN(parseInt(listaInput[i].value))){
            soma += parseInt(listaInput[i].value);
        }else{
            naoNumeros++;
        }
    }

    if(naoNumeros != 3){
        if (soma % 2 == 0) {
            alert("A soma dos 3 valores: " + soma + " e ele é par");
        } else {
            alert("A soma dos 3 valores: " + soma + " e ele é impar");
        }
    }else{
        alert("Não foram digitados nenhum número para a soma")
    }


}