function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  const menuLinks = document.querySelectorAll('.menu a');
  
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      const duration = 700;
      smoothScroll(target, duration);
    });
  });
  

  const button = document.querySelector('.veja-mais');
  const slideGrid = document.querySelector('.slide-grid');
  
  button.addEventListener('click', function() {
    slideGrid.classList.toggle('expand');
    
    if (slideGrid.classList.contains('expand')) {
      setTimeout(() => {
        slideGrid.style.height = slideGrid.scrollHeight + 'px';
      }, 0);
    } else {
      slideGrid.style.height = '';
    }
  });
  
  