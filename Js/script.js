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
function aluno() {

    let aluno = Number(document.getElementById("aluno").value);

    if (aluno < 0 || aluno > 10)
        alert("Nota Invalida!")
    else
        if (aluno >= 0 && aluno < 4)
            alert("Aluno Reprovado")
        else
            if (aluno >= 4 && aluno < 7)
                alert("Aluno em Recuperacao")
            else
                if (aluno >= 7 && aluno < 10)
                    alert("Aluno Aprovado")
                else { }
                

}
function aluno2() {
    let aluno2 = Number(document.getElementById("aluno2").value);
    if (aluno2 < 5)
        alert("Reprovado na Recuperacao!")
    else
        if (aluno2 > 5)
            alert("Aprovado na Recuperacao")
        else {}
     }