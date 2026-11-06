// Dynamic Theme Toggle (Mode sombre / clair)
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

const textToType = "Yorgen Dias";
const element = document.getElementById("typing-name");
const typingSpeed = 250; // Vitesse de frappe en millisecondes
const totalCycleTime = 10000;

// Vérification initiale du thème
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  lightIcon.classList.remove('hidden');
} else {
  document.documentElement.classList.remove('dark');
  darkIcon.classList.remove('hidden');
}

// Handler du bouton de thème
themeToggleBtn.addEventListener('click', function() {
  darkIcon.classList.toggle('hidden');
  lightIcon.classList.toggle('hidden');

  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  }
});

function startTypingEffect() {
    const element = document.getElementById('typing-name');
    element.textContent = "";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < textToType.length) {
        element.textContent += textToType.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
        const timeSpent = textToType.length * typingSpeed;
        const remainingTime = Math.max(0, totalCycleTime - timeSpent);

        setTimeout(() => {
          startTypingEffect();
        }, remainingTime);
      }
    }, typingSpeed);
}

document.addEventListener("DOMContentLoaded", startTypingEffect);

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Fermer le menu mobile lors d'un clic sur un lien
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

document.querySelector('.cv-actions').addEventListener('click', () => {
  // Si vous utilisez Google Analytics ou un autre outil de suivi
  console.log("CV téléchargé !");
});