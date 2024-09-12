let pantalla = document.getElementById('pantalla');
let agregar = (valor) => pantalla.value +=valor;
let borrar = () => pantalla.value = "";

function calcular(){
    const valorPantalla = pantalla.value;
    const resultado = eval(valorPantalla);
    pantalla.value = resultado;
}


