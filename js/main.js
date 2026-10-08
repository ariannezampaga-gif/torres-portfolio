/**
 * ARIANNE MEI Z. TORRES - PERSONAL PORTFOLIO
 * Modern Minimalist Book-Inspired Portfolio Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const navLinks = document.querySelectorAll('.nav-link, .footer-nav-list a, .hero-actions a');
  const readingProgressBar = document.getElementById('reading-progress');
  const toast = document.getElementById('toast-notification');

  /* --------------------------------------------------------------------------
     1. READING PROGRESS BAR & SCROLL MONITOR
     -------------------------------------------------------------------------- */
  function updateReadingProgress() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Update progress bar
    if (readingProgressBar && docHeight > 0) {
      const progressPercent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
      readingProgressBar.style.width = `${progressPercent}%`;
    }

    // Sticky header shadow
    if (header) {
      if (scrollY > 25) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scroll Spy for Navigation Links
    const sections = [
      { id: 'about', targetNav: '#about' },
      { id: 'journey', targetNav: '#journey' },
      { id: 'projects', targetNav: '#projects' },
      { id: 'education', targetNav: '#learning' },
      { id: 'learning', targetNav: '#learning' },
      { id: 'contact', targetNav: '#contact' }
    ];

    const scrollMid = scrollY + (window.innerHeight * 0.35);
    let activeNavHref = '';

    for (const sectionInfo of sections) {
      const el = document.getElementById(sectionInfo.id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollMid >= top && scrollMid < bottom) {
          activeNavHref = sectionInfo.targetNav;
        }
      }
    }

    document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
      if (activeNavHref && link.getAttribute('href') === activeNavHref) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateReadingProgress, { passive: true });
  updateReadingProgress(); // Initial run

  /* --------------------------------------------------------------------------
     2. MOBILE MENU TOGGLE
     -------------------------------------------------------------------------- */
  function toggleMobileMenu(forceClose = false) {
    if (!navMenu || !mobileToggle) return;

    const isOpen = navMenu.classList.contains('is-active');
    const newState = forceClose ? false : !isOpen;

    mobileToggle.classList.toggle('is-active', newState);
    navMenu.classList.toggle('is-active', newState);
    if (mobileOverlay) mobileOverlay.classList.toggle('is-active', newState);
    mobileToggle.setAttribute('aria-expanded', newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => toggleMobileMenu(true));
  }

  /* --------------------------------------------------------------------------
     3. SMOOTH CHAPTER SCROLLING
     -------------------------------------------------------------------------- */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      let targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        // If clicking Learning from top nav, smoothly scroll to Chapter 04 (Where I've Learned)
        if (targetId === '#learning' && link.classList.contains('nav-link')) {
          const eduEl = document.getElementById('education');
          if (eduEl) targetId = '#education';
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          toggleMobileMenu(true);

          const headerHeight = header ? header.offsetHeight : 0;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Close mobile drawer with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('is-active')) {
      toggleMobileMenu(true);
    }
  });

  /* --------------------------------------------------------------------------
     4. TOAST NOTIFICATION UTILITY
     -------------------------------------------------------------------------- */
  let toastTimer = null;
  window.showToast = function(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 4000);
  };

  /* --------------------------------------------------------------------------
     5. CONTACT FORM HANDLER (SEND A MESSAGE BOX)
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-message-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('message-name');
      const emailInput = document.getElementById('message-email');
      const subjectInput = document.getElementById('message-subject');
      const messageInput = document.getElementById('message-text');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !subject || !message) {
        if (window.showToast) {
          window.showToast('Please fill out all fields before sending.');
        }
        return;
      }

      // Compose mailto dispatch link
      const recipient = 'ariannezampaga@gmail.com';
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
      const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show confirmation toast feedback
      if (window.showToast) {
        window.showToast(`Thank you, ${name}! Opening your email client to send your message.`);
      }

      // Reset form fields
      contactForm.reset();
    });
  }

});
