# Zyenxo v3 - Telegram Bot Base

**Zennco v3** adalah base bot Telegram yang ringan, modular, dan open-source. Cocok untuk pengembang yang ingin membuat bot telegram sendiri dari nol dengan fleksibilitas tinggi.

---

## ✨ Fitur Utama

- Struktur folder rapi dan mudah dikembangkan
- Sistem command modular (`telegram.js`)
- Manajemen user premium (`premium.json`)
- Sistem konfigurasi global (`config.js`)
- Dibangun menggunakan Telegraf API
- Ringan dan cocok untuk server kecil sekalipun
- Custom function & handler (`mytelegram.js`)

---

## 🧾 Struktur Folder

```bash
Zennco/
├── system/                  # Folder utama sistem
│   ├── telegram.js          # Tempat semua command telegram
│   ├── config.js            # File konfigurasi (nomor owner, prefix, dll)
│
├── system/lib/             # Library custom function
│   ├── mytelegram.js        # Berisi fungsi-fungsi custom
│   ├── premium.js           # Loader database premium
│
├── system/database/        # Database lokal
│   └── premium.json         # Penyimpanan data user premium
│
├── package.json            # Metadata dan dependencies project
├── index.js                # Entry point utama bot
```

---

## ⚙️ Instalasi

1. Clone repository:
```bash
git clone https://github.com/kagenouReal/Zennco-tele.git
cd Zennco
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan bot:
```bash
npm start
```

---

## 🛠 Konfigurasi

Edit file `system/config.js` untuk mengatur:
- Nomor owner
- prefix, msg, tokenbot

---

## ☕ Contoh Penambahan Command

Di file `system/telegram.js`, kamu bisa menambahkan command seperti berikut:

```js
case 'halo':
  m.reply(m.chat, 'Halo, ini Zennco v3');
  break;
```

---

## 🔐 Premium System

- Premium user disimpan di `system/database/premium.json`
- Digunakan oleh handler `premium.js` untuk validasi akses fitur tertentu

---

## ❤️ Credits

> Zennco v3 dikembangkan oleh [Kagenou](https://github.com/kagenouReal) sebagai base awal Telegram bot open-source yang powerful namun tetap simpel.

---

## License

MIT License © 2025 Kagenou-DG
