// Static data and constants for the website

// Embroidery Lab Options
export interface EmbroideryCanvas {
    id: string;
    name: string;
    icon: string;
    basePrice: number;
    image: string;
}

export interface EmbroiderySize {
    id: string;
    name: string;
    description: string;
    priceAddon: number;
}

export const embroideryCanvases: EmbroideryCanvas[] = [
    {
        id: "tshirt",
        name: "T-Shirt",
        icon: "👕",
        basePrice: 600,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80"
    },
    {
        id: "hankerchief",
        name: "Handkerchief",
        icon: "🧵",
        basePrice: 200,
        image: "https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?w=500&q=80"
    },
    {
        id: "cap",
        name: "Cap",
        icon: "🧢",
        basePrice: 450,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80"
    },
    {
        id: "jeans",
        name: "Jeans",
        icon: "👖",
        basePrice: 800,
        image: "https://images.unsplash.com/photo-1542272454315-7ad9f4aa5daf?w=500&q=80"
    },
    {
        id: "shirt",
        name: "Shirt",
        icon: "👔",
        basePrice: 700,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80"
    },
    {
        id: "totebag",
        name: "Tote Bag",
        icon: "👜",
        basePrice: 500,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80"
    }
];

export const materiaSizes = [
    { id: "xs", name: "XS", available: true },
    { id: "s", name: "S", available: true },
    { id: "m", name: "M", available: true },
    { id: "l", name: "L", available: true },
    { id: "xl", name: "XL", available: true },
    { id: "xxl", name: "XXL", available: true }
];

export const embroideryStyles: EmbroiderySize[] = [
    {
        id: "small",
        name: "Small/Minimalist",
        description: "Pocket size embroidery (2-3 inch)",
        priceAddon: 150
    },
    {
        id: "medium",
        name: "Medium",
        description: "Chest/Sleeve size (4-5 inch)",
        priceAddon: 300
    },
    {
        id: "large",
        name: "Large",
        description: "Full back/front (8+ inch)",
        priceAddon: 600
    }
];

// Boutique Products
export interface BoutiqueProduct {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    badge?: string;
    variants?: { color: string; image: string }[];
}

export const boutiqueProducts: BoutiqueProduct[] = [
    {
        id: "rb-sunflower",
        name: "Golden Sunflower Ribbon Bouquet",
        category: "Ribbon Bouquets",
        price: 800,
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&q=80",
        description: "Warm yellow, everlasting satin ribbons crafted into beautiful sunflowers",
        badge: "Bestseller",
        variants: [
            { color: "Yellow", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&q=80" },
            { color: "Pink", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&q=80" },
            { color: "Blue", image: "https://images.unsplash.com/photo-1566288623995-c9c4fc620d7b?w=500&q=80" },
            { color: "Red", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80" }
        ]
    },
    {
        id: "rb-pink",
        name: "Blushing Pink Rose Bouquet",
        category: "Ribbon Bouquets",
        price: 750,
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&q=80",
        description: "Delicate pink ribbon roses that never wilt",
        badge: "100% Handcrafted"
    },
    {
        id: "rb-blue",
        name: "Royal Blue Rose Bouquet",
        category: "Ribbon Bouquets",
        price: 750,
        image: "https://images.unsplash.com/photo-1566288623995-c9c4fc620d7b?w=500&q=80",
        description: "Elegant royal blue satin ribbon bouquet",
        badge: "100% Handcrafted"
    },
    {
        id: "rb-red",
        name: "Crimson Red Rose Bouquet",
        category: "Ribbon Bouquets",
        price: 800,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80",
        description: "Classic crimson red ribbon roses for special moments",
        badge: "Bestseller"
    },
    {
        id: "cr-hairband",
        name: "Pastel Daisy Crochet Hairband",
        category: "Crochet Wear",
        price: 350,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80",
        description: "Handmade crochet hairband with delicate daisy accents",
        badge: "100% Handcrafted"
    },
    {
        id: "cr-clips",
        name: "Handcrafted Floral Hair Clips (Set of 2)",
        category: "Crochet Wear",
        price: 250,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=500&q=80",
        description: "Beautiful crochet flower hair clips, perfect for any occasion"
    },
    {
        id: "cr-paranda",
        name: "Traditional Paranda with Crochet Accents",
        category: "Crochet Wear",
        price: 450,
        image: "https://images.unsplash.com/photo-1595777216528-071e0127ccf5?w=500&q=80",
        description: "Traditional hair accessory with elegant crochet details",
        badge: "100% Handcrafted"
    },
    {
        id: "rs-coasters",
        name: "Ethereal Pressed Flower Resin Coasters",
        category: "Home & Resin Art",
        price: 600,
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&q=80",
        description: "Set of 4 resin coasters with real pressed flowers",
        badge: "Bestseller"
    },
    {
        id: "cn-lavender",
        name: "Aromatic Soy Wax Fragrance Candle",
        category: "Home & Resin Art",
        price: 450,
        image: "https://images.unsplash.com/photo-1602874801006-bf6d377c2505?w=500&q=80",
        description: "Lavender & Vanilla scented soy wax candle, hand-poured with love",
        badge: "100% Handcrafted"
    }
];

export const boutiqueCategories = [
    { id: "all", name: "All Products" },
    { id: "Ribbon Bouquets", name: "Ribbon Bouquets" },
    { id: "Crochet Wear", name: "Crochet Wear" },
    { id: "Home & Resin Art", name: "Home & Resin Art" }
];

// FAQ Data
export const faqs = [
    {
        question: "How long does hand-embroidery take?",
        answer: "Hand embroidery typically takes 5-10 business days depending on the complexity and size of the design. We'll provide you with an estimated timeline once we review your custom design."
    },
    {
        question: "How do I wash my embroidered t-shirt?",
        answer: "Hand wash in cold water or machine wash inside-out on gentle cycle. Avoid harsh detergents and bleach. Air dry or tumble dry on low heat. Iron on reverse side to preserve the embroidery."
    },
    {
        question: "Can I request a completely custom design?",
        answer: "Absolutely! Upload your design or describe your vision in detail, and our artisans will bring it to life. We'll send you a preview before starting the embroidery."
    },
    {
        question: "Do ribbon bouquets last forever?",
        answer: "Yes! Unlike real flowers, our ribbon bouquets are everlasting. They won't wilt or fade, making them perfect keepsakes and home decor."
    },
    {
        question: "What materials do you use for crochet items?",
        answer: "We use premium cotton and acrylic yarns that are soft, durable, and hypoallergenic. All crochet items are handmade with care."
    }
];

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
