function salariocliente() {

    const sc = Number(document.getElementById("sc").value);

    if (sc > 3000)
        alert("Voce tem direito ao plano Alfa")
    else
        alert("Voce tem direito ao plano Beta")
}

function Colesterol() {

    const Colesterol = Number(document.getElementById("Colesterol").value);

    if (Colesterol < 180)
        alert("Saude OK!")
    else
        alert("Vamos procurar uma ajuda medica?")
}

function venda() {

    const venda = Number(document.getElementById("venda").value);
    let resultado
    if (venda >= 10000000) {
        resultado = (venda * 0.04)
        alert("Comissao de 4%  =  " + resultado)
    }
    else {
        resultado = (venda * 0.02);
        alert("Comissao de 2%  =  " + resultado);
    }
}