// script.js

// Función para cargar los nombres desde el archivo usernames.txt
document.getElementById('loadNames').addEventListener('click', () => {
    fetch('usernames.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nameList').value = data;
        })
        .catch(error => console.error('Error al cargar los nombres:', error));
});

// Función para realizar el sorteo
document.getElementById('drawName').addEventListener('click', () => {
    const nameList = document.getElementById('nameList').value.trim().split('\n');
    if (nameList.length > 0) {
        const winner = nameList[Math.floor(Math.random() * nameList.length)];
        document.getElementById('winnerName').textContent = winner;
        document.getElementById('winner').style.display = 'block';
    } else {
        alert('No hay nombres para sortear.');
    }
});
