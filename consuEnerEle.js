function consuEnerEle(){
    let poten = parseInt(prompt("Digite a potencia em watt do aparelho: "));
    let temp = parseInt(prompt("Digite o tempo de uso do aparelho: "));
    let result = (poten * temp)/1000
    alert("Consumo = " + result + "kWh");
}