/*Reduce
- Retorna um único valor após percorrer todo o array ,
- Aceita 4 parâmetros:
 acumulador, valor atual, índice e array
  */

 const list = [1, 2, 3, 4, 5,6,7,8,9,10];
    const sum = list.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);



    /*exemplo 2*/
    const companies = [
        { name: 'Samsung', marketPrice: 1000, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
        { name: 'Microsoft', marketPrice: 2000, CEO: 'Satya Nadella', foundedOn: 1975 },
        { name: 'Facebook', marketPrice: 3000, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
        {name: 'Apple', marketPrice: 4000, CEO: 'Tim Cook', foundedOn: 1976 },
        {name:'Intel', marketPrice: 5000, CEO: 'Pat Gelsinger', foundedOn: 1968 }

    ];
    const marketPrice = companies.reduce((accumulator, value) => {
        return accumulator + value.marketPrice;
    }, 0);
    console.log(marketPrice);
    /*exemplo carrinho de compras*/

    const cart = [
        { productName: 'Abóbora', valuePerKg: 20, kg: 1 },
        { productName: 'Pepino', valuePerKg: 40, kg: 2 },
        { productName: 'Morango', valuePerKg: 60, kg: 1 },
        { productName: 'Abacaxi', valuePerKg: 10, kg: 6 },
    ];
    const finalValue = cart.reduce((accumulator, value) => {
        const valueTotal = value.valuePerKg * value.kg;
        return accumulator + valueTotal;
    }, 0);
    console.log(`O valor final é: ${finalValue}`);