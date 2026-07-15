import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { CartItem } from "@/pages/Products";
import { orderOnWhatsApp } from "@/lib/config";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  subtotal: number;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  subtotal,
}: Props) {
  const handleCheckout = () => {
    const itemsList = cartItems
      .map(
        (item) =>
          `• ${item.name} (×${item.quantity}) - ₹${item.price * item.quantity}${
            item.details ? `\n  Details: ${item.details}` : ""
          }`
      )
      .join("\n");

    const message = `Hi\! I'd like to order the following items:\n\n${itemsList}\n\n*Total: ₹${subtotal}*\n\nPlease confirm availability and delivery details.`;
    orderOnWhatsApp(message);
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-200 bg-gradient-to-r from-rose-50 to-amber-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-rose-600" />
                  <h2 className="text-2xl font-serif font-bold text-stone-800">
                    Your Cart
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-stone-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm text-stone-600 mt-2">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
              </p>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20"
                >
                  <ShoppingBag className="w-16 h-16 text-stone-300 mx-auto mb-4" />
                  <p className="text-stone-400 text-lg">Your cart is empty</p>
                  <p className="text-stone-400 text-sm mt-2">
                    Start adding beautiful handcrafted items\!
                  </p>
                </motion.div>
              ) : (
                cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-stone-50 rounded-lg p-4 border border-stone-200"
                  >
                    <div className="flex gap-4">
                      {/* Image */}
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                      )}

                      {/* Details */}
                      <div className="flex-1">
                        <h3 className="font-bold text-stone-800 mb-1">
                          {item.name}
                        </h3>
                        {item.details && (
                          <p className="text-xs text-stone-600 mb-2">
                            {item.details}
                          </p>
                        )}
                        <p className="text-rose-600 font-bold">₹{item.price}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-3">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 rounded-full bg-stone-200 hover:bg-stone-300 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 rounded-full bg-rose-600 hover:bg-rose-700 text-white transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, 0)}
                            className="ml-auto p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-stone-200 bg-stone-50">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Delivery</span>
                    <span className="text-sm">Calculated at checkout</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold text-stone-800">
                    <span>Total</span>
                    <span className="text-rose-600">₹{subtotal}</span>
                  </div>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold py-6 text-lg"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-center text-stone-500 mt-3">
                  You'll be redirected to WhatsApp to complete your order
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
