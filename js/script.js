function agregarelemento(){
    var micajadetexto= document.getElementById("idele");
    var ul = document.getElementById("miul");

    var li = document.createElement("li");
    var texto_li = document.createTextNode(micajadetexto.nodeValue.split());
    
    li.appendChild(texto_li);
    ul.appendChild(li);
}