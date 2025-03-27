document.addEventListener("DOMContentLoaded", function () {
    // Activar los corazones al cargar la página
    const heartsContainer = document.getElementById("hearts");
    for (let i = 0; i < 20; i++) {
      let heart = document.createElement("div");
      heart.classList.add("heart");
      heart.textContent = "💖";  // Usamos el emoji de corazón con brillitos
      heart.style.left = `${Math.random() * 100}%`;  // Posición aleatoria en el eje X
      heart.style.animationDuration = `${2 + Math.random() * 3}s`;  // Duración aleatoria de la animación
      heart.style.animationDelay = `${Math.random()}s`;  // Retraso aleatorio para el inicio de la animación
      heartsContainer.appendChild(heart);
    }
  
    heartsContainer.style.display = "block"; // Aseguramos que el contenedor esté visible
  
    // Mostrar la carta al hacer clic
    const card = document.getElementById('card');
    card.addEventListener('click', function () {
      const cardInner = document.querySelector('.card-inner');
      cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
      card.classList.toggle('open');  // Añadir clase open para animación
    });
  });
  
