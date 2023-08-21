var motoristaA = 0, motoristaB = 0, contNulos =0, contBranco =0;
    do{
        var op = prompt("Digite seu voto")
         switch(op){
            case '1': motoristaA++;break;
            case '2': motoristaB++;break;
            case '': contBranco++;break;
            case 'mostrar': alert("votos\nCarlos = " + 
            motoristaA + "\nRicelli = " + motoristaB + 
            "\nNulos = " + contNulos + "\nBranco = " + contBranco);
            default: contNulos++;
        } 
       
    }while(op!='sair'); document.write("<center><h1> FIM </h1></center>");