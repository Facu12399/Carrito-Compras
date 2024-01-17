//CON CLASES

//Sumar cantidad
const suma = document.getElementsByClassName('suma');
const precio = document.getElementsByClassName('p-producto');
//
//console.log(precio1);
for(let i=0;i<suma.length;i++){
    const cambioplus = () => {
        //Se guarda la cantidad y se va aumentando
        let cantidad = document.getElementsByClassName('parrafo')[i].value;
        cantidad++;
        document.getElementsByClassName('parrafo')[i].value = cantidad;
        //Se saca el precio del producto
        const p_producto = parseFloat(precio[i].innerText);
        let total = p_producto * cantidad;
        //Se crea una nueva variable para sobre-escribir la existente
        const nuevo_precio = document.getElementsByClassName('new-precio')[i];
        parseFloat(nuevo_precio);
        nuevo_precio.innerText = total;
        document.getElementsByClassName('p-producto')[i].style.display = 'none';
        document.getElementsByClassName('new-precio')[i].style.display = 'block';
    }
    suma[i].addEventListener('click',cambioplus);
}

//Restar cantidad
const resta = document.getElementsByClassName('resta');

for(let i=0;i<resta.length;i++){
    const nuevo_precio =document.getElementsByClassName('new-precio');
    const cambioplus = () => {
        let cantidad = document.getElementsByClassName('parrafo')[i].value;
        cantidad--;
        if(cantidad>=1){
            document.getElementsByClassName('parrafo')[i].value = cantidad;
            cantidad--;
            let total = parseFloat(nuevo_precio[i].innerText);
            const p_producto = parseFloat(precio[i].innerText);
            total = total - p_producto;
            nuevo_precio[i].innerText = total;
        } 
    }
    resta[i].addEventListener('click',cambioplus);
}

//Agregar al carrito y que se vea en el encabezado
/*
const boton = document.getElementsByClassName('btn-agree');
const carrito = document.getElementById('carrito');
const lista_compras = document.getElementById('compras');
let botonagregado = 1;

for(let i=0;i<boton.length;i++){
    const circle = () => {
        if(botonagregado == 1){
            document.getElementById('circle-1').style.display= 'inline-block';
            document.getElementById('item-lista-1').style.display= 'block';
            botonagregado++;
        } else if(botonagregado == 2){
            document.getElementById('circle-1').style.display= 'none';
            document.getElementById('circle-2').style.display= 'inline-block';
            botonagregado++;
        } else if(botonagregado == 3){
            document.getElementById('circle-2').style.display= 'none';
            document.getElementById('circle-3').style.display= 'inline-block';
            botonagregado++;
        } else if(botonagregado == 4){
            document.getElementById('circle-3').style.display= 'none';
            document.getElementById('circle-4').style.display= 'inline-block';
            botonagregado++;
        } else if(botonagregado == 5){
            document.getElementById('circle-4').style.display= 'none';
            document.getElementById('circle-5').style.display= 'inline-block';
            botonagregado++;
        } else if(botonagregado == 6){
            document.getElementById('circle-5').style.display= 'none';
            document.getElementById('circle-6').style.display= 'inline-block';
            botonagregado++;
        } else if(botonagregado == 7){
            document.getElementById('circle-6').style.display= 'none';
            document.getElementById('circle-7').style.display= 'inline-block';
            botonagregado++;
        } else if(botonagregado == 8){
            document.getElementById('circle-7').style.display= 'none';
            document.getElementById('circle-8').style.display= 'inline-block';
            botonagregado++;
        } else if(botonagregado == 9){
            document.getElementById('circle-8').style.display= 'none';
            document.getElementById('circle-9').style.display= 'inline-block';
            botonagregado++;
        } else{
            document.getElementById('circle-9').style.display= 'none';
            document.getElementById('circle-10').style.display= 'inline-block';
            botonagregado++;
        }

        const enter = () =>{
            if(lista_compras.style.display == 'none'){
                lista_compras.style.display = 'block';
            } else{
                lista_compras.style.display = 'none'
            }
        }
        carrito.addEventListener('click',enter);
    }
    boton[i].addEventListener('click',circle);
}
*/

/*
const boton = document.getElementsByClassName('btn-agree');
const carrito = document.getElementById('carrito');
const lista_compras = document.getElementById('compras');
let botonagregado = 1;
for(let i=0;i<boton.length;i++){
    const circle = () => {
        if(botonagregado == 1){
            document.getElementById('circle-1').style.display= 'inline-block';
            document.getElementById('item-lista-1').style.display= 'block';
            document.getElementById('item-lista-1').innerHTML=`<p>${cantidad}</p>`;  
            botonagregado++;
        }
    const enter = () =>{
            if(lista_compras.style.display == 'none'){
                lista_compras.style.display = 'block';
            } else{
                lista_compras.style.display = 'none'
            }
        }
        carrito.addEventListener('click',enter);
    }
    boton[i].addEventListener('click',circle);
}
*/

/*
const boton = document.getElementsByClassName('btn-agree');
        const carrito = document.getElementById('carrito');
        const lista_compras = document.getElementById('compras');
        let botonagregado = 1;
        for(let i=0;i<boton.length;i++){
            const circle = () => {
                if(botonagregado == 1){
                    document.getElementById('circle-1').style.display= 'inline-block';
                    document.getElementById('item-lista-1').style.display= 'block';
                    document.getElementById('cantidad-1').innerText=`${cantidad}`;  
                    document.getElementById('precio-1').innerText=`${total}`;
                    botonagregado++;
                } else if(botonagregado == 2){
                    document.getElementById('circle-1').style.display= 'none';
                    document.getElementById('circle-2').style.display= 'inline-block';
                    document.getElementById('item-lista-2').style.display= 'block';
                    document.getElementById('cantidad-2').innerText=`${cantidad}`;
                    document.getElementById('precio-2').innerText=`${total}`;
                    botonagregado++;
                }
            const enter = () =>{
                if(lista_compras.style.display == 'none'){
                    lista_compras.style.display = 'block';
                } else{
                    lista_compras.style.display = 'none'
                }
            }
            carrito.addEventListener('click',enter);
            }
        boton[i].addEventListener('click',circle);
        }
*/
