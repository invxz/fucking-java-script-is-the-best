
function criar() {
    var elementofoda = document.body; 
    var titulo = document.createElement('h1');
    var texto  = document.createTextNode("teste foda pra caralho");
    titulo.appendChild(texto);
    elementofoda.appendChild(titulo);
}

function buttonativado() {
    var fezes = document.getElementById("btn")
    fezes.classList.add("ativado")
    fezes.classList.remove("btn")
    fezes.innerHTML ="Enviado <ion-icon name='checkmark-outline'></ion-icon>"
    
}

