let array
console.log('a. ', array) // O resultado será undefined , pois o array foi declarado mas não  foi inicializado com nenhum valor.



array = null
console.log('b. ', array) //  O resultado será null , pois o array foi declarado e inicializado com o valor null.


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
console.log('c. ', array.length) //  O resultado será 11 , pois o array foi declarado e inicializado com 11 elementos.


let i = 0 
console.log('d. ', array[i]) //   O resultado será 3 , pois o array foi declarado e inicializado com 11 elementos

array[i+1] = 19 
console.log('e. ', array) //   O resultado será [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] pois o segundo elemento do array foi alterado para 19

const valor = array[i+6] 
console.log('f. ', valor) //    O resultado será 9 , pois o valor do elemento do array na posição 7 foi  atribuído a constante valor.

