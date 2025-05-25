# Zyenxo v3 - Telegram Bot Base

**Zennco v3** adalah base bot Telegram yang ringan, modular, dan open-source. Cocok untuk pengembang yang ingin membuat bot Telegram sendiri dari nol dengan fleksibilitas tinggi.

---

## âœ¨ Fitur Utama

- Struktur folder rapi dan mudah dikembangkan
- Sistem command modular (`telegram.js`)
- Manajemen user premium (`premium.json`)
- Sistem konfigurasi global (`config.js`)
- Dibangun menggunakan Telegraf Telegram API
- Ringan dan cocok untuk server kecil sekalipun
- Custom function & handler (`mytelegram.js`)

---

## ðŸ§¾ Struktur Folder

```bash
Zennco/
â”œâ”€â”€ system/                  # Folder utama sistem
â”‚   â”œâ”€â”€ telegram.js          # Tempat semua command Telegram
â”‚   â”œâ”€â”€ config.js            # File konfigurasi (token bot, owner ID, prefix, dll)
â”‚
â”œâ”€â”€ system/lib/             # Library custom function
â”‚   â”œâ”€â”€ mytelegram.js        # Berisi fungsi-fungsi custom
â”‚   â”œâ”€â”€ premium.js           # Loader database premium
â”‚
â”œâ”€â”€ system/database/        # Database lokal
â”‚   â””â”€â”€ premium.json         # Penyimpanan data user premium
â”‚
â”œâ”€â”€ package.json            # Metadata dan dependencies project
â”œâ”€â”€ index.js                # Entry point utama bot
```

---

## âš™ï¸ Instalasi

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

## ðŸ›  Konfigurasi

Edit file `system/config.js` untuk mengatur:
- Token Bot Telegram
- ID owner
- Prefix command
- Pesan global

---

## â˜• Contoh Penambahan Command

Di file `system/telegram.js`, kamu bisa menambahkan command seperti berikut:

```js
case 'halo':
  m.reply('Halo, ini Zennco v3 for Telegram');
  break;
```

---

## ðŸ” Premium System

- Premium user disimpan di `system/database/premium.json`
- Digunakan oleh handler `premium.js` untuk validasi akses fitur tertentu

---

## â¤ï¸ Credits

> Zennco v3 dikembangkan oleh [Kagenou](https://github.com/kagenouReal) sebagai base awal Telegram bot open-source yang powerful namun tetap simpel.

---

## License

MIT License Â© 2025 Kagenou-DG
