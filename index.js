
var SetaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")


function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaesquerda.style = "display:flex; margin-top:70px"
    setadireita.style = "display:none"
}


function RolarParaEsquerda() {
     leonardo.style = "display:flex"
     bruna.style = "display:none" 
     setaesquerda.style = "display:none"
     setadireita.style = "display:flex"

}

