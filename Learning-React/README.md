# 📦 Project Overview

### 🏷️ Nama Proyek  
**Profile Card**

### 💻 Deskripsi  
Proyek ini adalah kartu profil interaktif menggunakan React JS dan JSX. Menampilkan foto, nama, deskripsi, media sosial, serta tombol download CV dengan efek modern UI seperti glassmorphism dan aurora style.

---

## ⚙️ Teknologi dan Dependencies

| Teknologi                              | Keterangan                                      |
|----------------------------------------|-------------------------------------------------|
| React JS                               | Library utama pengembangan frontend             |
| JSX                                    | Penulisan komponen dengan sintaks deklaratif    |
| Vite                                   | Dev server modern & bundler yang cepat          |
| @fortawesome/react-fontawesome         | Ikon sosial media dan dekoratif                 |
| React Hooks (`useState`, `useRef`, `useEffect`) | Logika interaktif dan animasi UI      |

---

## ✨ Fitur Utama

- 🎨 Tampilan responsive dengan efek **glassmorphism** dan **aurora**
- 🧑‍💻 Data profil dikendalikan melalui `props`
- 📱 Fitur share link atau copy ke clipboard
- 📥 Tombol unduh CV dengan efek hover gradien
- 🌐 Ikon sosial media yang terhubung ke profil online

---

## 📁 Struktur Folder
```
src/
├── assets/ # Gambar dan aset statis
├── components/ # Komponen modular
│ ├── Header/
│ │ ├── Header.jsx
│ │ └── Header.css
│ └── Profile/
│ ├── Profile.jsx
│ └── Profile.css
├── App.jsx # Komponen utama aplikasi
├── main.jsx # Entry point React
├── App.css # Gaya global aplikasi
└── index.css # Reset & base styling

---

## 🚀 Preview
> Jalankan lokal:
```bash
npm install
npm run dev

