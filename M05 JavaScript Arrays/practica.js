// let numeros = [1,2,19,20,40]

// let acc= []
//    for(mayor of numeros){
//       if(mayor > 18)
//       acc.push(mayor)
// }
// console.log(acc.length)

// //    console.log(acc) 




    function breakStatement(num) {
        // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
        // Guardar cada nuevo valor en un arreglo y retornarlo.
        // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
        // la ejecución y retornar el string: "Se interrumpió la ejecución".
        // [PISTA]: utiliza el statement 'break'. 
        // Tu código:
        let arr = []
        for (let i = 0; i < 10; i++) {
           num = num + 2
           arr.push(num)
           if (num === i) {
              break
           }
           return 
        }
        return arr
     }

//Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista. Después, usa ese índice (que será un número) y devuelve todas las palabras de words que sean más largas (length) que el número del índice.
//Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no



function buscaPalabras(words, word) {
   let largas =[]
    let index = words.indexOf(word)
     for(let palabra of words){
       if (palabra.length > index){
         largas.push(palabra)
       }
     }
       return largas
 }


console.log(buscaPalabras(["hola", "adios", "hasta luego", "hasta mañana"], "hasta luego"))


const consola ={
   marca: "sony",
   modelo: "playstation 5",
   color: "blanco",
   precio: 500,
   juegos: ["fifa", "gta", "call of duty", "fortnite"],
   especificaciones: {
      cpu: "amd",
      gpu: "nvidia",
      ram: "16gb",
      almacenamiento: "1tb"
   },
   encendida: false,   
}

console.log(consola.juegos[2])