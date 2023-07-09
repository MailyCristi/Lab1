//Desafio 2
/*
Escribe una función que reciba un arreglo de objetos que representan personas, y devuelva
la persona más joven.
Aquí tienes un ejemplo de cómo debería funcionar la función:
const personas = [
{ nombre: 'Juan', edad: 30 },
{ nombre: 'Ana', edad: 25 },
{ nombre: 'Pedro', edad: 27 },
{ nombre: 'María', edad: 22 },
];
const resultado = obtenerPersonaMasJoven(personas);
console.log(resultado); // { nombre: 'María', edad: 22 }
*/
const personas=[
    {nombre:'Juan',edad:30},
    {nombre:'Ana',edad:25},
    {nombre:'Pedro',edad:27},
    {nombre:'Maria',edad:22},
];
const resultado=(personas)=>{
    let menor=0;
    for(let i=1;i<personas.length;i++){
        if(personas[i].edad<=personas[i-1].edad){
            menor=i;
        }
    }
    return personas[menor]
};
console.log(resultado(personas));
console.log(personas);