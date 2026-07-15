import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Eye, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { boutiqueProducts, boutiqueCategories } from "@/lib/constants";
import type { CartItem } from "@/pages/Products";

interface Props {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

export default function AestheticBoutique({ onAddToCart }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVariants, setSelectedVariants] = useState<Record<string, number>>({});

  const filteredProducts =
    selectedCategory === "all"
      ? boutiqueProducts
      : boutiqueProducts.filter((p) => p.category === selectedCategory);

  const getProductImage = (productId: string) => {
    const product = boutiqueProducts.find((p) => p.id === productId);
    if (!product) return "";
    
    const variantIndex = selectedVariants[productId] || 0;
    if (product.variants && product.variants[variantIndex]) {
      return product.variants[variantIndex].image;
    }
    return product.image;
  };

  const getProductName = (productId: string) => {
    const product = boutiqueProducts.find((p) => p.id === productId);
    if (!product) return "";
    
    const variantIndex = selectedVariants[productId] || 0;
    if (product.variants && product.variants[variantIndex]) {
      return `${product.variants[variantIndex].color} ${product.name.split(' ').slice(1).join(' ')}`;
    }
    return product.name;
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {boutiqueCategories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg"
                : "bg-white border-2 border-stone-300 text-stone-700 hover:border-rose-400"
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Product Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="group overflow-hidden border-2 border-stone-200 hover:border-rose-300 transition-all hover:shadow-2xl">
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                  {/* Badge */}
                  {product.badge && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg"
                    >
                      {product.badge}
                    </motion.div>
                  )}

                  {/* Product Image */}
                  <motion.img
                    src={getProductImage(product.id)}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 hover:bg-white"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      onClick={() =>
                        onAddToCart({
                          id: `${product.id}-${Date.now()}`,
                          type: "product",
                          name: getProductName(product.id),
                          price: product.price,
                          image: getProductImage(product.id),
                        })
                      }
                      className="bg-rose-600 hover:bg-rose-700"
                    >
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      Quick Add
                    </Button>
                  </motion.div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-bold text-stone-800 mb-1 line-clamp-1">
                    {getProductName(product.id)}
                  </h3>
                  <p className="text-sm text-stone-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Color Variants */}
                  {product.variants && (
                    <div className="flex gap-2 mb-3">
                      {product.variants.map((variant, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            setSelectedVariants((prev) => ({
                              ...prev,
                              [product.id]: idx,
                            }))
                          }
                          className={`w-8 h-8 rounded-full border-2 transition-all overflow-hidden ${
                            (selectedVariants[product.id] || 0) === idx
                              ? "border-rose-600 ring-2 ring-rose-200"
                              : "border-stone-300"
                          }`}
                          style={{
                            backgroundImage: `url(${variant.image})`,
                            backgroundSize: "cover",
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-rose-600">
                      ₹{product.price}
                    </span>
                    <Sparkles className="w-5 h-5 text-amber-500" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-2xl text-stone-400">No products found</p>
        </motion.div>
      )}
    </div>
  );
}
