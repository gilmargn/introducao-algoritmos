var trigonometria=prompt("Tabela trigonométrica\nQual função trigonométrica?\n1.Seno\n2.Cosseno\n3.tangete");
var angulo= prompt("Digite o ângulo");
switch(trigonometria){
    case'1':
    alert(Math.sin((angulo*Math.PI)/180).toFixed(2));break;
    case'1':
    alert(math.cos((angulo*Math.PI)/180).toFixed(2));break;
    case'3':
    alert(Math.tan((angulo*Math.PI)/180).toFixed(2));break;
    default:
        alert("0pção inválida");
}