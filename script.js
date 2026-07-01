document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ROLAGEM SUAVE DO MENU
    const linksDoMenu = document.querySelectorAll('nav a');

    linksDoMenu.forEach(link => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault();
            const idDoAlvo = link.getAttribute('href');
            const elementoAlvo = document.querySelector(idDoAlvo);

            if (elementoAlvo) {
                elementoAlvo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. INTERAÇÃO DE "ABRIR" E "FECHAR" O TEXTO (LER CAPÍTULO)
    const botoesLerMais = document.querySelectorAll('.post-link');

    botoesLerMais.forEach(botao => {
        botao.addEventListener('click', () => {
            const cardContent = botao.parentElement.parentElement;
            const textoCompleto = cardContent.querySelector('.conteudo-completo');

            if (textoCompleto.style.display === "block") {
                textoCompleto.style.display = "none";
                botao.textContent = "Ler Capítulo";
            } else {
                textoCompleto.style.display = "block";
                botao.textContent = "Fechar Capítulo";
                botao.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    // 3. INTERAÇÃO DO BOTÃO DE CURTIR/DESCURTIR
    const botoesCurtir = document.querySelectorAll('.like-btn');

    botoesCurtir.forEach(botao => {
        let curtido = false;

        botao.addEventListener('click', () => {
            const iconeCoracao = botao.querySelector('.heart-icon');
            const contador = botao.querySelector('.like-count');
            let numeroCurtidas = parseInt(contador.textContent);

            if (!curtido) {
                // Ação de Curtir
                numeroCurtidas++;
                contador.textContent = numeroCurtidas;
                iconeCoracao.innerHTML = "&#9829;"; // Muda para coração preenchido (♥)
                botao.classList.add('liked');
                curtido = true;
            } else {
                // Ação de Descurtir (Voltar ao normal)
                numeroCurtidas--;
                contador.textContent = numeroCurtidas;
                iconeCoracao.innerHTML = "&#9825;"; // Volta para coração vazado (slots) (Layout original)
                botao.classList.remove('liked');
                curtido = false;
            }
        });
    });
});
