# DroidLink - Mobile IDE dengan Pembantu AI

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-orange?logo=cloudflare)](https://droidprompt.pages.dev)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-yellow?logo=firebase)](https://firebase.google.com)
[![PWA](https://img.shields.io/badge/PWA-Ready-blue)](https://web.dev/progressive-web-apps/)

DroidLink ialah **Mobile IDE (Integrated Development Environment)** yang direka untuk pengekodan di mana sahaja, terus dari pelayar web telefon atau tablet anda. Dilengkapi dengan pembantu AI, penyegerakan awan, dan keupayaan Git.

---

## 🌐 URL Langsung

**https://droidprompt.pages.dev**

---

## ✨ Ciri-Ciri Utama

| Ciri | Penerangan |
|------|-----------|
| **📱 Mobile-First IDE** | Editor kod Monaco (VS Code) yang dioptimumkan untuk skrin sentuh |
| **🤖 Pembantu AI** | Chat dengan AI untuk jana, debug, dan ubah suai kod secara automatik |
| **☁️ Penyegerakan Awan** | Simpan dan segerakkan fail, sejarah chat, dan tetapan merentas peranti |
| **🔐 Pengesahan Google** | Log masuk selamat menggunakan Firebase Authentication |
| **📂 Pengurusan Fail** | Cipta, muat naik, muat turun, dan urus fail projek anda |
| **🔀 Integrasi Git** | Push projek terus ke GitHub melalui REST API |
| **📲 PWA Ready** | Pasang sebagai aplikasi di telefon (Add to Home Screen) |
| **🌙 Mod Offline** | Service Worker membolehkan penggunaan tanpa internet (selepas kunjungan pertama) |
| **🎯 Mod Chat Pelbagai** | Kod, Tanya, Rancang, Debug — setiap mod mempunyai prompt sistem khusus |

---

## 🛠️ Teknologi yang Digunakan

- **Frontend**: HTML5, Tailwind CSS, JavaScript (Vanilla)
- **Editor**: Monaco Editor (VS Code engine)
- **Backend**: Firebase Authentication + Cloud Firestore
- **Hosting**: Cloudflare Pages (CDN global, SSL automatik)
- **PWA**: Service Worker + Web App Manifest
- **Git**: GitHub REST API (Personal Access Token)

---

## 🚀 Cara Menggunakan

### 1. Log Masuk
- Buka https://droidprompt.pages.dev
- Klik **"Log Masuk dengan Google"**
- Hanya email yang dibenarkan boleh mengakses (lihat `ALLOWED_EMAIL_HASHES`)

### 2. Konfigurasi AI
- Pergi ke **Tetapan** (ikon gear di sidebar)
- Masukkan URL endpoint AI, model, dan API key anda
- Pilih mod sambungan: Auto, Direct, atau Proxy (cors.sh)

### 3. Mula Mengekod
- Gunakan tab **Penyunting** untuk menulis kod
- Gunakan tab **AI Chat** untuk berinteraksi dengan AI
- Gunakan tab **Fail** untuk mengurus projek anda

### 4. Penyegerakan
- Data disimpan secara automatik ke tempat (localStorage)
- Klik **Sync** untuk menyimpan ke awan (Firestore)
- Data akan disegerakkan merentas semua peranti anda

---

## 📁 Struktur Projek

```
DroidPrompt/
├── index.html          # Aplikasi utama (SPA)
├── sw.js               # Service Worker untuk PWA
├── manifest.json       # Web App Manifest
├── _headers            # Konfigurasi Cloudflare Pages (CSP, cache)
├── .pagesignore        # Fail yang dikecualikan dari deploy
├── wrangler.toml       # Konfigurasi Wrangler CLI
├── clear-data.html     # Utiliti: Padam data cloud
├── icon-192.png        # Ikon PWA (192x192)
├── icon-512.png        # Ikon PWA (512x512)
├── icon-512-maskable.png # Ikon maskable PWA
└── apple-touch-icon.png  # Ikon iOS
```

---

## 🔧 Konfigurasi

### Firebase
Konfigurasi Firebase telah disediakan dalam kod (`index.html`). Untuk menggunakan projek Firebase sendiri:
1. Daftar projek di [Firebase Console](https://console.firebase.google.com)
2. Aktifkan **Authentication** (Google Sign-In)
3. Aktifkan **Cloud Firestore**
4. Tambah domain anda dalam **Authorized domains**
5. Gantikan konfigurasi dalam `DEFAULT_FIREBASE_CONFIG`

### Cloudflare Pages
Deploy menggunakan Wrangler CLI:
```bash
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name=droidprompt --branch=main
```

---

## 🔐 Keselamatan

| Aspek | Pelaksanaan |
|-------|-----------|
| **Pengesahan** | Google OAuth 2.0 melalui Firebase Auth |
| **Akses Terhad** | Hanya email yang di-hash SHA-256 dibenarkan |
| **CSP Ketat** | Content Security Policy di `_headers` |
| **Data Sulit** | API key disimpan dalam localStorage (tidak disegerakkan ke cloud) |
| **Token Git** | PAT disimpan hanya dalam localStorage peranti |

> **Nota**: Hash email yang dibenarkan disimpan dalam `ALLOWED_EMAIL_HASHES`. Untuk menambah pengguna, jana SHA-256 hash email dan tambah ke senarai.

---

## 📝 Lesen

Projek ini adalah peribadi dan tidak dilesenkan untuk penggunaan awam tanpa kebenaran.

---

## 🙏 Penghargaan

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) — Editor kod VS Code
- [Tailwind CSS](https://tailwindcss.com) — Framework CSS
- [Firebase](https://firebase.google.com) — Backend sebagai perkhidmatan
- [Cloudflare Pages](https://pages.cloudflare.com) — Hosting statik global
- [Font Awesome](https://fontawesome.com) — Ikon

---

**Dibina dengan ❤️ untuk pengekodan di mana sahaja.**
