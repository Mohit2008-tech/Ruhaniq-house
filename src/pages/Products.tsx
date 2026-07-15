import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import EmbroideryLab from "@/components/catalog/EmbroideryLab";
import AestheticBoutique from "@/components/catalog/AestheticBoutique";
import CartSidebar from "@/components/catalog/CartSidebar";
import FAQAccordion from "@/components/catalog/FAQAccordion";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/useWindowSize";

export interface CartItem {
  id: string;
  type: "custom" | "product";
  name: string;
  price: number;
  details?: string;
  image?: string;
  quantity: number;
}

export default function Products() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setIsCartOpen(true), 300);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/30 to-amber-50/20">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}

      <FadeIn>
        <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-rose-600" />
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-stone-800">
                Ruhaniq Product Catalog
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 bg-rose-600 text-white rounded-full shadow-lg hover:bg-rose-700 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>
          </div>
        </header>
      </FadeIn>

      <main className="container mx-auto px-4 py-12 space-y-20">
        <section id="embroidery-lab">
          <FadeIn delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
                The Embroidery Lab
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Design your dream embroidery piece with our interactive
                step-by-step customizer.
              </p>
            </div>
          </FadeIn>
          <EmbroideryLab onAddToCart={addToCart} />
        </section>

        <section id="aesthetic-boutique">
          <FadeIn delay={0.3}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
                The Aesthetic Boutique
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Curated handcrafted pieces ready to add beauty to your life.
              </p>
            </div>
          </FadeIn>
          <AestheticBoutique onAddToCart={addToCart} />
        </section>

        <section id="faq">
          <FadeIn delay={0.4}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-stone-600">
                Everything you need to know about our handcrafted products.
              </p>
            </div>
          </FadeIn>
          <FAQAccordion />
        </section>
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        subtotal={subtotal}
      />
    </div>
  );
}
