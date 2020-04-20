var filme1 = {titulo:'Velozes e Furiosos', ano:'2001', genero:'corrida'}
var filme2 = {titulo:'Harry Potter e a Pedra Filosofal', ano:'2001', genero:'Fantasia'}
var filme3 = {titulo:'O Auto da Compadecida', ano:'2000', genero:'comédia'}
var mostradoFilme = false
var arrayFilmes = [filme1, filme2, filme3]

function mostarFilmes(){

    if(!mostradoFilme){

        var div = document.getElementById("Filmes")
        
        var titulo1 = document.createElement('h1')
        var ano1 = document.createElement('h2')
        var genero1 = document.createElement('p')
    
        titulo1.innerHTML = 'Filme: ' + filme1.titulo
        ano1.innerHTML =  'Ano: ' + filme1.ano
        genero1.innerHTML =  'Genero: ' + filme1.genero
        div.appendChild(titulo1);
        div.appendChild(ano1);
        div.appendChild(genero1);

        var titulo2 = document.createElement('h1')
        var ano2 = document.createElement('h2')
        var genero2 = document.createElement('p')

        titulo2.innerHTML = 'Filme: ' + filme2.titulo
        ano2.innerHTML =  'Ano: '+ filme2.ano
        genero2.innerHTML = 'Genero: ' + filme2.genero
        div.appendChild(titulo2);
        div.appendChild(ano2);
        div.appendChild(genero2);

        var titulo3 = document.createElement('h1')
        var ano3 = document.createElement('h2')
        var genero3 = document.createElement('p')

        titulo3.innerHTML = 'Filme: ' + filme3.titulo
        ano3.innerHTML =  'Ano: ' + filme3.ano
        genero3.innerHTML =  'Genero: ' + filme3.genero
        div.appendChild(titulo3);
        div.appendChild(ano3);
        div.appendChild(genero3);
        mostradoFilme = true;
    }
        
}
