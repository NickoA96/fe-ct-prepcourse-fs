/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   arr1 =[]
   for(var obj in objeto){
      if(objeto.hasOwnProperty(obj)){
         arr1.push([obj, objeto[obj]])
      }
   }
   return arr1
   // Otra forma de hacerlo:

   // arr=[]
   // for(let i = 0; i < Object.keys(objeto).length; i++){
   //    arr.push([Object.keys(objeto)[i], Object.values(objeto)[i]])
   // }
   //    return arr

}



function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const resultado = {};

   for (let letra of string) {
     if (letra !== ' ') {
       if (resultado.hasOwnProperty(letra)) {
         resultado[letra]++;
       } else {
         resultado[letra] = 1;
       }
     }
   }
 
   return resultado;


}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const mayuscula=[]
   const minúscula=[]

   for(let i = 0; i<string.length; i++){
      if (string[i]=== string[i].toUpperCase()){
         mayuscula.push(string[i])
      }else {
         minúscula.push(string[i])
      }
   }
   return mayuscula.join("") + minúscula.join("")
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arr= []
   let arrFrase = frase.split(" ")

      for (let palabra of arrFrase){
         arr.push(palabra.split("").reverse().join(""))
      }
   return arr.join(" ")

}


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   
   let string = numero.toString().split("").reverse()
   
   if (numero == string.join("")){
      return "Es capicua"
   }else {
      return "No es capicua"
   }
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let a = string.split("")
   let arr = []
   for (letra of a){
      if (letra != "a" && letra != "b" && letra != "c"){
         arr.push(letra)
      }
   }
   return arr.join("")
}


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   let arr = arrayOfStrings.sort((a , b) => a.length - b.length)

   return arr
}



function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arr=[]
   for (let e1 of array1){
      for (let e2 of array2){
         if (e1 === e2){
            arr.push(e1)
         }
      }
   }
   return arr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
