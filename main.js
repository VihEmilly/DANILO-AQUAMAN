const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll(".aba-conteudo");
for(let i=0;i <botoes.length;i++){ botoes[i].onclick = function() {

for(let j=0;j<botoes.length;j++) { 
    botoes[j].classList.remove("ativo");
    textos[i].classList.remove("ativo")
}
botoes[i].classList.add('ativo');
textos[i].classList.add("ativo")
}
}
const contadores = document.querySelectorAll(".contador")
const tempoObjetivo  = new Date("2024-10-05T00:00:00");
function calcularTempo(tempoObjetivo){
   let tempoAtual = new Date();
   let tempoFinal = tempoObjetivo- tempoAtual;
   let segundos = tempoFinal/1000;
   return segundos;
}
contadores[0].textContent = calcularTempo(tempoObejetivo1);
contadores[0].textContent = tempoObejetivo1 - tempoAtual;
contadores[0].textContent = "Contagem regressiva";
contadores[0].textContent = calcularTempo(tempoObjetivo1);
