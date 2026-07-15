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

// Product catalog categories and items
export interface CatalogProduct {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    priceRange?: string;
    image: string;
    tags: string[];
    customizable: boolean;
    options?: {
        label: string;
        choices: string[];
    }[];
}

export const catalogProducts: CatalogProduct[] = [
    // Handkerchiefs
    {
        id: "hk-001",
        name: "Classic Embroidered Handkerchief",
        category: "Handkerchiefs",
        description: "Elegant handkerchief with delicate corner embroidery. Choose from our fixed templates or request a custom design.",
        price: "Starting at ₹200",
        priceRange: "₹200 - ₹500",
        image: embroideryImg,
        tags: ["cotton", "traditional", "gift"],
        customizable: true,
        options: [
            {
                label: "Handkerchief Size",
                choices: ["Small (10x10 inch)", "Medium (12x12 inch)", "Large (15x15 inch)"]
            },
            {
                label: "Embroidery Size",
                choices: ["Corner (2x2 inch)", "Medium (3x3 inch)", "Large (4x4 inch)"]
            },
            {
                label: "Design Type",
                choices: ["Fixed Template", "Custom Design"]
            }
        ]
    },
    {
        id: "hk-002",
        name: "Monogrammed Handkerchief Set",
        category: "Handkerchiefs",
        description: "Personalized handkerchief set with elegant monogram embroidery. Perfect for gifting.",
        price: "₹450 per set",
        priceRange: "₹450 - ₹800",
        image: embroideryImg,
        tags: ["personalized", "gift set", "monogram"],
        customizable: true,
        options: [
            {
                label: "Set Size",
                choices: ["Set of 2", "Set of 3", "Set of 5"]
            },
            {
                label: "Handkerchief Size",
                choices: ["Standard (12x12 inch)", "Premium (15x15 inch)"]
            },
            {
                label: "Thread Color",
                choices: ["Gold", "Silver", "Navy", "Burgundy", "Custom"]
            }
        ]
    },
    {
        id: "hk-003",
        name: "Floral Border Handkerchief",
        category: "Handkerchiefs",
        description: "Beautiful handkerchief with intricate floral border embroidery all around.",
        price: "₹350",
        image: embroideryImg,
        tags: ["floral", "detailed", "vintage"],
        customizable: true,
        options: [
            {
                label: "Size",
                choices: ["Medium (12x12 inch)", "Large (15x15 inch)"]
            },
            {
                label: "Design Pattern",
                choices: ["Rose Border", "Daisy Chain", "Mixed Florals", "Custom"]
            }
        ]
    },
    // Hand Embroidery on T-Shirts
    {
        id: "ts-001",
        name: "Custom Embroidered T-Shirt",
        category: "T-Shirt Embroidery",
        description: "Premium cotton t-shirt with hand-embroidered design of your choice. Perfect for expressing your unique style.",
        price: "Starting at ₹600",
        priceRange: "₹600 - ₹1200",
        image: embroideryImg,
        tags: ["custom", "apparel", "unique"],
        customizable: true,
        options: [
            {
                label: "T-Shirt Size",
                choices: ["XS", "S", "M", "L", "XL", "XXL"]
            },
            {
                label: "Embroidery Placement",
                choices: ["Chest Pocket", "Center Chest", "Sleeve", "Back", "Custom Position"]
            },
            {
                label: "Design Type",
                choices: ["Text/Quote", "Floral", "Abstract", "Custom Design"]
            },
            {
                label: "T-Shirt Color",
                choices: ["White", "Black", "Navy", "Grey", "Pastel Pink", "Sage Green"]
            }
        ]
    },
    {
        id: "ts-002",
        name: "Name Embroidered T-Shirt",
        category: "T-Shirt Embroidery",
        description: "Personalized t-shirt with elegant name embroidery. Great for gifts and special occasions.",
        price: "₹550",
        image: embroideryImg,
        tags: ["personalized", "gift", "name"],
        customizable: true,
        options: [
            {
                label: "Size",
                choices: ["XS", "S", "M", "L", "XL", "XXL"]
            },
            {
                label: "Font Style",
                choices: ["Script", "Block", "Cursive", "Modern"]
            }
        ]
    },
    {
        id: "ts-003",
        name: "Floral Embroidered T-Shirt",
        category: "T-Shirt Embroidery",
        description: "Delicate floral hand embroidery on premium cotton t-shirt. Each piece is unique.",
        price: "₹750",
        image: embroideryImg,
        tags: ["floral", "handmade", "unique"],
        customizable: true,
        options: [
            {
                label: "Size",
                choices: ["XS", "S", "M", "L", "XL"]
            },
            {
                label: "Floral Design",
                choices: ["Rose Bouquet", "Wildflowers", "Cherry Blossom", "Custom"]
            }
        ]
    },
    // Ribbon Flowers
    {
        id: "rf-001",
        name: "Ribbon Flower Bouquet - Small",
        category: "Ribbon Flowers",
        description: "Charming small bouquet of handmade ribbon flowers. Never wilts, lasts forever!",
        price: "₹400",
        image: ribbonBouquetImg,
        tags: ["bouquet", "gift", "handmade"],
        customizable: true,
        options: [
            {
                label: "Color Scheme",
                choices: ["Pastel Mix", "Red & Pink", "Purple & White", "Custom Colors"]
            },
            {
                label: "Flower Count",
                choices: ["5 flowers", "7 flowers"]
            }
        ]
    },
    {
        id: "rf-002",
        name: "Ribbon Flower Bouquet - Large",
        category: "Ribbon Flowers",
        description: "Stunning large arrangement of ribbon flowers. Perfect for special occasions and home decor.",
        price: "₹800",
        image: ribbonBouquetImg,
        tags: ["bouquet", "decor", "gift"],
        customizable: true,
        options: [
            {
                label: "Color Scheme",
                choices: ["Romantic Pink", "Elegant White", "Vibrant Mix", "Custom"]
            },
            {
                label: "Flower Count",
                choices: ["12 flowers", "15 flowers", "20 flowers"]
            }
        ]
    },
    {
        id: "rf-003",
        name: "Single Ribbon Rose",
        category: "Ribbon Flowers",
        description: "Elegant single ribbon rose. Perfect for corsages, boutonnieres, or gift toppers.",
        price: "₹80",
        image: ribbonBouquetImg,
        tags: ["rose", "single", "accessory"],
        customizable: true,
        options: [
            {
                label: "Color",
                choices: ["Red", "Pink", "White", "Peach", "Yellow", "Purple", "Custom"]
            }
        ]
    },
    // Crochet Items
    {
        id: "cr-001",
        name: "Crochet Coasters Set",
        category: "Crochet Items",
        description: "Handmade crochet coasters set. Beautiful and functional home decor.",
        price: "₹250 per set",
        image: crochetImg,
        tags: ["home decor", "functional", "handmade"],
        customizable: true,
        options: [
            {
                label: "Set Size",
                choices: ["Set of 4", "Set of 6"]
            },
            {
                label: "Color",
                choices: ["Natural", "White", "Pastel Mix", "Custom"]
            }
        ]
    },
    {
        id: "cr-002",
        name: "Crochet Plant Hanger",
        category: "Crochet Items",
        description: "Boho-style crochet plant hanger. Perfect for indoor plants and home styling.",
        price: "₹450",
        image: crochetImg,
        tags: ["boho", "plants", "home decor"],
        customizable: true
    },
    // Resin Art
    {
        id: "rs-001",
        name: "Resin Keychains",
        category: "Resin Art",
        description: "Custom resin keychains with pressed flowers or glitter. Each piece is unique.",
        price: "₹150",
        image: resinImg,
        tags: ["keychain", "accessory", "unique"],
        customizable: true,
        options: [
            {
                label: "Design",
                choices: ["Pressed Flowers", "Glitter", "Color Swirl", "Custom"]
            }
        ]
    },
    {
        id: "rs-002",
        name: "Resin Coasters",
        category: "Resin Art",
        description: "Beautiful resin coasters with embedded designs. Functional art for your home.",
        price: "₹400 per set",
        image: resinImg,
        tags: ["home decor", "functional", "art"],
        customizable: true
    },
    // Gift Hampers
    {
        id: "gh-001",
        name: "Custom Gift Hamper - Basic",
        category: "Gift Hampers",
        description: "Curated gift hamper with 3-4 handmade items of your choice. Beautifully packaged.",
        price: "Starting at ₹800",
        image: hamperImg,
        tags: ["gift", "curated", "special occasion"],
        customizable: true
    },
    {
        id: "gh-002",
        name: "Custom Gift Hamper - Premium",
        category: "Gift Hampers",
        description: "Luxurious gift hamper with 5-7 handmade items. Perfect for special celebrations.",
        price: "Starting at ₹1500",
        image: hamperImg,
        tags: ["gift", "luxury", "premium"],
        customizable: true
    }
];

export const productCategories = [
    { id: "all", name: "All Products", icon: "✨" },
    { id: "Handkerchiefs", name: "Handkerchiefs", icon: "🧵" },
    { id: "T-Shirt Embroidery", name: "T-Shirt Embroidery", icon: "👕" },
    { id: "Ribbon Flowers", name: "Ribbon Flowers", icon: "🌸" },
    { id: "Crochet Items", name: "Crochet Items", icon: "🧶" },
    { id: "Resin Art", name: "Resin Art", icon: "💎" },
    { id: "Gift Hampers", name: "Gift Hampers", icon: "🎁" }
];

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
