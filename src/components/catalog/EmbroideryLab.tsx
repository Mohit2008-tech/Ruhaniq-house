import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Shirt, 
  ChevronRight, 
  UploadCloud, 
  Ruler, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  embroideryCanvases,
  materiaSizes,
  embroideryStyles,
} from "@/lib/constants";
import type { CartItem } from "@/pages/Products";

interface Props {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

export default function EmbroideryLab({ onAddToCart }: Props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCanvas, setSelectedCanvas] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  const canvas = embroideryCanvases.find((c) => c.id === selectedCanvas);
  const style = embroideryStyles.find((s) => s.id === selectedStyle);
  const totalPrice = (canvas?.basePrice || 0) + (style?.priceAddon || 0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleAddToCart = () => {
    if (!canvas || !selectedSize || !style) return;

    onAddToCart({
      id: `custom-${Date.now()}`,
      type: "custom",
      name: `Custom ${canvas.name} Embroidery`,
      price: totalPrice,
      details: `Size: ${selectedSize} | Style: ${style.name}${
        description ? ` | ${description.slice(0, 50)}...` : ""
      }`,
      image: canvas.image,
    });

    // Reset form
    setCurrentStep(1);
    setSelectedCanvas(null);
    setSelectedSize(null);
    setSelectedStyle(null);
    setUploadedFile(null);
    setDescription("");
  };

  const canProceed = () => {
    if (currentStep === 1) return selectedCanvas !== null;
    if (currentStep === 2) return selectedSize !== null;
    if (currentStep === 3) return selectedStyle !== null;
    if (currentStep === 4) return uploadedFile !== null || description !== "";
    return false;
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left: Visual Preview */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="sticky top-24 overflow-hidden border-2 border-stone-200 shadow-xl">
          <CardContent className="p-8">
            <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg flex items-center justify-center relative overflow-hidden">
              {canvas ? (
                <motion.img
                  key={canvas.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={canvas.image}
                  alt={canvas.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-stone-400">
                  <Shirt className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg font-medium">Select your canvas</p>
                </div>
              )}
              
              {/* Embroidery Size Indicator */}
              {style && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {style.name}
                </motion.div>
              )}
            </div>

            {/* Price Display */}
            <motion.div
              layout
              className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-stone-600">Base Price:</span>
                <span className="font-semibold">₹{canvas?.basePrice || 0}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-stone-600">Embroidery:</span>
                <span className="font-semibold">₹{style?.priceAddon || 0}</span>
              </div>
              <div className="border-t border-amber-300 pt-2 mt-2 flex justify-between items-center">
                <span className="text-lg font-bold text-stone-800">Total:</span>
                <span className="text-2xl font-bold text-rose-600">₹{totalPrice}</span>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Right: Interactive Steps */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <motion.div
                animate={{
                  scale: currentStep === step ? 1.2 : 1,
                  backgroundColor:
                    currentStep >= step ? "#e11d48" : "#d6d3d1",
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              >
                {currentStep > step ? <CheckCircle2 className="w-6 h-6" /> : step}
              </motion.div>
              {step < 4 && (
                <div
                  className={`h-1 w-12 lg:w-16 ${
                    currentStep > step ? "bg-rose-600" : "bg-stone-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Select Canvas */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
              Step 1: Select Your Canvas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {embroideryCanvases.map((canvas) => (
                <motion.button
                  key={canvas.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCanvas(canvas.id)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    selectedCanvas === canvas.id
                      ? "border-rose-600 bg-rose-50 shadow-lg"
                      : "border-stone-200 bg-white hover:border-rose-300"
                  }`}
                >
                  <div className="text-4xl mb-2">{canvas.icon}</div>
                  <p className="font-semibold text-stone-800">{canvas.name}</p>
                  <p className="text-sm text-stone-600">₹{canvas.basePrice}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Select Size */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
              Step 2: Choose Material Size
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {materiaSizes.map((size) => (
                <motion.button
                  key={size.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedSize(size.name)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedSize === size.name
                      ? "bg-rose-600 text-white shadow-lg"
                      : "bg-white border-2 border-stone-300 text-stone-700 hover:border-rose-400"
                  }`}
                >
                  {size.name}
                </motion.button>
              ))}
            </div>
            <button className="text-rose-600 hover:underline flex items-center gap-1 text-sm">
              <Ruler className="w-4 h-4" />
              View Size Guide
            </button>
          </motion.div>
        )}

        {/* Step 3: Embroidery Size */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
              Step 3: Choose Embroidery Size & Placement
            </h3>
            <div className="space-y-4">
              {embroideryStyles.map((style) => (
                <motion.button
                  key={style.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    selectedStyle === style.id
                      ? "border-rose-600 bg-rose-50 shadow-lg"
                      : "border-stone-200 bg-white hover:border-rose-300"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-stone-800">{style.name}</p>
                      <p className="text-sm text-stone-600">{style.description}</p>
                    </div>
                    <span className="text-rose-600 font-bold">
                      +₹{style.priceAddon}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 4: Upload & Description */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
              Step 4: Customization & Upload
            </h3>

            {/* File Upload */}
            <div>
              <Label className="text-stone-700 mb-2 block">
                Upload Your Design
              </Label>
              <label className="border-2 border-dashed border-stone-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-rose-400 transition-colors bg-white">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <UploadCloud className="w-12 h-12 text-stone-400 mb-2" />
                {uploadedFile ? (
                  <p className="text-green-600 font-medium">
                    ✓ {uploadedFile.name}
                  </p>
                ) : (
                  <>
                    <p className="text-stone-600 font-medium">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-stone-400">
                      PNG, JPG up to 10MB
                    </p>
                  </>
                )}
              </label>
            </div>

            {/* Description */}
            <div>
              <Label className="text-stone-700 mb-2 block">
                Describe Your Dream Embroidery
              </Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="E.g., 'Small bouquet of lavender with initials R&A'"
                className="min-h-32 resize-none"
              />
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-6">
          {currentStep > 1 && (
            <Button
              onClick={() => setCurrentStep((s) => s - 1)}
              variant="outline"
              className="flex-1"
            >
              Previous
            </Button>
          )}
          {currentStep < 4 ? (
            <Button
              onClick={() => setCurrentStep((s) => s + 1)}
              disabled={!canProceed()}
              className="flex-1 bg-rose-600 hover:bg-rose-700"
            >
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={handleAddToCart}
              disabled={!canProceed()}
              className="flex-1 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
