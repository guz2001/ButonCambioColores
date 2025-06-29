let boton= document.getElementById('colores');
let colores=document.getElementById('cambioscolores')

boton.addEventListener('click',function(){
    let actualColor=colores.style.backgroundColor;
    if(actualColor==='black' || actualColor===''){
        colores.styles.backgroundColor='pink';
    }
    else{
        colores.styles.backgroundColor='black';
    }


});