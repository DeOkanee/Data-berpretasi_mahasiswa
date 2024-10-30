 // This code should be in a new file, e.g., js/responsive-menu.js
 document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navBar = document.querySelector('.nav-bar');
  
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
  });


  