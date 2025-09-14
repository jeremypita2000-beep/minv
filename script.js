document.addEventListener('DOMContentLoaded', () => {
  const photoContainer = document.getElementById('photo-container');
  const textContainer = document.getElementById('text-container');
  const qrContainer = document.getElementById('qr-container');
  const music = document.getElementById('background-music');
  const startButton = document.getElementById('start-button');
  const startButtonContainer = document.getElementById('start-button-container');

  // Fotos y frases románticas
  const photos = [
    'foto1.png','foto2.png','foto3.png','foto4.png',
    'foto5.png','foto6.png','foto7.png','foto8.png'
  ];
  
  const texts = [
    'Te amo con el alma ❤️',
    'Siempre juntos 💕',
    'Eres mi alegría 🌸',
    'Nuestro destino es eterno ✨',
    'Eres mi razón de sonreír 💖',
    'I love you so much baby',
    'forever and always',
    'mi princesa hermosa',
    'eres perfecta',
    'te adoro',
    'mi vida',
    'baby',
    'beautiful',
    'gorgeous',
    'cutie',
    'angel'
  ];

  let cascadeInterval;
  let isActive = false;

  startButton.addEventListener('click', () => {
    startButtonContainer.style.display = 'none';
    qrContainer.style.display = 'block';

    // Música
    if (music) {
      const p = music.play();
      if (p) p.catch(err => console.warn('Audio bloqueado:', err));
    }

    // Ocultar QR después de 3s
    setTimeout(() => {
      qrContainer.classList.add('fade-out');
      setTimeout(() => {
        qrContainer.style.display = 'none';
        startCascadeEffect();
      }, 1000);
    }, 3000);
  });

  function getRandomPosition() {
    return {
      left: Math.random() * (window.innerWidth - 200) + 'px',
      animationDelay: Math.random() * 3 + 's'
    };
  }

  function createCascadePhoto() {
    const img = document.createElement('img');
    img.src = photos[Math.floor(Math.random() * photos.length)];
    
    // Tamaños aleatorios
    const sizes = [80, 120, 160];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.objectFit = 'cover';
    
    const pos = getRandomPosition();
    img.style.left = pos.left;
    img.style.animationDelay = pos.animationDelay;
    
    photoContainer.appendChild(img);
    
    // Remover después de animación
    setTimeout(() => {
      if (img.parentNode) img.remove();
    }, 15000);
  }

  function createCascadeText() {
    const p = document.createElement('p');
    p.textContent = texts[Math.floor(Math.random() * texts.length)];
    p.className = 'floating-text';
    
    // Tamaños aleatorios
    const sizes = ['text-small', 'text-medium', 'text-large'];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    p.classList.add(size);
    
    // Colores aleatorios
    const colors = ['white-glow', 'pink-glow', 'blue-glow'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.classList.add(color);
    
    const pos = getRandomPosition();
    p.style.left = pos.left;
    p.style.animationDelay = pos.animationDelay;
    
    textContainer.appendChild(p);
    
    // Remover después de animación
    setTimeout(() => {
      if (p.parentNode) p.remove();
    }, 12000);
  }

  function createCascadeHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '♥';
    
    const pos = getRandomPosition();
    heart.style.left = pos.left;
    heart.style.animationDelay = pos.animationDelay;
    heart.style.position = 'absolute';
    
    textContainer.appendChild(heart);
    
    // Remover después de animación
    setTimeout(() => {
      if (heart.parentNode) heart.remove();
    }, 10000);
  }

  function addRandomCascadeElement() {
    if (!isActive) return;
    
    const elementTypes = ['photo', 'text', 'heart'];
    const type = elementTypes[Math.floor(Math.random() * elementTypes.length)];
    
    switch(type) {
      case 'photo':
        createCascadePhoto();
        break;
      case 'text':
        createCascadeText();
        break;
      case 'heart':
        createCascadeHeart();
        break;
    }
  }

  function startCascadeEffect() {
    isActive = true;
    
    // Crear elementos iniciales
    for (let i = 0; i < 15; i++) {
      setTimeout(addRandomCascadeElement, i * 300);
    }
    
    // Continuar agregando elementos
    cascadeInterval = setInterval(addRandomCascadeElement, 800);
  }
});
