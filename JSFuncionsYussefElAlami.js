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

console.log(ex8(15,1))