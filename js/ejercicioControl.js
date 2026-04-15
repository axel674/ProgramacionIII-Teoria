
// Ejercicio 1
console.log("Bienvenido a JS");
let edad = 30;
if(edad >= 18 ){
    console.log('Es mayor de edad');
}
else{
    console.log('Es menor de edad');
}

// Ejercicio 
let nota= 5;
if(nota >= 6){
    console.log('Aprobado');
}
else{
    console.log('Desaprobado');
}

// Ejercicio 3
let usuario = 'admin';
let password = 1234;
if(usuario === 'admin' && password === 1234){
    console.log('Acceso concedido');
}
else{
    console.log('Acceso no autorizado');
}

// Ejercicio 4
let numero = 16;
if(numero % 2 === 0){
    console.log('El numero es par');
} else{
    console.log('El numero es impar');
}

// Ejercicio 5
let dia = 1;
switch(dia){
    case 1: 
    console.log('Lunes');
    break;

    case 2:
    console.log('Martes');
    break;

    case 3:
    console.log('Miercoles');
    break;
    
    default: 
    console.log('Otro dia');
}

// Ejercicio 6
let esMayor;
if(edad >= 18){
    esMayor = true;
    
}
else{
    esMayor = false;
}
console.log(esMayor);