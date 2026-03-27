function reqDeResistores(){
    let resistores = parseInt(prompt("Digite:\n[1] para resistores em série\n[2] para resistores em paralelo:"));
    let numResistores = parseInt(prompt("Digite o número de registores:"));
    let req, serie = 0, paralelo = 0, valorDeResis;

    switch(resistores){
        case 1:
            for(let cont = 0; cont < numResistores; cont++){
                valorDeResis = parseInt(prompt("Digite o valor do registor em ohms: "))
                serie +=  valorDeResis;
            }
            alert(serie + "ohms");
            break;
        case 2:
            for(let cont = 0; cont < numResistores; cont++){
                valorDeResis = parseInt(prompt("Digite o valor do registor em ohms: "))
                paralelo +=  1/valorDeResis;
            }
            alert(paralelo)
            break; 
    }
}