/*Gerador de 5 números*/ 
function gerarNumeros() {
    let numeros = new Set();
    /*gera numeros aleatórios entre 1 e 80 até que o conjunto tenha 5 numeros*/
    while(numeros.size < 5) {
        let num = Math.floor(Math.random() * 80) + 1;
        numeros.add(num);
    }
    /*converte o arrays e ordena */
    let arrayNumeros = Array.from(numeros).sort((a,b) => a - b);
    /* Exibe na tela*/
    let divs = document.querySelectorAll('.numero');
    arrayNumeros.forEach((num, index) => {
        divs[index].textContent = num;
    });
}   