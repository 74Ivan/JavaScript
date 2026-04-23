/*Filter
- Retorna um novo array com os elementos que atendem a uma condição,
- Aceita 2 parâmetros:
 função de teste e o contexto (opcional)
  */
/*
 const list = [1, 2, 3, 4, 5,6,7,8,9,10];
    const evenNumbers = list.filter((value) => value % 2 === 0);
    console.log(evenNumbers);



    /*exemplo 2
    const companies = [
        { name: 'Samsung', marketPrice: 1000, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
        { name: 'Microsoft', marketPrice: 2000, CEO: 'Satya Nadella', foundedOn: 1975 },
        { name: 'Facebook', marketPrice: 3000, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
        {name: 'Apple', marketPrice: 4000, CEO: 'Tim Cook', foundedOn: 1976 },
        {name:'Intel', marketPrice: 5000, CEO: 'Pat Gelsinger', foundedOn: 1968 }

    ];
    const highMarketPriceCompanies = companies.filter((company) => company.marketPrice > 2500);
    console.log(highMarketPriceCompanies);
*/
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 200, 240, 4000];
const newList = list.filter(number => {
    if (number < 100 && number % 2 === 0) return true
    else return false
})
console.log(newList)



const companies = [
        { name: 'Samsung', marketPrice: 1000, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
        { name: 'Microsoft', marketPrice: 2000, CEO: 'Satya Nadella', foundedOn: 1975 },
        { name: 'Facebook', marketPrice: 3000, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
        {name: 'Apple', marketPrice: 4000, CEO: 'Tim Cook', foundedOn: 1976 },
        {name:'Intel', marketPrice: 5000, CEO: 'Pat Gelsinger', foundedOn: 1968 }

    ];
    const newCompanies = companies.filter(company => {
        if (company.marketPrice >3000 && company.foundedOn > 1970 ) return true
        else return false
    })
    console.log(newCompanies)