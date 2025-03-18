// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo == ''){
        alert('Por favor, ingrese un nombre.');
    } else {
        amigos.push(nombreAmigo);
        actualizarAmigos();
        limpiarCaja();
    }
}

function actualizarAmigos(){
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");     
        li.innerHTML = amigos[i];
        lista.appendChild(li); 
      }
} 

function sortearAmigo(){
    if (amigos != []) {
        indice = Math.floor(Math.random()*amigos.length);
        amigoSorteado = amigos[indice];
        sorteado = document.getElementById('resultado');
        sorteado.innerHTML = (`El amigo secreto sorteado es: ${amigoSorteado}`);
        amigos = [];
        actualizarAmigos();
    }
}
function limpiarCaja(){
    document.querySelector('#amigo').value = '';

}