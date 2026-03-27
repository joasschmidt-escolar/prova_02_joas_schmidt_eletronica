function leiDeOhm (){
    let opcoes = parseInt(prompt("O que você quer descobrir:\n[1] para corrente(I)\n[2] para tensão(V ou U)\n[3] para registência(R)\n"));
    let i, v, r;

    switch(opcoes){
        case 1:
            v = parseInt(prompt("De o valor da tensão(V ou U) em volts: "));
            r = parseInt(prompt("De o valor da registência(R) em ohms: "));

            i = v/r;
            alert("Corrente = " + i + "amperes");
            break;
        case 2:
            r = parseInt(prompt("De o valor da registência(R) em ohms: "));
            i = parseInt(prompt("De o valor da corrente(I) em amperes: "));

            v = r * i;
            alert("Tensão = " + v + "volts");
            break;
        case 3:
            v = parseInt(prompt("De o valor da tensão(V ou U) em volts: "));
            i = parseInt(prompt("De o valor da corrente(I) em amperes: "));

            r = v/i;
            alert("Resistência = " + r + "ohms");
            break;
    }
}