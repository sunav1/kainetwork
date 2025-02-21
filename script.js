// Seleciona todas as imagens dentro dos cards
const cardImages = document.querySelectorAll('.card-image img');

cardImages.forEach((img) => {
    img.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = img;
        const { offsetX: x, offsetY: y } = e;

        // Calcula o valor de deslocamento com base no movimento do mouse
        const moveX = (x / width) * 20 - 10; // Limita a rotação a 20px
        const moveY = (y / height) * 20 - 10;

        // Aplica o efeito de rotação nas imagens
        img.style.transform = `scale(1.1) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    });

    // Remove o efeito quando o mouse sai da imagem
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotateX(0) rotateY(0)';
    });
});
