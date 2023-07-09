//Desafio 1
/*
 Escribe una función que reciba un arreglo de números y devuelva otro arreglo que
contenga sólo los números pares elevados al cuadrado y que sean mayores que 10.
Aquí tienes un ejemplo de cómo debería funcionar la función:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = obtenerNumerosParesElevadosAlCuadradoMayoresQue10(numeros);
console.log(resultado); // [64, 100, 144, 196, 256]
 */
const numeros=[1,2,3,4,5,6,7,8,9,10];
const contador=(numeros)=>{
    let array=[];
    for(let i=0;i<numeros.length;i++){
        if((numeros[i]%2==0) && (numeros[i]**2>=10)){
            array.push(numeros[i]**2);
        }
    }
    return array;
};
console.log(contador(numeros));