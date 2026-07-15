import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/FadeIn";
import { catalogProducts, productCategories } from "@/lib/constants";
import { Search, ShoppingBag, MessageCircle, Sparkles, X, Check } from "lucide-react";
import { orderOnWhatsApp } from "@/lib/config";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // Filter products based on category and search
  const filteredProducts = catalogProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const selectedProductData = catalogProducts.find((p) => p.id === selectedProduct);

  const handleOrder = (productName: string) => {
    orderOnWhatsApp(
      `Hi\! I'm interested in ordering: ${productName}\n\nCould you please provide more details?`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
              <Sparkles className="h-6 w-6" />
              <span className="font-['Cormorant_Garamond']">Ruhaniq House</span>
            </a>
            <Button onClick={() => orderOnWhatsApp("Hi\! I'd like to know more about your products.")}>
              <MessageCircle className="h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold font-['Cormorant_Garamond'] text-foreground mb-4">
              Our Product Catalog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Handcrafted with love, designed with care. Browse our collection of unique, personalized items.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-background/50 backdrop-blur">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products, categories, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-primary/20 focus:border-primary"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    px-6 py-3 rounded-full font-medium transition-all duration-300
                    ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "bg-card hover:bg-primary/10 text-foreground border border-border hover:border-primary/50"
                    }
                  `}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query</p>
              </div>
            </FadeIn>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <FadeIn key={product.id} delay={0.1 * (index % 8)}>
                  <Card className="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden border-2 hover:border-primary/50">
                    {/* Product Image */}
                    <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-primary/5 to-accent/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.customizable && (
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          Customizable
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-block bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-foreground">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Details */}
                    <CardHeader>
                      <CardTitle className="font-['Cormorant_Garamond'] text-xl group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-accent/50 text-accent-foreground px-2 py-0.5 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xl font-bold text-primary">{product.price}</p>
                      {product.priceRange && (
                        <p className="text-xs text-muted-foreground mt-1">Range: {product.priceRange}</p>
                      )}
                    </CardContent>

                    <CardFooter className="flex gap-2">
                      {product.customizable && product.options && (
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => setSelectedProduct(product.id)}
                        >
                          View Options
                        </Button>
                      )}
                      <Button
                        className="flex-1"
                        onClick={() => handleOrder(product.name)}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Order Now
                      </Button>
                    </CardFooter>
                  </Card>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && selectedProductData && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <FadeIn>
            <Card
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader className="relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <CardTitle className="font-['Cormorant_Garamond'] text-3xl pr-10">
                  {selectedProductData.name}
                </CardTitle>
                <CardDescription>{selectedProductData.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Product Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={selectedProductData.image}
                    alt={selectedProductData.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Price */}
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-2xl font-bold text-primary">{selectedProductData.price}</p>
                  {selectedProductData.priceRange && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Price Range: {selectedProductData.priceRange}
                    </p>
                  )}
                </div>

                {/* Customization Options */}
                {selectedProductData.options && selectedProductData.options.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Customization Options
                    </h3>
                    {selectedProductData.options.map((option, idx) => (
                      <div key={idx} className="border border-border rounded-lg p-4">
                        <p className="font-medium text-foreground mb-2">{option.label}:</p>
                        <div className="flex flex-wrap gap-2">
                          {option.choices.map((choice) => (
                            <span
                              key={choice}
                              className="inline-block bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md text-sm"
                            >
                              {choice}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProductData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => handleOrder(selectedProductData.name)}
                >
                  <MessageCircle className="h-5 w-5" />
                  Order via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          </FadeIn>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Made with <span className="text-primary">♥</span> by Ruhaniq House
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            All items are handcrafted and customizable. Contact us for special requests\!
          </p>
        </div>
      </footer>
    </div>
  );
}
