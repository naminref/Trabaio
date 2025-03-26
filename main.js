const botoes = document.querySelectorAll(".botao");
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
        abas[i].classList.add("ativo");
    };
}
