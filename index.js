// api disponibilizada pelos agentes de usuário, para manipular tanto a janela quanto o próprio documento
// api irá permitir a interação com o documento e a interface do usuário dispinível na tela dele

// window é o objeto raíz do BOM Browser Object Model e contém todos os elementos globais da pagina
// e elementos disponibilizados para trabalhar como uma api

window.document; // não é necessário usar window

// um dos objetos mais importanto de se trabalhar, é o document, que contém todo conteúdo html, e a partir 
// do document é chamado de DOM Document Object Model

document.documentElement; // pega o documento html inteiro
document.head; // pega o head do documento html
document.body; // pega o body do documento html

document.children; // vai retornar um HTMLCollection que é uma lista de elementos filhos de document em iterables
// cada filho em uma posição do índice

document.body.children; // busca os filhos de body, o que retorna os elementos de body
// tbm é possivel passar o numero do indice document.body.children[0]

const sf = document.body.children[1];
console.log(sf.id); // após declarar a variavel com valor do elemento, é possível ter acesso a uma série
// de comandos, nesse caso, está sendo procurado o id do segundo elemento de body, que se não existir,
// não será exibido

const filhos = Array.from(document.body.children); // apesar de parecidos o elemento não é um array e sim um
// array-like, com isso é necessário utilizar a conervsão para array caso queira ter as funções disponíveis
// em arrays

/*
for (const f of filhos){
    console.log(f);
} // vai exibir todos os filhos de body
*/

filhos.forEach(f => console.log(f));

const filhos2 = document.body.childNodes; // funciona da mesma forma, porém não é necessário converter para array,
// pois ele ja é, outra diferença é que ele identifica além das tags, também as quebras de linha do documento 

const x = document.body.children[1].children; // uma forma de acessar o que tem dentro da div paragrafos
// nesse caso, a constante vai conter os filhos dos filhos do segundo elemento do body

console.log(x);

const paragrafos = document.querySelectorAll("#paragrafos > *"); // outra forma de buscar os filhos de paragrafos
// nesse comando é passado o seletor em string do que será buscado
// é a mesma sintaxe utilizada no css, com isso é possível pegar diversos elementos como todos os p do
// documento por exemplo

console.log(paragrafos);

paragrafos.forEach(p => console.log(p)); // é possível usar forEach pois é um NodeList
// nessa situação será exebido o conteúdo do paragrafo

const lista = document.querySelector("#paragrafos"); // retorna o primeiro valor true que ele encontrar
// geralmente utilizado para buscar id

const lista2 = document.getElementById('paragrafos'); // funciona da mesma forma, porem não é necessário
// passar o caractere do id. Esse comando existe apenas no contexto de documnet, enquanto o querySelector/All
// existe em qualquer contexto

const lista3 = document.querySelector('div');

const pars = lista3.querySelectorAll('p'); // é possivel fazer dessa forma tambem, chamando a função em uma 
// variável ja filtrata anteriormente

const p1 = pars[0];

p1.innerHTML; // innerHTML é todo conteúdo html que está dentro do elemento que chamou o comando
// nesse caso tudo que está dentro do paragrafo

p1.innerHTML = "Dev Web"; // é possível alterar seu valor que não será mudado aqui no documento,
// porém na árvore de objetos ele muda. O valor do documento é calculado inicialmente e 
// depois alterado dinamicamente

p1.innerHTML = "Dev <strong>Web</strong>"; // também é possível passar tags html dentro que serão processadas
// ele realiza o parse e altera o valor no DOM

p1.textContent = "Dev <strong>Web</strong>"; // o textContent não leva em consideração as tags, ele exibe 
// tudo como texto

p1.textContent; // também consegue exibir o conteúdo inteiro como texto

p1.outerHTML; // diferente do innerHTML ele inclui sua própria tag

p1.outerHTML = "<div>Teste</div>"; // forma, ele pode substituir o elemento

const imagem = document.querySelector("#image");

imagem.alt;  // depois selecionar um elemento é possível acessa também seus atributos, como alt, href, etc.

imagem.alt = "novo nome"; // com isso, também é possível alterar seus valores

imagem.id; // buscando id

imagem.getAttribute("id"); // busca o valor do atributo, passado entre aspas

imagem.setAttribute("alt", "trocado"); // o setAttribute altera o valor do atributo, sendo necessario passar 
// o nome do atributo entre aspas e o valor que deve ocupá-lo

imagem.attributes; // todos os atributos do elemento em lista

imagem.attributes[2].name; // pegando o nome do atributo no indice 2

imagem.attributes[2].value; // pegando o valor do atributo no indice 2

const listaLinguagens = document.getElementById('linguagens');

Array.from(listaLinguagens.children).forEach(l => console.log(l.dataset.componente));

const primeiroItem = listaLinguagens.children[0];

/*
<li data-componente="PC1">C#</li> 
<li data-componente="PC2">HTML</li>
<li data-componente="PC2">CSS</li>
<li data-componente="PC2">JavaScript</li> */

// primeiroItem.dataset.component; // o dataset é utilizado para pegar os atributos que você criou
// escrevendo "data-" em seu inicio. Com isso também é possivel pegar o elemento que deveria dele, sendo
// o atributo criado por você
// seu elemento aparece dentro da coleção dataset

// const destacados = listaLinguagens.querySelectorAll(".destaque"); uma maneira de pegar elementos pela classe 

const itens = listaLinguagens.children;

itens[3].classList; // classList é um array-like que retorna todas as classes contidas no elemento

itens[3].classList.add("sublinhado"); // adiciona uma classe ao elemento
// nesse caso, agora ele também faz parte da classe sublinhado

itens[3].classList.add("destaque"); // agora o elemento faz parte das duas classes 
// tudo ocorre de forma dinamica

itens[3].classList.remove("destaque"); // também é possível remover a classe

// entrou 
itens[3].classList.toggle("destaque"); // toggle alterna, se o elemento já estiver dentro da classe ele tira,
// se não, ele adiciona

// saiu
itens[3].classList.toggle("destaque"); // toggle alterna, se o elemento já estiver dentro da classe ele tira,

Array.from(itens).forEach(i => i.classList.add("nova_classe")); // dessa forma é possivel adicionar uma classe em todos
// os elementos
// note que neste caso, essa classe não existe, porém é possível passar seu nome, e a partir daqui
// ela existe e os elementos ja fazem parte dela, o que nos permite criar uma estilização no css, desta classe
// sem nem mesmo declará-la no html

itens[3].style; // esse comando retorna todas as propriedades do css, as quais estarão alteradas, apenas
// nas que forem definidas um estilo no elemento

itens[3].style.fontSize = "2em"; // assim como também é possível alterar as propriedades do elemento
// porem essa forma desse ser evitada, sendo preferível criar uma classe que contenha as estilizações
// a não ser que seja necessário retornar um valor calculado, coisa que não é possível no css

const listaLin = document.getElementById('lin');

const cs = document.createElement('li'); // possível criar uma tag do zero dentro do document

cs.innerHTML = "C#"; // aqui é adicionado o conteúdo de dentro da li criada
cs.classList.add('destaque'); // adiciona a classe para cs

listaLin.append(cs); // e é aqui que é adicionado o elemento dentro do id lin
// tudo foi criado pelo JS, como se tivesse feito no html
// na maioria das vezes ela não é necessária

listaLin.insertAdjacentHTML("beforeend", '<li class="destaque">Teste</li>'); // colocado em aspas simples, pelo uso das duplas
// essa forma é mais utilizada, e consiste em colocar um elemento html
// no nosso elemento.
// São passados 2 paremetros em string, onde será colocado e o que sera colocado

/*
opções de posição

beforebegin = antes do próprio elemento indicado 
afterbegin = primeiro elemento dentro do próprio elemento indicado

beforeend = o último elemento da lista
afterend = o primeiro elemento fora da lista, no fim dela
*/

// forma muito mais facil de fazer

const linguagemPreferida = "JavaScript";

listaLin.insertAdjacentHTML("beforeend", `<li>${linguagemPreferida}</li>`); // passar um template também
// é possível, aumentando ainda mais as opções de trabalho

listaLin.children[1].remove(); // remove o elemento selecionado

// listaLin.remove(); // remove todos os elementos

const botao = document.getElementById('clique_aqui');
const outro = document.getElementById('outro');

// eventos são fatos que ecorrem dentro da sua página durante sua execução, por exemplo, um button tem um
// evento de click
// a maioria dos elementos tem um evento de quando estover com o mouse em cima dele
// e elementos de texto tem eventos com o teclado, como trecla pressionada, ou foco
// também existem eventos relacionados ao fluxo normal da página como eventos para saber quando a página
// está sendo carregada ou o usuário está saindo da página

const cumprimentar = (e) => alert(e.currentTarget.id); // passando um parametro dentro dessa function, ele 
// automaticamente é preenchido com todas as informações do elemento que realizou o click, com isso, é possivel
// buscar a propriedade dentro deste elemento
// o currentTarget é o próprio elemento, com isso é possível buscar tudo dentro dele, neste caso foi buscado o id

const despedir = () => alert('Tchau!'); 

botao.addEventListener('click', cumprimentar); // addEventListener adiciona um evento ao meu elemento
// é necessário passar o tipo do evento, e o seu manipulador, nesse caso a function

// manipulador = rendlers

botao.addEventListener('click', despedir); // é possível passsar mais de um evento no mesmo elemento
// agora ao clicar uma vez os dois eventos vão acontecer, um seguido do outro

outro.addEventListener('click', cumprimentar); // é possível reutilizar a function, onde agora
// esse elemento também tem uma referência à cumprimentar

const link = document.getElementById('link');
const botao2 = document.getElementById('btn');

let clicouEmLink = (e) => {
    e.preventDefault(); // este comando fala que você quer fazer somente seus comandos, e não os padrões do elemento
    alert('Clicou em link!');
}

link.addEventListener('click', clicouEmLink);

botao2.addEventListener('click', () => link.dispatchEvent(new Event('click'))); // dispatchEvent disparar evento
// é possível disparar um evento de um elemento através de outro

// um grande problema em deixar a referencia ao js no final é o fato de que dependendo da sua lógica
// podem ocorrer erros no código, pelo fato de o script carregar primeiro, antes de alguns elementos
// necessários para o js funcionar. Para resolver isso, é necessário criar um evento no document
// e jogar todo seu código na função que será passada na hora de adicionar o evento

/* exemplo

const inicar = () => {

    TODO O SEU CÓDIGO
}

document.addEventListener('DOMContentLoaded', iniciar);
*/

let atalho = () => window.location.href = 'exemplo.html';