/* 6) Escreva um algoritmo para ler as dimensões de um retângulo 
(base e altura), calcular e escrever a área do retângulo. */

var altura = 10;
var base = 5;

dimensao = base * altura;

console.log("Área do retângulo: " + dimensao);


/* 22) Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas. */

var horasTrabalhadasSemana1 = 40;
var horasTrabalhadasSemana2 = 40;
var horasTrabalhadasSemana3 = 40;
var horasTrabalhadasSemana4 = 40;

var totalHoras = (horasTrabalhadasSemana1 + horasTrabalhadasSemana2) 
+ (horasTrabalhadasSemana3 + horasTrabalhadasSemana4);

var salarioHora = 10;
var valorHoraExtra = salarioHora * 0.5;
var semanas = 4;

var horasBase = 40 * semanas;

var salario = horasBase * salarioHora;

if (totalHoras > horasBase){
    let horasExtra = totalHoras - horasBase;
    let valorDasExtras = horasExtra * valorHoraExtra;
    salario += valorDasExtras;
    console.log("O salário é de R$ " + salario);
}else{
    console.log("O salário é de R$ " + salario);
}


/* 62) Ler o número de alunos existentes em uma turma e, após isto, ler as notas destes alunos, calcular e
escrever a média aritmética dessas notas lidas.  */

var alunos = prompt("Quantos alunos existentes na turma?");

var somaNotas = 0;

for(i = 1; i <= alunos; i++){
    var nota = prompt("Digite a nota do " + i + "º aluno: ");
    somaNotas =+ nota; 
}

var media = somaNotas / alunos;

console.log("A média da turma é: " + media);


/* 78) Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em
um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois
escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no
vetor), ou NÃO ACHEI caso contrário.  */

var nomes = [];

for(i = 1; i <= 3; i++){
    nomes = prompt("Digite o " + 1 + "º nome:");
}
console.log("Nomes " + nomes);

var nomeExtra = prompt("Digite o nome para busca:");
console.log(" ");
console.log(nomeExtra);

for(i = 0; i < nomes.length; i++){
    if(nomeExtra == nomes[i]){
        console.log("ACHEI");
    }else{
        console.log("NÃO ACHEI");
    }
}