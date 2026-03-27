function conversaoUni(){
    let escolha = parseInt(prompt("Escolha a unidade que você quer converter:\nDigite\n[1] para converter watt(W)\n[2] para converter ohm(Ω)\n[3] para converter ampere(A)\n[4] para converter volt(V)\n"));
    let escolha1, escolha2, valorGrandeza;

    switch(escolha){
        case 1:
            escolha1 = parseInt(prompt("Escolha a grandeza que você quer converter:\n[1] para converter nanowatt(nW)\n[2] para converter microwatt(µW)\n[3] para converter miliwatt(mW)\n[4] para converter watt(W)\n[5] para converter quilowatt(KW)\n[6] para converter megawatt(MW)\n[7] para converter gigawatt(GW)"));
            valorGrandeza = parseInt(prompt("Digite o valor da grandeza que você quer converter: "));
            let nanowatt, microwatt, miliwatt, watt, quilowatt, megawatt, gigawatt;
            switch(escolha1){
                case 1:
                    escolha2 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nanowatt(nW)\n[2] para microwatt(µW)\n[3] para miliwatt(mW)\n[4] para watt(W)\n[5] para quilowatt(KW)\n[6] para megawatt(MW)\n[7] para gigawatt(GW)"));
                    nanowatt = valorGrandeza;

                    switch(escolha2){
                            case 1:
                                alert("nanowatt(nW) --> nanowatt(nW) = " + nanowatt);
                                break;
                            case 2:
                                nanowatt /= 1000;
                                alert("nanowatt(nW) --> microwatt(µW) = " + nanowatt);
                                break;
                            case 3:
                                nanowatt /= 1000000;
                                alert("nanowatt(nW) --> miliwatt(mW) = " + nanowatt);
                                break;
                            case 4:
                                nanowatt /= 1000000000;
                                alert("nanowatt(nW) --> watt(W) = " + nanowatt);
                                break;
                            case 5:
                                nanowatt /= 1000000000000;
                                alert("nanowatt(nW) --> quilowatt(KW) = " + nanowatt);
                                break;
                            case 6:
                                nanowatt /= 1000000000000000;
                                alert("nanowatt(nW) --> megawatt(MW) = " + nanowatt);
                                break;
                            case 7:
                                nanowatt /= 1000000000000000000;
                                alert("nanowatt(nW) --> gigawatt(GW) = " + nanowatt);
                                break;
                        }
                    break;
                case 2:
                    escolha1 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nanowatt(nW)\n[2] para microwatt(µW)\n[3] para miliwatt(mW)\n[4] para watt(W)\n[5] para quilowatt(KW)\n[6] para megawatt(MW)\n[7] para gigawatt(GW)"));
                    microwattwatt = valorGrandeza;

                    switch(escolha2){
                            case 1:
                                microwatt *= 1000000;
                                alert("microwatt(µW) --> nanowatt(nW) = " + microwatt);
                                break;
                            case 2:
                                alert("microwatt(µW) --> microwatt(µW) = " + microwatt);
                                break;
                            case 3:
                                microwatt *= 1000;
                                alert("microwatt(µW) --> miliwatt(mW) = " + microwatt);
                                break;
                            case 4:
                                microwatt /= 1000;
                                alert("microwatt(µW) --> watt(W) = " + microwatt);
                                break;
                            case 5:
                                microwatt /= 1000000;
                                alert("microwatt(µW) --> quilowatt(KW) = " + microwatt);
                                break;
                            case 6:
                                microwatt /= 1000000000;
                                alert("microwatt(µW) --> megawatt(MW) = " + microwatt);
                                break;
                            case 7:
                                microwatt /= 1000000000000;
                                alert("microwatt(µW) --> gigawatt(GW) = " + microwatt);
                                break;
                        }
                    break;
                case 3:
                    escolha1 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nanowatt(nW)\n[2] para microwatt(µW)\n[3] para miliwatt(mW)\n[4] para watt(W)\n[5] para quilowatt(KW)\n[6] para megawatt(MW)\n[7] para gigawatt(GW)"));
                    miliwatt = valorGrandeza;

                    switch(escolha2){
                        case 1:
                            miliwatt *= 1000000;
                            alert("miliwatt(mW) --> nanowatt(nW) = " + miliwatt);
                            break;
                        case 2:
                            miliwatt *= 1000
                            alert("miliwatt(mW) --> microwatt(µW) = " + miliwatt);
                            break;
                        case 3:
                            alert("miliwatt(mW) --> miliwatt(mW) = " + miliwatt);
                            break;
                        case 4:
                            miliwatt /= 1000;
                            alert("miliwatt(mW) --> watt(W) = " + miliwatt);
                            break;
                        case 5:
                            miliwatt /= 1000000;
                            alert("miliwatt(mW) --> quilowatt(KW) = " + miliwatt);
                            break;
                        case 6:
                            miliwatt /= 1000000000;
                            alert("miliwatt(mW) --> megawatt(MW) = " + miliwatt);
                            break;
                        case 7:
                            miliwatt /= 1000000000000;
                            alert("miliwatt(mW) --> gigawatt(GW) = " + miliwatt);
                            break;
                    break;
                case 4:
                    escolha1 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nanowatt(nW)\n[2] para microwatt(µW)\n[3] para miliwatt(mW)\n[4] para watt(W)\n[5] para quilowatt(KW)\n[6] para megawatt(MW)\n[7] para gigawatt(GW)"));
                    watt = valorGrandeza;

                    switch(escolha2){
                        case 1:
                            watt *= 1000000000;
                            alert("watt(W) --> nanowatt(nW) = " + watt);
                            break;
                        case 2:
                            watt *= 1000000;
                            alert("watt(W) --> microwatt(µW) = " + watt);
                            break;
                        case 3:
                            watt /= 1000;
                            alert("watt(W) --> miliwatt(mW) = " + watt);
                            break;
                        case 4:
                            alert("watt(W) --> watt(W) = " + watt);
                            break;
                        case 5:
                            watt /= 1000;
                            alert("watt(W) --> quilowatt(KW) = " + watt);
                            break;
                        case 6:
                            watt /= 1000000;
                            alert("watt(W) --> megawatt(MW) = " + watt);
                            break;
                        case 7:
                            watt /= 1000000000;
                            alert("watt(W) --> gigawatt(GW) = " + watt);
                            break;
                    break;
                case 5:
                    escolha1 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nanowatt(nW)\n[2] para microwatt(µW)\n[3] para miliwatt(mW)\n[4] para watt(W)\n[5] para quilowatt(KW)\n[6] para megawatt(MW)\n[7] para gigawatt(GW)"));
                    quilowatt = valorGrandeza;

                    switch(escolha2){
                        case 1:
                            quilowatt *= 1000000000000;
                            alert("quilowatt(KW) --> nanowatt(nW) = " + quilowatt);
                            break;
                        case 2:
                            quilowatt *= 1000000000;
                            alert("quilowatt(KW) --> microwatt(µW) = " + quilowatt);
                            break;
                        case 3:
                            quilowatt /= 1000000;
                            alert("quilowatt(KW) --> miliwatt(mW) = " + quilowatt);
                            break;
                        case 4:
                            quilowatt *= 1000;
                            alert("quilowatt(KW) --> watt(W) = " + quilowatt);
                            break;
                        case 5:
                            alert("quilowatt(KW) --> quilowatt(KW) = " + quilowatt);
                            break;
                        case 6:
                            quilowatt /= 1000;
                            alert("quilowatt(KW) --> megawatt(MW) = " + quilowatt);
                            break;
                        case 7:
                            quilowatt /= 1000000;
                            alert("quilowatt(KW) --> gigawatt(GW) = " + quilowatt);
                            break;
                    break;
                case 6:
                    escolha1 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nanowatt(nW)\n[2] para microwatt(µW)\n[3] para miliwatt(mW)\n[4] para watt(W)\n[5] para quilowatt(KW)\n[6] para megawatt(MW)\n[7] para gigawatt(GW)"));
                    megawatt = valorGrandeza;

                    switch(escolha2){
                        case 1:
                            quilowatt *= 1000000000000000;
                            alert("quilowatt(KW) --> nanowatt(nW) = " + quilowatt);
                            break;
                        case 2:
                            quilowatt *= 1000000000000;
                            alert("quilowatt(KW) --> microwatt(µW) = " + quilowatt);
                            break;
                        case 3:
                            quilowatt /= 1000000000;
                            alert("quilowatt(KW) --> miliwatt(mW) = " + quilowatt);
                            break;
                        case 4:
                            quilowatt *= 1000000;
                            alert("quilowatt(KW) --> watt(W) = " + quilowatt);
                            break;
                        case 5:
                            quilowatt /= 10000;
                            alert("quilowatt(KW) --> quilowatt(KW) = " + quilowatt);
                            break;
                        case 6:
                            alert("quilowatt(KW) --> megawatt(MW) = " + quilowatt);
                            break;
                        case 7:
                            quilowatt /= 1000000;
                            alert("quilowatt(KW) --> gigawatt(GW) = " + quilowatt);
                            break;
                    break;
                case 7:
                    escolha1 = parseInt(prompt("Para qual grandeza você quer converter:\n[1] para nanowatt(nW)\n[2] para microwatt(µW)\n[3] para miliwatt(mW)\n[4] para watt(W)\n[5] para quilowatt(KW)\n[6] para megawatt(MW)\n[7] para gigawatt(GW)"));

                    break;
        break;
            }

    }
}