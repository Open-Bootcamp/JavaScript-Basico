const persona = {
    nombre: "Gorka",
    edad: 34
}

console.log(persona)

function obtenDobleEdad(edad) {
    return 2 * edad
}

const dobleEdad = obtenDobleEdad(persona.edad)

console.log(dobleEdad)

function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)