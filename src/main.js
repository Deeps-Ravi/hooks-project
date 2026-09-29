// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // Close mobile menu on link click
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Intersection Observer for Fade-in Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in-scroll');
  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // Gallery Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add to current
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // Contact Form Handling (Frontend Demo)
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Strict validation check
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      
      // Simulate form submission
      contactForm.reset();
      formSuccess.style.display = 'block';
      formSuccess.textContent = 'Thanks for your enquiry! We will get back to you soon.';
      formSuccess.style.color = '#4ade80';
      
      setTimeout(() => {
        formSuccess.style.display = 'none';
      }, 5000);
    });
  }
});
