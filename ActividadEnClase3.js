// Utilizamos  ciclo for donde definimos limites
for (let i = 1; i<=100; i++) {
    // Primera condicion para multiplos de 3
    if (i % 3 === 0){
        console.log('fizz')
    // Segunda condicion para multiplos de 5
    }else if (i % 5 === 0){
            console.log('buzz')
    // Tercera condicion para numeros multiplos de 3 Y 5
    }else if (i % 3 === 0 && 5 === 0){
            console.log('fizzbuzz')
    // Ultima condicion en caso de no cumplirse ninguna de las anteriores
    }else
    // Se imprimen los resultados
            console.log(i)
    }