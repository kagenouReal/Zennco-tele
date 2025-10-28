# Zyenxo v3 - Telegram Bot Base

**Zennco v3** is a lightweight, modular, and open-source Telegram bot base. Perfect for developers who want to build their own Telegram bot from scratch with high flexibility.

---

## ✨ Main Features

- Clean and easy-to-develop folder structure
- Modular command system (`telegram.js`)
- Premium user management (`premium.json`)
- Global configuration system (`config.js`)
- Built using Telegraf API
- Lightweight and ideal for small servers
- Custom functions & handler (`mytelegram.js`)

---

## 🧾 Folder Structure

```bash
Zennco/
├── system/                  # Main system folder
│   ├── telegram.js          # Contains all Telegram commands
│   ├── config.js            # Configuration file (owner number, prefix, etc.)
│
├── system/lib/              # Custom function libraries
│   ├── mytelegram.js        # Contains custom functions
│   ├── premium.js           # Premium database loader
│
├── system/database/         # Local database
│   └── premium.json         # Stores premium user data
│
├── package.json             # Project metadata and dependencies
├── index.js                 # Main entry point of the bot
```

---

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/kagenouReal/Zennco-tele.git
cd Zennco-tele
```

2. Install dependencies:
```bash
npm install
```

3. Run the bot:
```bash
npm start
```

---

## 🛠 Configuration

Edit the `system/config.js` file to set up:
- Owner number
- Prefix, message templates, bot token

---

## ☕ Example Command

In the `system/telegram.js` file, you can add a command like this:

```js
case 'hello':
  m.reply(m.chat, 'Hello, this is Zennco v3');
  break;
```

---

## 🔐 Premium System

- Premium users are stored in `system/database/premium.json`
- Used by the `premium.js` handler to validate access to specific features

---

## ❤️ Credits

> Zennco v3 is developed by [Kagenou](https://github.com/kagenouReal) as an open-source Telegram bot base that is powerful yet simple.

---

## License

MIT License © 2025 Kagenou-DG
