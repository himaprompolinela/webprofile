/* ============================================================
   HIMAPROM - Burger / Camera Shutter Animation
   ============================================================ */

(function() {

  const burger = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;

  if (!burger || !mobileMenu) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    burger.classList.add('open');
    mobileMenu.classList.add('open');
    body.style.overflow = 'hidden';

    // Animate shutter blades
    const blades = burger.querySelectorAll('.shutter-blade');
    blades.forEach((blade, i) => {
      blade.style.transition = `all ${0.15 + i * 0.05}s cubic-bezier(0.4, 0, 0.2, 1)`;
    });
  }

  function closeMenu() {
    isOpen = false;
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    body.style.overflow = '';
  }

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  burger.addEventListener('click', toggleMenu);

  // Close on mobile menu link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !burger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

  // Handle resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isOpen) {
      closeMenu();
    }
  });

})();
