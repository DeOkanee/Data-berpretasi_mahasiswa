// File: js/hamburger-menu.js
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger'); // Sesuaikan dengan class yang benar
  const navBar = document.querySelector('.nav-bar');

  if (hamburger && navBar) {
      hamburger.addEventListener('click', function() {
          navBar.classList.toggle('active');
          hamburger.classList.toggle('active');
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
          const isClickInside = navBar.contains(event.target) || hamburger.contains(event.target);
          if (!isClickInside && navBar.classList.contains('active')) {
              navBar.classList.remove('active');
              hamburger.classList.remove('active');
          }
      });
  } else {
      console.error('Hamburger menu or nav bar elements not found');
  }
});