// script.js

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
  
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
  
      if (linkPage === currentPage) {
        link.style.color = '#00027b';
        link.style.fontWeight = 'bold'; 
      }
    });
  });
  