// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Accessibility enhancements
  document.addEventListener('keyup', function(e) {
    if (e.key === 'Tab') {
      document.documentElement.classList.add('keyboard-nav');
    }
  });
  
  // Form submission
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add form submission logic here
      alert('Thank you for your submission!');
      this.reset();
    });
  });
  
  // Initialize animations
  document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => observer.observe(el));
  });

  // Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Load animations.js
    const script = document.createElement('script');
    script.src = 'js/animations.js';
    document.body.appendChild(script);
    
    // Add loaded class to body for transition in
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
  });