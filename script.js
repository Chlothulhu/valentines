const container = document.querySelector(".heart-container");

// Fonction pour créer un cœur/emoji aléatoire
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Emojis possibles (cœurs, étoiles, etc.)
  const emojis = [
    "❤️",
    "❤️",
    "❤️",
    "❤️",
    "✨",
    "💖",
    "💘",
    "💗",
    "💕",
    "💝",
    "💜",
    "🩷",
    "💜",
    "🩷",
    "🌹",
    "🌹",
    "🌹",
    "🌺",
    "💮",
    "🌸",
    "🌷",
  ];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Position aléatoire en haut de l'écran
  heart.style.left = `${Math.random() * 100}%`;

  // Durée de l'animation (entre 3 et 8 secondes)
  const duration = 3 + Math.random() * 5;
  heart.style.animationDuration = `${duration}s`;

  // Ajout du cœur au conteneur
  container.appendChild(heart);

  // Suppression du cœur après l'animation
  setTimeout(() => {
    heart.remove();
  }, duration * 2000);
}

// Génère un nouveau cœur toutes les 0.5 secondes
setInterval(createHeart, 200);

document.getElementById("gift").addEventListener("click", () => {
  const element = document.getElementById("surprise");
  // Apply spinning and scaling animation
  element.classList.add("spin-scale");
  // Change innerHTML after animation completes
  setTimeout(() => {
    element.innerHTML =
      '<div class="msg flash-element">Ton cadeau :</div><div class="msg-gros flash-element">🌹Moi🌹</div><div class="msg-gros flash-element">👉🏻👈🏻</div><img id="gift" src="img/moigrenouille.png" width=75%>';
    element.classList.remove("spin-scale");
  }, 500); // Match this with CSS transition duration
});
