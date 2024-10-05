const arrayComidasfavoritas = ["Lasanha","Churrasco","Arroz de forno","Carreteiro","Pure de batata"] 

console.log(arrayComidasfavoritas);

console.log("Essas  são as minhas comidas preferidas:");

arrayComidasfavoritas.forEach ((comida) => { console.log(comida);});

let  comidaPreferida =  prompt("Qual é a sua comida preferida?");

arrayComidasfavoritas[1] =  comidaPreferida;

console.log("Nova lista de comidas preferidas:");
console.log(comidaPreferida);
arrayComidasfavoritas.forEach ((comida) => { console.log(comida);});






