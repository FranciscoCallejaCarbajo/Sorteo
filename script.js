let names = [];

// Cargar nombres desde el archivo usernames.txt
fetch('usernames.txt')
    .then(response => response.text())
    .then(data => {
        names = data.trim().split('\n');
    })
    .catch(error => console.error('Error al cargar los nombres:', error));

document.getElementById('drawButton').addEventListener('click', () => {
    if (names.length === 0) {
        alert('No hay nombres para sortear.');
        return;
    }

    const winnerIndex = Math.floor(Math.random() * names.length);
    const winnerName = names[winnerIndex];

    // Actualizar el nombre del ganador en la interfaz
    document.getElementById('winnerName').textContent = winnerName;
    document.getElementById('winnerMessage').textContent = 'Gracias a todos por participar';

    // Actualizar el resultado final
    document.getElementById('winnerResultName').textContent = winnerName;
    document.getElementById('resultContainer').style.display = 'block';

    // Lanzar confeti
    launchConfetti();
});

// Función para lanzar confeti
function launchConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // Since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
