# 🎮 Teman Tahu - Visual Novel Edukasi Pubertas & Kesehatan Reproduksi

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Offline%20Standalone-brightgreen)
![Tech Stack](https://img.shields.io/badge/Tech%20Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-orange)
![Responsive](https://img.shields.io/badge/UX-Desktop%20%26%20Mobile%20Responsive-sky-blue)

**Teman Tahu** adalah sebuah permainan interaktif bergenre *Visual Novel* yang dirancang sebagai sarana media pembelajaran interaktif bagi remaja dalam memahami **pubertas, perubahan fisik & emosional, batas privasi tubuh (*body autonomy*), serta kesehatan reproduksi**.

Proyek ini dibangun secara **100% Standalone & Offline** tanpa dependensi pustaka luar atau koneksi internet, serta dioptimalkan secara penuh untuk antarmuka komputer (*desktop*) maupun gawai (*mobile*).

---

## 📌 Fitur Utama

- 📖 **Dual Narrative Perspective (POV Andre & Andriana)**: Pemain dapat memilih dan memainkan alur cerita dari sudut pandang Andre (pubertas laki-laki) maupun Andriana (pubertas perempuan / Menarche).
- 🔀 **Interactive Branching & Multi-Ending**: Setiap keputusan dalam dialog mempengaruhi jalan cerita menuju *Good Ending* (Rekonsiliasi & Pemahaman Faktual) atau *Bad Ending* (Terjerumus Mitos & Pergaulan Bebas).
- 📱 **Mobile & Desktop Responsive Overhaul**: Antarmuka adaptif dengan kartu karakter bertumpuk (*stacked layout*), area sentuh minimal 44px, serta dukungan *Dynamic Viewport Height* (`100dvh`).
- ⚡ **100% Native & GPU-Accelerated**: Menggunakan animasi *CSS3 Keyframes* murni tanpa pustaka JavaScript eksternal (0 CDN), menjamin kecepatan muat instan dan performa tinggi.
- 🎨 **LIDM Theme & Custom Artwork**: Desain bertema *Deep Navy Blue* & *Bright Sky Blue* dengan 9 aset gambar latar belakang (*background artwork*) dan ekspresi karakter lengkap.

---

## 📂 Struktur Berkas Proyek

```text
Gemastik/
├── index.html                    # Berkas utama aplikasi HTML5 (Viewport & Meta Setup)
├── style.css                     # Sistem desain CSS3, token warna, & media query mobile
├── app.js                        # Engine visual novel Vanilla JS & state manager
├── story.js                      # Grafik naskah percabangan cerita & data karakter
├── assets/
│   ├── Andre/                    # Expressive sprites Andre (Talk, Smile, Sad, Confuse, etc.)
│   ├── Andriana/                 # Expressive sprites Andriana (Smile, Mad, Cry, Chill, etc.)
│   ├── Budi/                     # Expressive sprites Budi
│   ├── Mommy_/                   # Sprite Ibu Andre & Ibu Andriana
│   ├── Background/               # 9 Aset Gambar Latar Belakang (Sekolah, Rumah, Jalan, dll)
│   └── Title_Screen/             # Gambar latar belakang pemilihan karakter
└── README.md                     # Dokumentasi proyek
```

---

## 🛠️ Cara Menjalankan Aplikasi

Aplikasi ini dapat dijalankan secara instan tanpa perlu menginstal dependensi (*zero installation*):

1. **Unduh / Clone Repositori**:
   ```bash
   git clone https://github.com/AkaAkaneDesu/Teman-Tahu.git
   ```
2. **Buka Berkas `index.html`**:
   - Cukup klik ganda berkas `index.html` untuk membuka permainan di peramban web (*Google Chrome, Mozilla Firefox, Microsoft Edge, Safari*).
   - Atau gunakan ekstensi **Live Server** pada VS Code.

---

## 👥 Tokoh & Karakter

| Karakter | Usia | Peran & Latar Belakang |
| :--- | :--- | :--- |
| **Andre** | 14 Tahun | Remaja laki-laki yang sedang mengalami pubertas (suara berat, mimpi basah) dan belajar memahami batas privasi teman. |
| **Andriana** | 14 Tahun | Sahabat Andre sejak kecil yang menghadapi masa *menarche* (menstruasi pertama) dan belajar terbuka kepada orang tua. |
| **Budi** | 14 Tahun | Teman sebaya yang sering terpengaruh oleh mitos dan pergaulan bebas. |
| **Ibu Andre & Ibu Andriana** | Dewasa | Orang tua penyayang yang memberikan edukasi pubertas dan kesehatan reproduksi secara faktual. |

---

## 💡 Nilai Edukasi & Refleksi

- **Batas Privacy & Body Consent**: Menanamkan rasa saling menghargai batas fisik dan emosional antar sesama teman.
- **Komunikasi Terbuka dengan Orang Tua**: Mendorong remaja agar berani bertanya pada orang tua saat mengalami perubahan fisik.
- **Edukasi Faktual Kesehatan Reproduksi**: Meluruskan mitos seputar menstruasi, pembalut, dan perubahan fisik saat pubertas.

---

## 📄 Lisensi & Kredit

Hak cipta dilindungi undang-undang. Dikembangkan untuk kompetisi **LIDM (Lomba Inovasi Digital Mahasiswa)**.
