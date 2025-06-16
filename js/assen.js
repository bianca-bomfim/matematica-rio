// script.js

// Alterna o status de seleção dos assentos ao clicar
document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
    });
});
