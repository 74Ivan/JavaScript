
const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return newValue
}

let myLi = ''
function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
        myLi += `
    
        <li>
        <img src=${product.src} >
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>
    `

    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newPraces = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,


    }))
    console.log(newPraces)

    showAll(newPraces)
}

function SumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
    
        <li>
        
            <p> O Valor total é: R$ ${formatCurrency(totalValue)}</p>
        </li>
    `
  
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterJustVegan)
}
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', SumAllItems)
buttonFilterAll.addEventListener('click', filterAllItems)
