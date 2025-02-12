// Ejercicios
console.log(typeof 42);          // numero
console.log(typeof 'Veinticinco'); // string
console.log(typeof -666);         // numero
console.log(typeof true);         // boleano
console.log(typeof 0);            // numero
console.log(typeof "");           // string
console.log(typeof null);         // object
console.log(typeof undefined);    // undefined
console.log(typeof FALSE);        // undefined (FALSE no está definido, debería ser false en minúsculas)

// Ejemplos adicionales
console.log(typeof 3.14);         // numero
console.log(typeof 'Hola Mundo'); // string
console.log(typeof {}); //object
console.log(typeof false); //boleano
console.log(typeof Infinity); //numero
console.log(typeof infinity); //undefined

//Ejercicio en clase
//App para validar entrada al parque tematico

//1. edad y altura, tener 12 años y medir mas de 140 cm
//2. pago o pase, debe haber hevho el pago de $20 o tener un pase VIP
//3. condicion de salud, No debe tener restricciones medicas
//4. acompañante, si el visitante es menor de 16 años debe estar acompañado de un adulto

let edad = Number(prompt('ingresa tu edad'))
let altura = Number(prompt('ingresa tu altura en cm'))
let pago = prompt('Hiciste el pago de la entrada? si - no'). toLocaleLowerCase()
let pase = prompt('tienes un pase VIP? si - no'). toLocaleLowerCase()
let salud = prompt('tienes alguna condicion medica? si - no'). toLocaleLowerCase()

if(edad >= 12 && altura >= 140){
    if(edad < 16){
        let acompañante = prompt('Eres menor de 16, te acompaña un adulto? si - no'). toLocaleLowerCase()
        if(acompañante === 'si'){
            console.log('puedes ingresar');
        }
        else{
            console.log('ya que eres menor y no te acompana un adulto, no puedes ingresar');
        }
        }
} 