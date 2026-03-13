/* ============================================================
   HIMAPROM - Gallery Script
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Load full gallery on galeri.html
  loadFullGallery();
  loadFilms();

});

async function loadFullGallery() {
  const container = document.getElementById('full-gallery-container');
  if (!container) return;

  const gallery = [
    { id: 1, title: "Festival Film HIMAPROM 2025", date: "10 Maret 2025", desc: "Dokumentasi Festival Film HIMAPROM 2025" },
    { id: 2, title: "Workshop Fotografi & Sinematografi", date: "20 Februari 2025", desc: "Kegiatan workshop bersama profesional" },
    { id: 3, title: "Pelantikan Pengurus HIMAPROM 2025", date: "5 Januari 2025", desc: "Momen pelantikan pengurus" },
    { id: 4, title: "Leadership Camp HDD 2025", date: "15 Februari 2025", desc: "Kegiatan leadership camp divisi HDD" },
    { id: 5, title: "Talkshow Media Kreatif", date: "1 Maret 2025", desc: "Talkshow dengan narasumber industri media" },
    { id: 6, title: "Social Campaign SID 2025", date: "28 Februari 2025", desc: "Kampanye sosial divisi SID" }
  ];

  const icons = ['🎬', '📷', '🎤', '🏕️', '🎙️', '📢'];

  container.innerHTML = gallery.map((item, i) => `
    <div class="gallery-card fade-in" onclick="openGalleryModal(${item.id})">
      <div class="gallery-image">
        <div class="gallery-image-placeholder">${icons[i % icons.length]}</div>
        <div class="gallery-overlay">
          <span class="gallery-overlay-text">Lihat Detail →</span>
        </div>
      </div>
      <div class="gallery-info">
        <h3>${item.title}</h3>
        <time>${item.date}</time>
      </div>
    </div>
  `).join('');

  // Trigger animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 100);
    });
  }, 100);
}

async function loadFilms() {
  const container = document.getElementById('film-container');
  if (!container) return;

  const films = [
    { id: 1, title: "Bayang Nusantara", year: 2025, genre: "Drama Budaya", youtube: "https://youtube.com" },
    { id: 2, title: "Jejak Digital", year: 2024, genre: "Thriller", youtube: "https://youtube.com" },
    { id: 3, title: "Satu Langkah", year: 2024, genre: "Dokumenter", youtube: "https://youtube.com" },
    { id: 4, title: "Sang Dalang", year: 2024, genre: "Drama", youtube: "https://youtube.com" },
    { id: 5, title: "Nusantara Rising", year: 2023, genre: "Aksi", youtube: "https://youtube.com" },
    { id: 6, title: "Suara Tanah", year: 2023, genre: "Dokumenter", youtube: "https://youtube.com" },
    { id: 7, title: "Lensa Budaya", year: 2023, genre: "Dokumenter", youtube: "https://youtube.com" },
    { id: 8, title: "Di Balik Layar", year: 2022, genre: "Drama", youtube: "https://youtube.com" }
  ];

  const icons = ['🎬', '🎥', '📽️', '🎞️', '🎭', '🎪', '🎨', '🖥️'];

  container.innerHTML = films.map((film, i) => `
    <a href="${film.youtube}" target="_blank" rel="noopener noreferrer" class="film-card fade-in">
      <div class="film-poster">
        <div class="film-poster-placeholder">
          <span>${icons[i % icons.length]}</span>
        </div>
        <div class="film-play-overlay">
          <div class="film-play-btn">▶</div>
        </div>
      </div>
      <div class="film-info">
        <h3>${film.title}</h3>
        <div class="film-meta">${film.year} · ${film.genre}</div>
      </div>
    </a>
  `).join('');

  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  }, 100);
}

function openGalleryModal(id) {
  // Could open a lightbox - simplified for demo
  console.log('Opening gallery post:', id);
}
