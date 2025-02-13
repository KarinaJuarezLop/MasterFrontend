//Arreglo de frutas
const frutas = ['uva', 'platano', 'naranja', 'sandia', 'platano', 'uva', 'uva', 'manzana'];
// Objeto para almacenar el conteo
const ConteoDeFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i]; //Primera fruta contada
    if (ConteoDeFrutas[fruta]) {
        ConteoDeFrutas[fruta]++; // si la fruta ya se tomó en cuenta, se añade una mas
    } else {
        ConteoDeFrutas[fruta] = 1; // si la fruta aun no se cuenta, inicia su conteo
    }
}
console.log(ConteoDeFrutas);