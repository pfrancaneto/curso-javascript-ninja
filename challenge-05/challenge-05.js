/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = [1, 'teste', true, null, '15'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arr(myArr) {
  return myArr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
arr(myArr[2]); // true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(arr, num) {
  return  arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myNewArr = [10, 'Pedro', false, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(myNewArr, 0));
myFunction(myNewArr, 1));
myFunction(myNewArr, 2));
myFunction(myNewArr, 3));
myFunction(myNewArr, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livro) {
  var biblioteca = {
    ratibum: {
      quantidadePaginas: 100,
      autor: 'Kleber',
      editora: 'Globo',
    },
    seculos: {
      quantidadePaginas: 350,
      autor: 'João Kleber',
      editora: 'SBT'
    },
    amorTotal: {
      quantidadePaginas: 50,
      autor: 'Ítalo',
      editora: 'Sportv',
    }
  }
  
  return !livro ? biblioteca : biblioteca[livro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(); 
//{
 //ratibum: { quantidadePaginas: 100, autor: 'Kleber', editora: 'Globo' },
 //seculos: { quantidadePaginas: 350, autor: 'João Kleber', editora: 'SBT' },
 //amorTotal: { quantidadePaginas: 50, autor: 'Ítalo', editora: 'Sportv' }
//}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro ' + bookName + ' tem '+ book(bookName).quantidadePaginas +' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName + ' é '+ book(bookName).autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.');

