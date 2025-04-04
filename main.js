const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo")
const abas = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove a classe "ativo" de todos os botões e abas
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            abas[j].classList.remove("ativo");
        }

        // Adiciona a classe "ativo" apenas ao botão e à aba correspondente
        botoes[i].classList.add("ativo");

        textos[i].classList.add("ativo");
        textos[j].classList.remove("ativo");

        abas[i].classList.add("ativo");
    };
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
