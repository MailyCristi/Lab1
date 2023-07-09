//DESAFIO 3
/*
Escribe una función que reciba una cadena de texto y devuelva un objeto que contenga el
número de ocurrencias de cada letra en la cadena.
Aquí tienes un ejemplo de cómo debería funcionar la función:
const texto = 'Hola, mundo!';
const resultado = obtenerFrecuenciaLetras(texto);
console.log(resultado);
// {
// H: 1,
// o: 2,
// l: 1,
// a: 1,
// ',': 1,
// ' ': 1,
// m: 1,
// u: 1,
// n: 1,
// d: 1,
// '!': 1,
// }
*/
const texto1='Hola, mundo!';
const resultado=(textoz)=>{
    let texto=textoz;
    let cont=0;
    const arraynuevo=[];
    for(let i=0;i<texto.length;i++){
        if(texto[i]!='-'){
            arraynuevo.push(texto[i]);
            cont++;
            for(let j=i+1;j<texto.length;j++){
                if(arraynuevo[cont-1]==texto[j] &&  i!=texto.length-1){
                    texto=texto.replace(arraynuevo[cont-1],'-');
                    texto=texto.replace(arraynuevo[cont-1],'-');
                }
            }
        }
    }
    let contr=[];
    for(let i=0;i<arraynuevo.length;i++){
        cont=0;
        for(let j=0;j<textoz.length;j++){
            if(arraynuevo[i]==textoz[j]){
                cont++;
            }
        }
        contr.push(cont);
    }
    let ok=[];
    for(let i=0;i<arraynuevo.length;i++){
        const x=[arraynuevo[i],contr[i]];
        ok.push(x);
    }
    return ok;
}
console.log(resultado(texto1));
console.log(texto1);