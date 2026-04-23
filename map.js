const number = [1, 2, 3, 4, 5];
 const double = number.map((item)=> item * 2);
 
 const lista = [
  {name: 'João', vip: true},
  {name: 'Maria', vip: false},
  {name: 'Pedro', vip: true},
  {name: 'Ana', vip: false},
  {name: 'Carlos', vip: true},
  {name: 'Luisa', vip: false},
  {name: 'Rafael', vip: true},
  {name: 'Fernanda', vip: false},
  {name: 'Gustavo', vip: true},
  {name: 'Isabela', vip: false}
]
const newLinst = lista.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }
    return newUser;

})
console.log(newLinst)


const studants = [
    {name: 'João', grade: 8},
    {name: 'Maria', grade: 6},
    {name: 'Pedro', grade: 9},
    {name: 'Ana', grade: 7},
    {name: 'Carlos', grade: 5}, 
    {name: 'Luisa', grade: 10},
    {name: 'Rafael', grade: 4},
    {name: 'Fernanda', grade: 9},
]
const newStudants = studants.map(studant => {
    
    
    return {
        name: studant.name,
        status: studant.grade >= 7 ? 'Aprovado' : 'Reprovado'
    }
});
console.log(newStudants);