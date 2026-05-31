// Static data and constants for the website

// Import images
import ribbonBouquetImg from "@assets/2_1780078403802.png";
import candleImg from "@assets/3_1780078403802.png";
import crochetImg from "@assets/4_1780078403802.png";
import embroideryImg from "@assets/5_1780078403802.png";
import resinImg from "@assets/6_1780078403802.png";
import hamperImg from "@assets/7_1780078403802.png";

export interface Product {
    title: string;
    desc: string;
    price: string;
    img: string;
}

export const products: Product[] = [
    {
        title: "Ribbon Flower Bouquets",
        desc: "Blooms that never wither — eternal beauty, hand-tied with silk ribbons",
        price: "Mini ₹150 · Classic ₹300 · Premium ₹500",
        img: ribbonBouquetImg
    },
    {
        title: "Scented & Decor Candles",
        desc: "Light a candle, fill the room with warmth and memory",
        price: "from ₹249",
        img: candleImg
    },
    {
        title: "Crochet Accessories",
        desc: "Loop by loop, crafted with patience and love",
        price: "Flower Clips ₹79 · Charms ₹99",
        img: crochetImg
    },
    {
        title: "Hand Embroidery Clothing",
        desc: "Wear art — every stitch tells a story",
        price: "Caps & T-Shirts from ₹499",
        img: embroideryImg
    },
    {
        title: "Resin Keepsakes",
        desc: "Captured in resin, forever yours to keep",
        price: "from ₹99",
        img: resinImg
    },
    {
        title: "Gift Hampers",
        desc: "Curated with care, gifted with heart",
        price: "Mini ₹499 · Premium ₹1299",
        img: hamperImg
    }
];

export interface ValueProp {
    icon: "hand" | "heart" | "infinity" | "sparkles";
    title: string;
}

export const values: ValueProp[] = [
    { icon: "hand", title: "100% Handmade" },
    { icon: "heart", title: "Made with Love" },
    { icon: "infinity", title: "Fully Customisable" },
    { icon: "sparkles", title: "Affordable Luxury" }
];

export const taglines = [
    "Pretty things with a soul",
    "Nazakat in every detail",
    "Handcrafted with love and warmth"
];
