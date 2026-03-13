# HIMAPROM Website
**Himpunan Mahasiswa Produksi Media**

> "Menciptakan Media, Menginspirasi Dunia"

---

## 🎬 Tentang Website

Website resmi HIMAPROM dirancang dengan konsep **Modern Media Technology × Traditional Wayang Culture** — memadukan estetika produksi media modern dengan sentuhan budaya wayang Indonesia yang halus.

---

## 📁 Struktur Proyek

```
himaprom-website/
│
├── index.html                  ← Halaman utama
│
├── pages/
│   ├── tentang.html            ← Profil & visi misi
│   ├── divisi.html             ← 5 divisi HIMAPROM
│   ├── program.html            ← Program kerja per divisi
│   ├── galeri.html             ← Galeri foto kegiatan
│   ├── galeri-film.html        ← Galeri film dengan poster
│   ├── angkatan.html           ← Data angkatan 2025
│   ├── struktur.html           ← Struktur organisasi
│   └── kontak.html             ← Form kontak
│
├── database/
│   ├── news.json               ← Data berita/pengumuman
│   ├── gallery.json            ← Data galeri foto
│   ├── films.json              ← Data film
│   ├── batches.json            ← Data angkatan
│   └── leaders.json            ← Data ketua himpunan
│
├── assets/
│   ├── css/
│   │   └── style.css           ← Stylesheet utama
│   │
│   ├── js/
│   │   ├── script.js           ← Script utama
│   │   ├── gallery.js          ← Script galeri & film
│   │   ├── corevalues.js       ← Animasi core values
│   │   └── burger-animation.js ← Animasi burger/shutter
│   │
│   └── images/
│       ├── logo/
│       │   └── himaprom-logo.png       ← GANTI dengan logo asli
│       ├── hero/
│       │   └── hero.jpg                ← GANTI dengan foto hero
│       ├── wayang/
│       │   └── wayang-silhouette.png   ← GANTI dengan silhouette wayang
│       ├── angkatan/
│       │   └── angkatan-2025.jpg       ← GANTI dengan foto angkatan
│       ├── struktur/
│       │   └── ketua-himaprom.jpg      ← GANTI dengan foto ketua
│       ├── gallery/
│       │   ├── post-1.jpg              ← GANTI dengan foto galeri
│       │   ├── post-2.jpg
│       │   └── post-3.jpg
│       └── film-posters/
│           ├── film-1.jpg              ← GANTI dengan poster film
│           ├── film-2.jpg
│           └── film-3.jpg
```

---

## 🖼️ Cara Menambahkan Gambar

Semua gambar harus dalam format: **JPG, JPEG, PNG, atau WEBP** (bukan SVG/vector).

### Logo HIMAPROM
Letakkan logo di: `assets/images/logo/himaprom-logo.png`

### Foto Hero
Letakkan di: `assets/images/hero/hero.jpg`

### Wayang Silhouette
Letakkan di: `assets/images/wayang/wayang-silhouette.png`
- Gunakan PNG dengan background transparan
- Warna hitam/gelap untuk efek silhouette terbaik

### Foto Anggota / Struktur
Letakkan di: `assets/images/struktur/[nama-file].jpg`

### Foto Angkatan
Letakkan di: `assets/images/angkatan/angkatan-2025.jpg`

### Galeri & Film Poster
- Gallery: `assets/images/gallery/post-[N].jpg`
- Film poster: `assets/images/film-posters/film-[N].jpg`

---

## 📊 Cara Update Database

### Menambah Berita (database/news.json)
```json
{
  "id": 4,
  "title": "Judul Berita",
  "date": "2025-04-01",
  "category": "Event",
  "thumbnail": "../assets/images/gallery/post-4.jpg",
  "content": "Isi berita...",
  "gallery": []
}
```

### Menambah Film (database/films.json)
```json
{
  "id": 4,
  "title": "Judul Film",
  "year": 2025,
  "poster": "../assets/images/film-posters/film-4.jpg",
  "youtube": "https://www.youtube.com/watch?v=VIDEO_ID",
  "genre": "Drama",
  "duration": "15 menit",
  "description": "Deskripsi film..."
}
```

---

## 🎨 Design System

| Elemen | Nilai |
|--------|-------|
| Primary Font | Red Hat Display |
| Secondary Font | Space Grotesk |
| Gold Color | `#c9a84c` |
| Background | `#0a0a0a` |
| Text Primary | `#f0ece0` |

---

## ✨ Fitur Utama

- ✅ Sticky navbar dengan efek scroll
- ✅ Burger button animasi camera shutter
- ✅ Hero section dengan wayang silhouette overlay
- ✅ News ticker berjalan
- ✅ Core values circular animated diagram
- ✅ Division cards dengan hover effects
- ✅ Program kerja dengan tab system
- ✅ Gallery grid dengan hover overlay
- ✅ Film gallery dengan poster & YouTube redirect
- ✅ Struktur organisasi dengan org tree
- ✅ Form kontak interaktif
- ✅ Footer lengkap
- ✅ Fade-in scroll animations
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ JSON database system

---

## 🚀 Cara Menjalankan

Cukup buka `index.html` di browser. Tidak memerlukan server khusus untuk versi statis.

Untuk pengembangan lebih lanjut dengan Live Server:
```bash
# Install VS Code Live Server extension
# Atau gunakan:
npx serve .
```

---

**HIMAPROM** — Himpunan Mahasiswa Produksi Media  
*Menciptakan Media, Menginspirasi Dunia*
