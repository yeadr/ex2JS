function ex1(nom, cognoms) {
    console.log("Ex 1:")
    console.log(`${nom} ${cognoms}`)
}

ex1("Yussef", "El Alami")

function ex2(variable) {
    console.log("")
    console.log("Ex 2:")
    console.log(typeof variable)
}

ex2(33)

function ex3() {
    console.log("")
    console.log("Ex 3:")
    const data = Date()
    console.log(data)
}

ex3()

function ex4() {
    let varInterna = "Hola"
}
console.log("")
console.log(typeof varInterna)

function ex5(string) {
    console.log("")
    console.log("Ex 5:")
    let contador = 0
    for (const letra of string) {
        if(letra.toLowerCase() == "a" || letra.toLowerCase() == "e" || 
            letra.toLowerCase() == "i" || letra.toLowerCase() == "o" || 
            letra.toLowerCase() == "u")
            {
            contador++
        }
    }
    console.log(contador)
}

ex5("Esternocleidomastorideo")

function ex6(a, b, c = 47) {
    console.log("")
    console.log("Ex 6:")
    return a + b + c
}

console.log(ex6(1, 3))


const ex7 = () => {
    console.log("")
    console.log("Ex 7:")
    ex3()
    return ex6(3, 7, 99)
}

console.log(ex7())

const ex8 = (a, b) => {
    console.log("")
    console.log("Ex 8:")
    return a === 30 || b === 30 || (a + b === 30)
}

console.log(ex8(15,15))

const ex9 = function(a, b) {
    console.log("")
    console.log("Ex 9:")
    return a === 30 || b === 30 || (a + b === 30)
}

console.log(ex9(1,83))

const ex10 = (a, b) => {
    console.log("")
    console.log("Ex 10:")
    return a === b && typeof a === typeof b
}

console.log(ex10(false, false))

const ex11 = (num) => {
    console.log("")
    console.log("Ex 11:")
    return parseFloat(Math.sqrt(num).toFixed(2))
}

console.log(ex11(17))

const ex12 = (str) => {
    console.log("")
    console.log("Ex 12:")
    return str.toLowerCase()
}

console.log(ex12("WHAT ARE YOU DOING?"))

const ex13 = (a, b) => {
    console.log("")
    console.log("Ex 13:")
    return (a === null ? "" : a ) + (b === null ? "" : b)
}

console.log(ex13(null, 32))

const ex141 = (frase, paraula) => {
    console.log("")
    console.log("Ex 14.1:")
    return frase.length - frase.indexOf(paraula)
}

console.log(ex141("No vull mes pomes", "vull"))

const ex142 = (frase, paraula) => {
    console.log("")
    console.log("Ex 14.2:")
    const posicio = ex141(frase, paraula)
    return frase.slice(frase.length - posicio)
}

console.log(ex142("El absoluto dios de la hipermuerte", "de"))

const ex15 = (x) => {
    console.log("")
    console.log("Ex 15:")
    return x + x + x
}

console.log(ex15("Loopdestringxdxd"))
console.log(ex15(5))