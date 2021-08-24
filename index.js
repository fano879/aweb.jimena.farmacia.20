function saveNote(){

    var nota = document.getElementById("nota").value;

    var col = document.getElementById("tvNote");
    
    var f = new Date();
    var divCard = document.createElement("div")
    var divCarBody = document.createElement("div")
    var blockquote = document.createElement("blockquote");
    var p = document.createElement("p");
    var footer = document.createElement("footer");
    var br = document.createElement("br");
    var texto = document.createTextNode(nota);
    var txtFecha = document.createTextNode(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear() + ", " + f.getHours() + ":" + f.getMinutes() + " h");
    divCard.setAttribute("style", "margin-top: 1em;");
    
    
    col.appendChild(divCard);
    divCard.setAttribute("class", "card bg-light");
    
    divCard.appendChild(divCarBody);
    divCarBody.setAttribute("class", "card-body");
    
    divCarBody.appendChild(blockquote);
    blockquote.setAttribute("class", "blockquote");
    
    blockquote.appendChild(p);
    p.appendChild(texto);
    
    blockquote.appendChild(footer);
    footer.setAttribute("class", "blockquote text-right");
    footer.appendChild(txtFecha);
    
    document.getElementsByClassName("form-control txtNota")[0].value = "";
    }
var recupera ={
    medico:"",
    cedulaprofe:"",
    paciente:"",
    fechareceta:"",
    fechaexp:"",
    medicamentosentre:"",
    
    
};

function actualizar(){
    console.log("Se llamo a actualizar");
    recupera.medico =document.getElementById("medico").value;
    recupera.cedulaprofe=document.getElementById("cedulaprofe").value;
    recupera.paciente=document.getElementById("paciente").value;
    recupera.fechareceta=document.getElementById("fechareceta").value;
    recupera.fechaexp=document.getElementById("fechaexp").value;
    recupera.medicamentosentre=document.getElementById("medicamentosentre").value;

    
    actualizarFicha();
    

}

function actualizarFicha(){
    document.getElementById("titulo").innerHTML=recupera.medico;
    document.getElementById("cedulas").innerHTML=recupera.cedulaprofe;
    document.getElementById("nombre-paciente").innerHTML=recupera.paciente;
    document.getElementById("fechat").innerHTML=recupera.fechareceta;
    document.getElementById("total").innerHTML=recupera.fechaexp; 
    document.getElementById("descrip").innerHTML=recupera.medicamentosentre; 

    }

var btnCambiar=document.querySelector(".btn-cambiar");
console.log(btnCambiar);
btnCambiar.addEventListener("click", ()=>{
    document.querySelector(".btn-success").innerHTML="Agregar";
});
function Eliminar() {
  
    document.getElementById("medico").value = "";
    document.getElementById("cedulaprofe").value="";
    document.getElementById("paciente").value="";
    document.getElementById("fechareceta").value="";
    document.getElementById("fechaexp").value="";
    document.getElementById("medicamentosentre").value="";
  }
