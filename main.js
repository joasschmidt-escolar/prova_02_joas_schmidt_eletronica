let continua = true;

while(continua){
    let escolha = parseInt(prompt("Digite\n[0] para sair\n[1] para conversão de unidades\n[2] para cálculo de resistores\n[3] para calculo de consumo de energia elétrica\n[4] para lei de ohm\n[5] para Req de resistores"));

    switch(escolha){
        case 0: 
            alert("Agradeço a preferência")
            continua = false;
            break;
        case 1:
            conversaoUni();
            break;
        case 2:
            calcuResis();
            break;
        case 3:
            consuEnerEle();
            break;
        case 4:
            leiDeOhm();
            break;
        case 5:
            reqDeResistores();
    }
}