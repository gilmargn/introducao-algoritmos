const ladoA = [];
const ladoB = [];   

function pesoTotal(ladoA){   
    let soma = 0;        
    for(let i of ladoA){
        soma += i;
    }
    return("Peso total :  " + soma*2); 
}
function addAnilhas(ladoA,ladoB){
    let valor = parseFloat(prompt("Digite um peso"));
    ladoA.unshift(valor);
    ladoB.push(valor);
return(" O peso foi adicionado!  Boooooooooooora!");
}

function mostrarAnilhas(ladoA,ladoB){
    return(ladoA + " |-----| " + ladoB);
}

function removerAnilhas(ladoA,ladoB){
    ladoA.shift();
    ladoB.pop();
return("aaaaaaaaaaaaaah Peso removido!"); 
}


do{
var op = prompt("Digite uma opção:\n 0. Peso total\n1. Inserir peso\n 2. Mostrar anilhas\n 3. Remover anilhas\n-1. Para sair")
var soma = 0;
switch(op){
    case '0': alert(pesoTotal(ladoA,soma));break;
    case '1': alert(addAnilhas(ladoA,ladoB)); break;             
    case '2': alert(mostrarAnilhas(ladoA,ladoB));break;
    case '3': alert(removerAnilhas(ladoA,ladoB));break;
    default: alert("Obrigado por utilizar nossos serviços \\-o-/");
}     
}while(op!='-1');