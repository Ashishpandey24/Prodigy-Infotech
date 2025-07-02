/* === CHANGE NAVBAR BACKGROUND ON SCROLL === */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* === HIGHLIGHT ACTIVE LINK === */
const sections  = document.querySelectorAll('section');
const navLinks  = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const offset = section.offsetTop - 80;          // 80px = navbar height + spacing
    if (window.scrollY >= offset) currentSection = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').includes(currentSection));
  });
});
