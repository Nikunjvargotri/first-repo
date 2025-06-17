const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');
 hamburger.addEventListener('click', () => {
  let isActive = navLinks.classList.contains('active');
  navLinks.classList.toggle('active');
  hamburger.innerHTML = isActive
 ? '<i class="fas fa-bars"></i>'
 : '<i class="fas fa-times"></i>';
 });