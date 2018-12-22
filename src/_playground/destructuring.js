const params=['desc', 'color']
const [order, orderBy] = params

const person= {
    name: 'Tymek',
    age: 44
}

const {name, age, sex = 'Unspecified'} = person
console.log(`${name} age is ${age} and sex is: ${sex}`)

