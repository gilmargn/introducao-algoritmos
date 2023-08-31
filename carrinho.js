let produto = 0, price =0, qtde = 0, priceFinal = 0;
do{
    price = parseFloat(prompt("Preço"));
    qtde = parseInt(prompt("Quantidade "));
    produto++;
    priceFinal +=price*qtde;

}while(price!=-1);
alert(`Itens no carrinho:${produto}\nPreço total: ${priceFinal}`)