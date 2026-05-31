# 🪷 Ruhaniq House

> *"Pretty things with a soul"* — Handcrafted with love and warmth.

Ruhaniq House is a beautiful landing page for a handmade crafts business specializing in ribbon flower bouquets, scented candles, crochet accessories, hand embroidery clothing, resin keepsakes, and curated gift hampers.

![Ruhaniq House](https://img.shields.io/badge/Made%20with-Love-pink?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## ✨ Features

- 🎨 **Beautiful UI** — Modern, responsive design with smooth animations
- 📱 **Mobile-First** — Optimized for all screen sizes
- 💬 **WhatsApp Integration** — Direct ordering via WhatsApp
- 📊 **Google Sheets Integration** — Form submissions saved to Google Sheets
- 🎬 **Video Showcase** — Embedded brand video with play/pause and mute controls
- 🌙 **Elegant Typography** — Custom fonts (Cormorant Garamond + DM Sans)

---

## 🏗️ Project Structure

```
Ruhaniq-House/
├── src/
│   ├── components/
│   │   └── ui/              # Reusable UI components (Button, Card, Input, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/
│   │   ├── Home.tsx         # Main landing page
│   │   └── not-found.tsx    # 404 page
│   ├── App.tsx              # App entry with routing
│   ├── main.tsx             # React DOM entry
│   └── index.css            # Global styles & Tailwind config
├── attached_assets/         # Images, videos, and media files
├── public/                  # Static assets
├── .env                     # Environment variables (not committed)
├── .env.example             # Environment template
├── index.html               # HTML entry point
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohit2008-tech/Ruhaniq-house.git
   cd Ruhaniq-house
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your actual values:
   - `VITE_WA_NUMBER` — Your WhatsApp business number
   - `VITE_IG_URL` — Your Instagram profile URL
   - `VITE_GOOGLE_SHEET_URL` — Your Google Apps Script URL

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🔐 Environment Variables

This project uses environment variables for sensitive data. **Never commit `.env` to version control.**

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_WA_NUMBER` | WhatsApp number (with country code) | `919990818716` |
| `VITE_IG_URL` | Instagram profile URL | `https://instagram.com/ruhaniq.house` |
| `VITE_GOOGLE_SHEET_URL` | Google Apps Script web app URL | `https://script.google.com/macros/s/.../exec` |

### Setting up Google Sheets Integration

1. Create a Google Sheet
2. Go to **Extensions → Apps Script**
3. Add this code:
   ```javascript
   function doGet(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     if (sheet.getLastRow() === 0) {
       sheet.appendRow(['Timestamp', 'Name', 'Contact', 'Looking For', 'Message']);
     }
     sheet.appendRow([
       new Date(),
       e.parameter.name || '',
       e.parameter.contact || '',
       e.parameter.looking || '',
       e.parameter.message || ''
     ]);
     return ContentService.createTextOutput("Success");
   }
   ```
4. Deploy as Web App (Anyone can access)
5. Copy the URL to `VITE_GOOGLE_SHEET_URL`

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4 + tw-animate-css
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Routing:** Wouter
- **State Management:** React Query

---

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: ...;
  --secondary: ...;
  --background: ...;
}
```

### Content
Edit `src/pages/Home.tsx` to update:
- Product listings
- Pricing
- About section text
- Testimonials

### Images
Replace files in `attached_assets/` with your own images/videos.

---

## 📄 License

This project is private and proprietary to Ruhaniq House.

---

## 💕 About Ruhaniq

**Ruhaniq** means "soulful" — every piece we create carries a piece of our heart. From hand-poured candles and handcrafted roses to crochet, embroidery, resin keepsakes, and gift hampers, we don't just create products; we create memories.

📍 Based in India  
📱 WhatsApp: [Order Now](https://wa.me/919990818716)  
📸 Instagram: [@ruhaniq.house](https://instagram.com/ruhaniq.house)

---

*Made with 🪷 by Ruhaniq House*
