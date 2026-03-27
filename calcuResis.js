function calcuResis(){
    let faixas = parseInt(prompt("Quantas faixas:\n[1] para 4\n[2] para 5:"));
    let cor, valorResis = 0;

    switch(faixas){
        case 1:
            for(let cont = 0; cont < 4; cont++){
                cor = parseInt(prompt("Digite a cor da " + cont + "faixa\n[1] para preto\n[2] para marrom\n[3] para vermelho\n[4] para laranja\n[5] para amarelo\n[6] para verde\n[7] para azul\n[8] para violeta\n[9] para cinza\n[10] para branco\n[11] para dourado\n[12] para prateado\n"));
                
                switch(cor){
                    case 1:
                        if(cont < 4){
                            valorResis += 0;
                        } else{
                            valorResis *= 1;
                        }
                        break;
                    case 2:
                        if(cont < 4){
                            valorResis += 1;
                        } else{
                            valorResis *= 10;
                        }                        
                        break;
                    case 3:
                        if(cont < 4){
                            valorResis += 2;
                        } else{
                            valorResis *= 100;
                        }
                        break;
                    case 4:
                        if(cont < 4){
                            valorResis += 3;
                        } else{
                            valorResis *= 1000;
                        }
                        break;
                    case 5:
                        if(cont < 4){
                            valorResis += 4;
                        } else{
                            valorResis *= 10000;
                        }
                        break;
                    case 6:
                        if(cont < 4){
                            valorResis += 5;
                        } else{
                            valorResis *= 100000;
                        }
                        break;
                    case 7:
                        if(cont < 4){
                            valorResis += 6;
                        } else{
                            valorResis *= 1000000000;
                        }
                        break;
                    case 8:
                        if(cont < 4){
                            valorResis += 7;
                        } else{
                            valorResis *= 10000000000;
                        }
                        break;
                    case 9:
                        if(cont < 4){
                            valorResis += 8;
                        } else{
                            alert("ERROR"); 
                        }
                        break;
                    case 10:
                        if(cont < 4){
                            valorResis += 9;
                        } else{
                            alert("ERROR"); 
                        }
                        break;
                    case 11:
                        if(cont < 4){
                            alert("ERROR");
                        } else{
                            valorResis *= 0.1;
                        }
                        break;
                    case 12:
                        if(cont < 4){
                            alert("ERROR"); 
                        } else{
                            valorResis *= 0.01;
                        }
                        break;
                }
            }
            break;
        case 2:
            for(let cont = 0; cont < 5; cont++){
                cor = parseInt(prompt("Digite a cor da " + cont + "faixa\n[1] para preto\n[2] para marrom\n[3] para vermelho\n[4] para laranja\n[5] para amarelo\n[6] para verde\n[7] para azul\n[8] para violeta\n[9] para cinza\n[10] para branco\n[11] para dourado\n[12] para prateado\n"));
                                
                switch(cor){
                    case 1:
                        if(cont < 4 && cont != 5){
                            valorResis += 0;
                        } else if(cont == 4){
                            valorResis *= 1;
                        }
                        break;
                    case 2:
                        if(cont < 4 && cont != 5){
                            valorResis += 1;
                        } else if(cont == 4){
                            valorResis *= 10;
                        }                   else{
                          alert("Tolerancia = +/- 1%");  
                        }      
                        break;
                    case 3:
                        if(cont < 4 && cont != 5){
                            valorResis += 2;
                        } else if(cont == 4){
                            valorResis *= 100;
                        } else{
                           alert("Tolerancia = +/- 2%"); 
                        }
                        break;
                    case 4:
                        if(cont < 4 && cont != 5){
                            valorResis += 3;
                        } else if(cont == 4){
                            valorResis *= 1000;
                        }
                        break;
                    case 5:
                        if(cont < 4 && cont != 5){
                            valorResis += 4;
                        } else if(cont == 4){
                            valorResis *= 10000;
                        } 
                        break;
                    case 6:
                        if(cont < 4 && cont != 5){
                            valorResis += 5;
                        } else if(cont == 4){
                            valorResis *= 100000;
                        } else{
                          alert("Tolerancia = +/- 0.5%");  
                        }
                        break;
                    case 7:
                        if(cont < 4 && cont != 5){
                            valorResis += 6;
                        } else if(cont == 4){
                            valorResis *= 1000000000;
                        } else{
                          alert("Tolerancia = +/- 0.25%");  
                        }
                        break;
                    case 8:
                        if(cont < 4 && cont != 5){
                            valorResis += 7;
                        } else if(cont == 4){
                            valorResis *= 10000000000;
                        } else{
                          alert("Tolerancia = +/- 0.1%");  
                        }
                        break;
                    case 9:
                        if(cont < 4 && cont != 5){
                            valorResis += 8;
                        } else if(cont == 4){
                            alert("ERROR"); 
                        } else{
                            alert("Tolerancia = +/- 0.5%");
                        }
                        break;
                    case 10:
                        if(cont < 4 && cont != 5){
                            valorResis += 9;
                        } else if(cont == 4){
                            alert("ERROR"); 
                        }
                        break;
                    case 11:
                        if(cont < 4 && cont != 5){
                            alert("ERROR");
                        } else if(cont == 4){
                            valorResis *= 0.1;
                        } else{
                          alert("Tolerancia = +/- 5%");  
                        }
                        break;
                    case 12:
                        if(cont < 4 && cont != 5){
                            alert("ERROR"); 
                        } else if(cont == 4){
                            valorResis *= 0.01;
                        } else{
                           alert("Tolerancia = +/- 10%"); 
                        }
                        break;
            }
        }
            break;
    }
}