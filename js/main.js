let contador = 0;
let costototal = 0;

let element = document.getElementById("totalproducto");
 element.innerHTML="Total en productos:";

let txtNombre = document.getElementById("Name");
// txtNombre.value="Leche Semidescremada";

let txtNumber = document.getElementById("Number");

let preciototal= document.getElementById("preciototal");

// let campos = document.getElementsByClassName("campo");
// campos[0].value = "Leche descremada deslactosada light=Agua";
// console.log(campos[0].value);
// console.log(campos);

// for (let i=0; i<campos.length;i++){
//     campos[i].style.border="red thin solid";
// }

// let spans = document.getElementsByTagName("span");
// for (let i=0;i<spans.length;i++){
//     console.log(spans[i].textContent);
// }

//tablaListaCompras

let tabla = document.getElementById("tablalist");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

// cuerpoTabla[0].innerHTML=<tr>
// <th scope="row">1</th>
// <td>Leche descremada (1Ltr/cu)</td>
// <td>3</td>
// <td>$ 23.00</td>
// </tr>;

function validarnombre() {
    if (txtNombre.value.length <3){
        return false;
    }
    return true;
}

function validarnumero() {
    if (txtNumber.value.length==0) {
        return false; 
    }
    if (isNaN (txtNumber.value)){
        return false;
    }
    if (parseFloat(txtNumber.value)<=0.01) {
        return false;
    }
    return true;
}

let agregar =document.getElementById("btnagregar");

//Opcion recomendada de evento de boton

agregar.addEventListener("click", (event)=>{
    event.preventDefault();
    if ((! validarnombre())||(! validarnumero())) {
        document.getElementById("alertvalidacionestexto").innerHTML="llena los campos";
        document.getElementById("alertavalidaciones").style.display="block";
        if (!validarnombre()) {
            txtNombre.style.border="red thin solid";
        }
        if (!validarnumero()) {
            txtNumber.style.border="red thin solid";
        }
        setTimeout(
            function(){
                document.getElementById("alertavalidaciones").style.display="none";
            },3000
        );
        setTimeout(
            function(){
                txtNombre.style.border="";
            },1000
        );
        return false;
    }
    // txtNombre.style.border="";
    txtNumber.style.border="";
    document.getElementById("alertavalidaciones").style.display="none";
    contador++;
    document.getElementById("contadorproductos").innerHTML=contador;
    let precio= (Math.floor((Math.random() * 50)*100))/100;
    let cantidad = parseFloat(txtNumber.value);
    costototal += (precio*cantidad);
    preciototal.innerHTML = `$ ${costototal.toFixed(2)}`
    let tmp = `<tr>
    <th scope="row">${contador}</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>$${precio}</td>
    </tr>`;

    console.log(tmp);
    cuerpoTabla[0].innerHTML+=tmp;
    txtNombre.value="";
    txtNumber.value="";
    txtNombre.focus();
    } 
);

txtNombre.addEventListener("blur",(event) =>{
    event.target.value = event.target.value.trim();
});

txtNumber.addEventListener("blur",(event) =>{
    event.target.value = event.target.value.trim();
});

// let element = document.getElementById("totalprecio");
// element.innerHTML= "total del precio";

// let txtnombre = document.getElementById("Name");

//     txtnombre.value="leche";
//     console.log(txtnombre.value);

// let campos = document.getElementsByClassName("campo");
// campos[0].value = "leche descremanda "
// console.log(campos[0].value);
// console.log(campos);

// for (let i = 0; i < campos.length; i++) {
//      campos[i].style.border="red thin solid";
    
// }

// let span = document.getElementsByTagName("span");
// for (let i = 0; i < span.length; i++) {
//     console.log(span[i].textContent);
    
// }

// let tabla = document.getElementById("tablalist");
// let cuerpotabla = tabla.getElementsByTagName("tbody");

// cuerpotabla[0].innerHTML= `<tr>
// <th scope="row">1</th>
// <td>leche</td>
// <td>1</td>
// <td>23$</td>
// </tr> `;

//tabla de compras
/* <tr>
<th scope="row">1</th>
<td>leche</td>
<td>1</td>
<td>23$</td>
</tr> */