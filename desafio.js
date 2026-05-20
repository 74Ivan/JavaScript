/* //Adicione 10% do valor do mercado a todas companhias -> MAP
// Filtrar somente companhias fundadas abaixo de 1990 -Filter
// Somar o valor de mercado das restantes -> Reduce
*/


const companies = [
   { name: 'Samsung', marketPrice: 1500, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
   { name: 'Microsoft', marketPrice: 2000, CEO: 'Satya Nadella', foundedOn: 1975 },
   { name: 'Facebook', marketPrice: 3000, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
   { name: 'Apple', marketPrice: 4200, CEO: 'Tim Cook', foundedOn: 1976 },
   { name: 'Intel', marketPrice: 5000, CEO: 'Pat Gelsinger', foundedOn: 1968 },
   { name: 'Google', marketPrice: 6000, CEO: 'Sundar Pichai', foundedOn: 1998 },
   { name: 'Amazon', marketPrice: 7000, CEO: 'Andy Jassy', foundedOn: 1994 },
   { name: 'Tesla', marketPrice: 8000, CEO: 'Elon Musk', foundedOn: 2003 },
   { name: 'Netflix', marketPrice: 9000, CEO: 'Reed Hastings', foundedOn: 1997 },
   { name: 'Twitter', marketPrice: 10000, CEO: 'Jack Dorsey', foundedOn: 2006 }
];
const add10Percent = company => {
   company.marketPrice = company.marketPrice - company.marketPrice / 10
   return company
}


const filterCompanies = (company => company.foundedOn < 1980)
const calculeteTotalMarketPrice = (acc, company) => acc + company.marketPrice

const newCompanies = companies

   .map(add10Percent)
   .filter(filterCompanies)
   .reduce(calculeteTotalMarketPrice, 0)


console.log(newCompanies);