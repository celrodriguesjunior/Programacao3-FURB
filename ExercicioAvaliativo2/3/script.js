var mostrado = false;
var array = [1, 2, 3, 4, 5, 6, 7, 'joao', 'maria', 13.6]
function escreverArray(){
    var lista = document.getElementById('lista')
    if(!mostrado){
        var h1 = document.createElement('h1')
        h1.innerHTML = 'A SEGUIR O ARRAY'
        lista.appendChild(h1)
    
        for(var i = 0; i < array.length; i++){
            var ul = document.createElement('ul');
            ul.innerHTML = array[i]
            lista.appendChild(ul)
        }
        mostrado = true
    }

}