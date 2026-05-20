const myArray = [1, 2, 3, 4, 5]

myArray.push(6) // Adiciona o número 6 ao final do array
console.log(myArray) // Imprime o array atualizado: [1, 2, 3, 4, 5, 6]

myArray.pop() // Remove o último elemento do array

myArray.sort = ['limao', 'laranja', 'abacaxi'] // Atribui um novo array à propriedade sort do array original
myArray.delete = ['banana', 'uva'] // Atribui um novo array à propriedade delete do array original  



console.log(myArray.sort) // Imprime o comprimento do array atualizado: 5

const user = [
    {name: 'John', credit: 300},
    {name: 'Jane', credit: 500},
    {name: 'Doe', credit: 200},
    {name: 'Smith', credit: 400}
]
const isTrue = user.some(user => user.credit > 400) // Verifica se algum usuário tem crédito maior que 400
console.log(isTrue) // Imprime true, pois alguns usuários têm crédito maior que 400