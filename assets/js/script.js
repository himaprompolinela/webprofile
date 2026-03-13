/* ============================================================
   HIMAPROM Website - Main Script
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // NAVBAR SCROLL EFFECT
  // ============================================================
  const navbar = document.getElementById('navbar');

  const handleNavScroll = () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ============================================================
  // ACTIVE NAV LINK
  // ============================================================
  const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ============================================================
  // FADE IN ANIMATIONS
  // ============================================================
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // ============================================================
  // PROGRAM KERJA TABS
  // ============================================================
  const tabs = document.querySelectorAll('.program-tab');
  const contents = document.querySelectorAll('.program-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });

  // ============================================================
  // LOAD NEWS
  // ============================================================
  loadNews();
  loadGallery();

});

// ============================================================
// LOAD NEWS FROM DATABASE
// ============================================================
async function loadNews() {
  const container = document.getElementById('news-container');
  if (!container) return;

  // Fallback static data
  const news = [
    {
      id: 1,
      title: "HIMAPROM Raih Juara 1 Festival Film Mahasiswa Nasional 2025",
      date: "10 Maret 2025",
      category: "Prestasi",
      content: "Tim HIMAPROM berhasil meraih juara pertama dalam Festival Film Mahasiswa Nasional 2025 yang diselenggarakan di Jakarta."
    },
    {
      id: 2,
      title: "Workshop Produksi Film Bersama Sineas Nasional",
      date: "20 Februari 2025",
      category: "Event",
      content: "HIMAPROM mengadakan workshop produksi film eksklusif bersama sineas nasional terkemuka."
    },
    {
      id: 3,
      title: "Kolaborasi HIMAPROM dengan Media Partner Baru",
      date: "15 Januari 2025",
      category: "Kolaborasi",
      content: "HIMAPROM resmi menjalin kerjasama dengan beberapa media partner baru dalam rangka pengembangan konten digital."
    }
  ];

  container.innerHTML = news.map(item => `
    <div class="news-card fade-in">
      <div class="news-card-image">
        <div class="news-card-image-placeholder">📰</div>
      </div>
      <div class="news-card-body">
        <div class="news-category">${item.category}</div>
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <div class="news-card-footer">
          <time>${item.date}</time>
          <span class="read-more">Baca →</span>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe fade-ins
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    obs.observe(el);
  });
}

// ============================================================
// LOAD GALLERY PREVIEW
// ============================================================
async function loadGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  const gallery = [
    { id: 1, title: "Festival Film HIMAPROM 2025", date: "10 Maret 2025" },
    { id: 2, title: "Workshop Fotografi & Sinematografi", date: "20 Februari 2025" },
    { id: 3, title: "Pelantikan Pengurus HIMAPROM 2025", date: "5 Januari 2025" }
  ];

  container.innerHTML = gallery.map(item => `
    <a href="pages/galeri.html" class="gallery-card fade-in">
      <div class="gallery-image">
        <div class="gallery-image-placeholder">🎬</div>
        <div class="gallery-overlay">
          <span class="gallery-overlay-text">Lihat Galeri →</span>
        </div>
      </div>
      <div class="gallery-info">
        <h3>${item.title}</h3>
        <time>${item.date}</time>
      </div>
    </a>
  `).join('');
}

// ============================================================
// COUNTER ANIMATION
// ============================================================
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + '+';
    }
  }, 16);
}

// ============================================================
// SMOOTH HOVER RIPPLE EFFECT
// ============================================================
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position: absolute;
    width: 4px; height: 4px;
    background: rgba(255,255,255,0.4);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    left: ${e.offsetX - 2}px;
    top: ${e.offsetY - 2}px;
    pointer-events: none;
  `;

  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});
