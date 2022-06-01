let element = document.getElementById("totalprecio");
 element.innerHTML="Total en precio:";

let txtNombre = document.getElementById("Name");
// txtNombre.value="Leche Semidescremada";

let txtNumber = document.getElementById("Number");

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

let agregar =document.getElementById("btnagregar");

//Opcion recomendada de evento de boton

agregar.addEventListener("click", (event)=>{
    let precio= Math.random() * 50;
    let tmp = `<tr>
    <th scope="row">1</th>
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