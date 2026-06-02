# 🌌 Farrell Dev - Latihan JS

[![Aplikasi Live](https://img.shields.io/badge/Demo-Live_Preview-success.svg)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0.2-purple.svg)](https://getbootstrap.com/)
[![Lisensi](https://img.shields.io/badge/License-MIT-blue.svg)](#)

**Latihan JS** adalah proyek web portofolio personal interaktif bergaya modern-futuristik yang dibangun untuk mengeksplorasi manipulasi DOM (Document Object Model), penanganan *event* JavaScript, serta penyimpanan data lokal menggunakan komponen Bootstrap 5.

Web ini mengusung tema warna yang teduh (slate/soft blue) dengan transisi tema gelap/terang yang halus dan nyaman di mata pengguna.

---

## ✨ Fitur Utama & Eksperimen JS

Proyek ini mencakup beberapa modul latihan interaktif yang fungsional:

1. **Splash Screen / Intro Page Animasi**: Animasi pembuka (*preloader*) teks "FARRELL DEV" yang muncul secara halus sebelum bergeser ke atas saat halaman selesai dimuat sepenuhnya.
2. **Smooth Scroll & Auto-Close Navigation**: Menu navigasi yang responsif dengan efek gulir halus ke setiap bagian, serta penutupan menu otomatis (*auto-close collapse*) jika di-klik di luar area menu saat dibuka pada perangkat *mobile*.
3. **Toggle Tema Gelap/Terang (Dark Mode)**: Fitur pengubah tema yang terintegrasi dengan ikon SVG dinamis (Matahari/Bulan). State tema disimpan menggunakan `localStorage` agar pilihan pengguna tidak hilang saat halaman dimuat ulang (*persistence*).
4. **Generator Warna Acak & Interaksi Teks (Section A)**: Tombol interaktif untuk mengubah warna latar belakang tombol, warna teks paragraf, beserta efek *text-shadow* secara acak menggunakan fungsi matematika warna RGB, lengkap dengan tombol reset ke kondisi semula.
5. **Interactive Card Selection & Deletion (Section D)**: Desain kartu grid yang dapat dipilih menggunakan komponen *checkbox*. Setiap kartu dilengkapi dengan tombol penutup (`&times;`) yang memanfaatkan konsep *Event Delegation* pada JS untuk menyembunyikan elemen kartu yang tidak diinginkan dari *container grid*.
6. **Validasi & Interaksi Form Dinamis (Section E)**: Form lengkap dengan input teks, telepon, email, pemilih warna kustom, serta slider rentang (*range slider*) yang angkanya diperbarui secara *real-time*. Pengiriman form ditangani menggunakan pencegahan aksi default (`e.preventDefault()`) dengan efek umpan balik tombol "Terkirim!" yang kembali semula setelah beberapa detik.

---

## 🛠️ Teknologi yang Digunakan

- **Struktur & Tata Letak**: HTML5 & [Bootstrap v5.0.2](https://getbootstrap.com/) (Grid, Navbar, Utility Classes, JS Bundle)
- **Desain & Tipografi**: CSS3 (Custom Properties/Variables, Flexbox, Fluid Typography `clamp`, CSS Transitions)
- **Sumber Font**: Google Fonts (*Orbitron* untuk Display/Heading dan *Exo 2* untuk teks isi)
- **Logika & Interaktivitas**: Vanilla JavaScript (ES6+)

---

## 📸 Antarmuka Desain

Desain web ini dikembangkan menggunakan palet warna kustom berbasis variabel CSS (`--blue-01` hingga `--blue-10`) untuk memastikan konsistensi transisi tema dari mode terang yang lembut ke mode gelap berbasis *dark-slate engineering color*.

| Preview Mode Terang | Preview Mode Gelap |
| --- | --- |
| <img src="https://placehold.co/500x300/edf5ff/1a2530.png?text=Light+Mode" width="100%"> | <img src="https://placehold.co/500x300/1e2433/e8edf5.png?text=Dark+Mode" width="100%"> |

---

## 🚀 Cara Menjalankan Proyek di Lokal

Karena proyek ini murni dibangun menggunakan teknologi *client-side* (Frontend tanpa framework), kamu bisa menjalankannya dengan sangat mudah:

1. **Klon repositori ini:**
```bash
   git clone [https://github.com/username-kamu/latihan-js.git](https://github.com/username-kamu/latihan-js.git)
