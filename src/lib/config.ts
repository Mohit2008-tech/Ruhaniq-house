// Environment configuration
// All sensitive data should be in .env file (not committed to git)

export const config = {
  // WhatsApp number (with country code, no +)
  whatsappNumber: import.meta.env.VITE_WA_NUMBER || "",
  
  // Instagram profile URL
  instagramUrl: import.meta.env.VITE_IG_URL || "https://www.instagram.com/ruhaniq.house/",
  
  // Google Apps Script URL for form submissions
  googleSheetUrl: import.meta.env.VITE_GOOGLE_SHEET_URL || "",
} as const;

// Helper functions
export function openWhatsApp(message: string) {
  window.open(
    `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

export function orderOnWhatsApp(product?: string) {
  const text = product
    ? `*Hello Ruhaniq!*

I came across your beautiful *${product}* and I'm absolutely in love with it!

Could you please share:
- Available designs & colors
- Pricing details
- Delivery timeline

Looking forward to your handcrafted magic!`
    : `*Hello Ruhaniq!*

I've been admiring your beautiful handmade creations and would love to place an order!

Could you please help me explore your collection? I'm looking for something special and unique.

Thank you!`;
  openWhatsApp(text);
}
