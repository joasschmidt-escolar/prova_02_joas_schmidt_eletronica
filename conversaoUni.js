function conversaoUni(){
    let escolha = parseInt(prompt("Escolha a unidade que você quer converter:\nDigite\n[1] para converter watt(W)\n[2] para converter ohm(Ω)\n[3] para converter ampere(A)\n[4] para converter volt(V)\n"));
    let escolha2;

    switch(escolha){
        case 1:
            escolha2 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nano(n)\n[2] para micro()\n[3] para mili(m)\n[4] para quilo(K)\n[5] para mega(M)\n[6] para giga(G)"))
            let watt = parseInt(prompt("Valor em watts para converter: "));
            switch(escolha2){
                case 1:
                    watt *= 10** 9;
                    alert(watt + "nanowatts");
                    break;
                case 2:
                    watt *= 10** 6;
                    alert(watt + "microwatts");
                    break;
                case 3:
                    watt *= 10** 3;
                    alert(watt + "miliwatts");
                    break;
                case 4:
                    watt *= 10** -3;
                    alert(watt + "quilowatts");
                    break;
                case 5:
                    watt *= 10** -6;
                    alert(watt + "megawatts");
                    break;
                case 6:
                    watt *= 10** -9;
                    alert(watt + "gigawatts");
                    break;
            }   
            break;
        case 2:
            escolha2 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nano(n)\n[2] para micro()\n[3] para mili(m)\n[4] para quilo(K)\n[5] para mega(M)\n[6] para giga(G)"))
            let ohm = parseInt(prompt("Valor em watts para converter: "));
            switch(escolha2){
                case 1:
                    ohm *= 10** 9;
                    alert(ohm + "nanoohms");
                    break;
                case 2:
                    ohm *= 10** 6;
                    alert(ohm + "microohms");
                    break;
                case 3:
                    ohm *= 10** 3;
                    alert(ohm + "miliohms");
                    break;
                case 4:
                    ohm *= 10** -3;
                    alert(ohm + "quiloohms");
                    break;
                case 5:
                    ohm *= 10** -6;
                    alert(ohm + "megaohms");
                    break;
                case 6:
                    ohm *= 10** -9;
                    alert(ohm + "gigaohms");
                    break;
            }
            break;
        case 3:
            escolha2 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nano(n)\n[2] para micro()\n[3] para mili(m)\n[4] para quilo(K)\n[5] para mega(M)\n[6] para giga(G)"))
            let ampere = parseInt(prompt("Valor em watts para converter: "));
            switch(escolha2){
                case 1:
                    ampere *= 10** 9;
                    alert(ampere + "amperes");
                    break;
                case 2:
                    ampere *= 10** 6;
                    alert(ampere + "mamperes");
                    break;
                case 3:
                    ampere *= 10** 3;
                    alert(ampere + "amperes");
                    break;
                case 4:
                    ampere *= 10** -3;
                    alert(ampere + "qamperes");
                    break;
                case 5:
                    ampere *= 10** -6;
                    alert(ampere + "amperes");
                    break;
                case 6:
                    ampere *= 10** -9;
                    alert(ampere + "amperes");
                    break;
            }
            break;
        case 4:
            escolha2 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nano(n)\n[2] para micro()\n[3] para mili(m)\n[4] para quilo(K)\n[5] para mega(M)\n[6] para giga(G)"))
            let volt = parseInt(prompt("Valor em watts para converter: "));
            switch(escolha2){
                case 1:
                    volt *= 10** 9;
                    alert(volt + "nanovolts");
                    break;
                case 2:
                    volt *= 10** 6;
                    alert(volt + "microvolts");
                    break;
                case 3:
                    volt *= 10** 3;
                    alert(volt + "milivolts");
                    break;
                case 4:
                    volt *= 10** -3;
                    alert(volt + "quilovolts");
                    break;
                case 5:
                    volt *= 10** -6;
                    alert(volt + "megavolts");
                    break;
                case 6:
                    volt *= 10** -9;
                    alert(volt + "gigavolts");
                    break;
            }
            break;
    }
}