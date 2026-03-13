/* ============================================================
   HIMAPROM - Gallery Script
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  loadFullGallery();
  loadFilms();
});
 
// ============================================================
// FUNGSI BANTU — resolvePath
// ============================================================
// Tulis selalu path dari root, fungsi ini yang sesuaikan otomatis.
// Berlaku untuk galeri foto maupun galeri film.
//
// Contoh penulisan yang benar:
//   "assets/images/gallery/post-1.jpg"
//   "assets/images/film-posters/film-1.jpg"
//
// URL eksternal (https://...) langsung dipakai apa adanya.
// ============================================================
function resolvePath(path) {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
 
  const loc = window.location;
 
  // GitHub Pages: /repo-name/pages/...
  if (loc.hostname.includes('github.io')) {
    const repoSegment = loc.pathname.split('/')[1];
    return `${loc.origin}/${repoSegment}/${path}`;
  }
 
  // Live Server / hosting biasa
  const depth  = (loc.pathname.match(/\//g) || []).length - 1;
  const prefix = depth > 1 ? '../'.repeat(depth - 1) : './';
  return prefix + path;
}
 
// ============================================================
// GALERI FOTO
// ============================================================
// Semua foto dikelola langsung di array gallery di bawah.
// Tidak ada fetch, tidak ada database eksternal.
//
// CARA MENAMBAH FOTO BARU:
//   Salin satu blok { } dan tempel sebelum tanda ];
//   Upload file fotonya ke: assets/images/gallery/
//
// CARA MENGHAPUS FOTO:
//   Hapus seluruh blok { ... }, yang tidak diinginkan
//
// CARA MENGUBAH FOTO:
//   Ganti nilai foto: dengan nama file baru
//   Kosongkan foto: "" jika belum punya gambar → tampil ikon otomatis
// ============================================================
 
function loadFullGallery() {
  const container = document.getElementById('full-gallery-container');
  if (!container) return;
 
  // ============================================================
  // DAFTAR FOTO GALERI — edit bagian ini
  // ============================================================
  const gallery = [
    {
      foto : "/assets/images/gallery/DSC09053.JPG",
      title: "Proses Pembuatan Film HIMAPROM 2025",
      date : "10 Maret 2025",
    },
  ];
  // ============================================================
 
  const fallbackIcons = ['🎬', '📷', '🎤', '🏕️', '🎙️', '📢'];
 
  container.innerHTML = gallery.map((item, i) => {
    const src = resolvePath(item.foto);
    return `
      <div class="gallery-card fade-in" onclick="openGalleryModal(${i + 1})">
        <div class="gallery-image">
          ${src
            ? `<img
                 src="${src}"
                 alt="${item.title}"
                 style="width:100%;height:100%;object-fit:cover;"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
               >`
            : ''}
          <div class="gallery-image-placeholder" style="${src ? 'display:none' : ''}">
            ${fallbackIcons[i % fallbackIcons.length]}
          </div>
          <div class="gallery-overlay">
            <span class="gallery-overlay-text">Lihat Detail →</span>
          </div>
        </div>
        <div class="gallery-info">
          <h3>${item.title}</h3>
          <time>${item.date}</time>
        </div>
      </div>
    `;
  }).join('');
 
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 100);
    });
  }, 100);
}

function loadFilms() {
  const container = document.getElementById('film-container');
  if (!container) return;
 
  // ============================================================
  // DAFTAR FILM — edit bagian ini
  // ============================================================
  const films = [
    {
      poster : "/assets/images/film-posters/Pesilat Sejati.jpeg",
      title  : "Pesilat Sejati",
      year   : 2025,
      genre  : "Drama Budaya",
      youtube: "https://youtube.com",
    },
    {
      poster : "assets/images/film-posters/film-2.jpg",
      title  : "Coming Soon",
      year   : 2025,
      genre  : "Thriller",
      youtube: "https://youtube.com",
    },
  ];
  // ============================================================
 
  const fallbackIcons = ['🎬', '🎥', '📽️', '🎞️', '🎭', '🎪', '🎨', '🖥️'];
 
  // Sesuaikan path poster relatif terhadap posisi halaman
  function resolvePath(path) {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    const depth  = (window.location.pathname.match(/\//g) || []).length - 1;
    const prefix = depth > 1 ? '../'.repeat(depth - 1) : './';
    return prefix + path;
  }
 
  container.innerHTML = films.map((film, i) => {
    const src = resolvePath(film.poster);
    return `
      <a href="${film.youtube}" target="_blank" rel="noopener noreferrer" class="film-card fade-in">
        <div class="film-poster">
          ${src
            ? `<img
                 src="${src}"
                 alt="Poster ${film.title}"
                 style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
               >`
            : ''}
          <div class="film-poster-placeholder" style="${src ? 'display:none' : ''}">
            <span>${fallbackIcons[i % fallbackIcons.length]}</span>
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
    `;
  }).join('');
 
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  }, 100);
}
 
function openGalleryModal(id) {
  console.log('Opening gallery post:', id);
}
