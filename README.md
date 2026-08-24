# DroidLink - Mobile IDE dengan Pembantu AI

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-orange?logo=cloudflare)](https://droidprompt.pages.dev)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-yellow?logo=firebase)](https://firebase.google.com)
[![PWA](https://img.shields.io/badge/PWA-Ready-blue)](https://web.dev/progressive-web-apps/)
[![Spark Plan Optimized](https://img.shields.io/badge/Firebase-Spark%20Plan%20Optimized-green)](https://firebase.google.com/pricing)

DroidLink ialah **Mobile IDE (Integrated Development Environment)** yang direka untuk pengekodan di mana sahaja, terus dari pelayar web telefon atau tablet anda. Dilengkapi dengan pembantu AI, penyegerakan awan yang dioptimumkan untuk Firebase Spark Plan, dan keupayaan Git.

---

## 🌐 URL Langsung

**https://droidprompt.pages.dev**

---

## ✨ Ciri-Ciri Utama

| Ciri | Penerangan |
|------|-----------|
| **📱 Mobile-First IDE** | Editor kod Monaco (VS Code) yang dioptimumkan untuk skrin sentuh |
| **🤖 Pembantu AI** | Chat dengan AI untuk jana, debug, dan ubah suai kod secara automatik |
| **☁️ Penyegerakan Awan Pintar** | Simpan dan segerakkan fail, sejarah chat, dan tetapan merentas peranti — dioptimumkan untuk Spark Plan |
| **🔐 Pengesahan Google** | Log masuk selamat menggunakan Firebase Authentication |
| **📂 Pengurusan Fail** | Cipta, muat naik, muat turun, dan urus fail projek anda |
| **💬 Pengurusan Chat** | Baharu, Tutup, Kosongkan, dan Padam sesi perbualan |
| **🔀 Integrasi Git** | Push projek terus ke GitHub melalui REST API |
| **📲 PWA Ready** | Pasang sebagai aplikasi di telefon (Add to Home Screen) |
| **🌙 Mod Offline** | Service Worker membolehkan penggunaan tanpa internet (selepas kunjungan pertama) |
| **🎯 Mod Chat Pelbagai** | Kod, Tanya, Rancang, Debug — setiap mod mempunyai prompt sistem khusus |
| **📊 Pemantauan Penggunaan** | Semak anggaran penggunaan storan cloud dalam masa nyata |

---

## 💾 Pengoptimuman Firebase Spark Plan

Aplikasi ini direka khas untuk **menjimatkan penggunaan Firebase Spark Plan** (percuma) dengan had berikut:

### Had Data yang Dikenakan

| Data | Had | Tindakan Jika Melebihi |
|------|-----|------------------------|
| Bilangan fail workspace | **20 fail** | Fail lama dipadam automatik |
| Saiz setiap fail | **500KB** | Dipotong dengan nota penjelasan |
| Saiz keseluruhan fail | **2MB** | Fail terbesar dipotong |
| Sesi chat disimpan | **10 sesi** | Sesi lama dipadam automatik |
| Sejarah prompt | **30 item** | Item lama dipadam automatik |
| Mesej chat semasa | **50 mesej** | Mesej lama dipadam automatik |

### Teknik Penjimatan Saiz

| Teknik | Penjimatan |
|--------|-----------|
| HTML chat di-stripped → simpan **text sahaja** | ~70% lebih kecil |
| Sesi chat: HTML → **text preview 2000 aksara** | ~80% lebih kecil |
| Fail dipotong jika >500KB dengan nota | Kawal saiz |
| Sync debounce 5 saat | Kurangkan bilangan tulis |
| Manual sync sahaja (bukan auto) | Kawal bila data dihantar |

### Anggaran Penggunaan Selepas Optimum

| Senario | Penggunaan |
|---------|-----------|
| 10 fail x 50KB | ~500KB ✅ |
| 10 sesi x 5KB text | ~50KB ✅ |
| 30 prompt x 1KB | ~30KB ✅ |
| 50 mesej x 2KB | ~100KB ✅ |
| **JUMLAH** | **~680KB** ✅ |

> **Masih jauh di bawah had 1GB Spark Plan!**

---

## 📊 Penggunaan Token AI

> **Nota**: Data di bawah adalah contoh format. Gunakan butang **"Export untuk README"** dalam aplikasi (panel Token) untuk menjana data sebenar dan tampal di sini.

| Model | Input Token | Output Token | Jumlah Token | Requests |
|-------|------------|-------------|-------------|----------|
| gpt-3.5-turbo | 0 | 0 | 0 | 0 |

> Data ini dikemas kini secara manual oleh pengguna.
> Token dianggarkan menggunakan formula ~4 aksara = 1 token jika provider tidak memulakan data usage.

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

### 4. Pengurusan Chat
| Butang | Fungsi |
|--------|--------|
| **Baharu** | Mulakan perbualan baharu, simpan semasa ke Sesi |
| **Tutup** | Tutup perbualan semasa, simpan ke Sesi |
| **Kosongkan** | Kosongkan chat, simpan ke Sesi |
| **Sesi** | Buka modal sejarah, klik untuk buka, hover untuk padam |

### 5. Penyegerakan (Manual)
- Data disimpan secara automatik ke tempat (localStorage)
- Klik **Sync** untuk menyimpan ke awan (Firestore) — **gunakan manual untuk jimatkan Spark Plan**
- Data akan disegerakkan merentas semua peranti anda

### 6. Semak Penggunaan Cloud
- Pergi ke **Tetapan** → bahagian **"Penggunaan Cloud (Spark Plan)"**
- Klik **"Semak Penggunaan"** untuk lihat pecahan terperinci
- Kod warna: 🟢 Hijau (<200KB) | 🟡 Kuning (200-500KB) | 🔴 Merah (>500KB)

---

## 📁 Struktur Projek

```
DroidPrompt/
├── index.html          # Aplikasi utama (SPA)
├── sw.js               # Service Worker untuk PWA
├── manifest.json       # Web App Manifest
├── _headers            # Konfigurasi Cloudflare Pages (CSP, cache)
├── .pagesignore        # Fail yang dikecualikan dari deploy
├── .gitignore          # Fail yang dikecualikan dari git
├── wrangler.toml       # Konfigurasi Wrangler CLI
├── README.md           # Dokumentasi projek (fail ini)
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
| **Sanitasi HTML** | Chat history dibersihkan sebelum dipaparkan |

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

## 📋 Sejarah Perubahan Utama

### v2.0 (Ogos 2024)
- ✅ Migrasi hosting dari GitHub Pages ke **Cloudflare Pages**
- ✅ Tambah **pengoptimuman Firebase Spark Plan** (had data, penjimatan saiz, sync manual)
- ✅ Tambah **pengurusan chat** (Baharu, Tutup, Kosongkan, Padam Sesi)
- ✅ Tambah **pemantauan penggunaan cloud** dalam Tetapan
- ✅ Baiki **Service Worker** (tidak cache HTML, skip CDN/API)
- ✅ Baiki **CSP** untuk benarkan AI provider dan Monaco Editor
- ✅ Tambah **error handling** untuk data cloud rosak
- ✅ Tambah **sanitasi HTML** untuk chat history
- ✅ Tambah **clear-data.html** utiliti

---

**Dibina dengan ❤️ untuk pengekodan di mana sahaja, dengan penjimatan Spark Plan dalam minda.**
