// Remove o preloader após carregar a página
window.addEventListener("load", function() {
    document.querySelector(".preloader").style.display = "none";
});

// Número do WhatsApp
const whatsappNumber = "5564996239084";

// Adiciona evento de clique nos botões de compra
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function() {
        // Obtém o nome do projeto a partir do card
        const projectName = this.parentElement.querySelector("h3").innerText;

        // Mensagem personalizada
        const message = `Olá, gostaria de comprar o projeto: ${encodeURIComponent(projectName)}. Poderia me passar mais detalhes?`;

        // Monta o link do WhatsApp
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Redireciona para o WhatsApp
        window.location.href = whatsappLink;
    });
});
