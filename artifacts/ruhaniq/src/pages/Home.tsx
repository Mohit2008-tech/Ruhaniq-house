import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Hand, Infinity, Sparkles, Instagram, Phone, Play, Pause, ChevronRight } from "lucide-react";

import logoImage from "@assets/image_1780078393199.png";
import heroBg from "@assets/1_1780078403802.png";
import ribbonBouquetImg from "@assets/2_1780078403802.png";
import candleImg from "@assets/3_1780078403802.png";
import crochetImg from "@assets/4_1780078403802.png";
import embroideryImg from "@assets/5_1780078403802.png";
import resinImg from "@assets/6_1780078403802.png";
import hamperImg from "@assets/7_1780078403802.png";
import brandVideo from "@assets/Introducing_RUHANIQ_🪷🪷✨.RUHANIQ_🪷✨Pretty_things_with_a_soul_1780078412326.mp4";
import photo1 from "@assets/IMG_20260529_232649_1780078374927.jpg";
import photo2 from "@assets/IMG_20260529_232651_1780078374927.jpg";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* 1. Sticky Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logoImage} alt="Ruhaniq Logo" className="w-10 h-10 object-contain rounded-full" />
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wider text-foreground">RUHANIQ</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-foreground/80">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">Products</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
            Order Now
          </Button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Handmade creations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-foreground text-sm font-medium mb-8 backdrop-blur-sm border border-secondary">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Handmade with love</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium italic text-foreground mb-6 leading-tight">
              Pretty things with a soul
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light">
              Nazakat in every detail &#8212; handcrafted with love and warmth.
            </p>
          </FadeIn>
          <FadeIn delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection('products')} className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-lg h-14 px-8">
              Explore Our Creations
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('video')} className="rounded-full border-primary/20 bg-background/50 hover:bg-background/80 text-foreground w-full sm:w-auto text-lg h-14 px-8 backdrop-blur-sm">
              Watch Us Create
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 5. Values Strip */}
      <section className="bg-secondary/30 py-12 border-y border-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeIn delay={0} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Hand className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">100% Handmade</h3>
            </FadeIn>
            <FadeIn delay={100} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">Made with Love</h3>
            </FadeIn>
            <FadeIn delay={200} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Infinity className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">Fully Customisable</h3>
            </FadeIn>
            <FadeIn delay={300} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">Affordable Luxury</h3>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Products Showcase Grid */}
      <section id="products" className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">Our Creations</h2>
              <p className="text-lg text-foreground/70">Each piece is made by hand, with intention and care</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((product, i) => (
              <FadeIn key={i} delay={i * 100}>
                <Card className="group overflow-hidden rounded-3xl border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-card h-full flex flex-col hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="font-serif text-2xl font-medium text-white drop-shadow-sm">{product.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <p className="text-foreground/80 mb-4 flex-1 italic">{product.desc}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="font-medium text-primary">{product.price}</span>
                      <Button variant="ghost" onClick={() => scrollToSection('contact')} className="rounded-full hover:bg-primary hover:text-white transition-colors group/btn">
                        Order <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Video Section */}
      <section id="video" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">The Magic Behind Every Piece</h2>
              <p className="text-lg text-foreground/70">See the love and labor that goes into every creation</p>
            </FadeIn>
          </div>
          
          <FadeIn delay={200}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card border border-border/30 group">
              <video 
                ref={videoRef}
                src={brandVideo} 
                className="w-full aspect-video object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button 
                  onClick={toggleVideo}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                >
                  {isVideoPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-serif text-xl md:text-2xl text-center italic">
                  See how every piece is made with love &#8212; Introducing Ruhaniq
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Pricing Section Highlight */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">Beautiful Art, Honest Prices</h2>
              <p className="text-lg text-foreground/70">Handcrafted quality that won't break your heart &#8212; or your budget</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Crochet Accessories", price: "from ₹79", icon: <Infinity className="w-8 h-8 text-primary" /> },
              { name: "Ribbon Bouquets", price: "from ₹150", icon: <Heart className="w-8 h-8 text-primary" />, featured: true },
              { name: "Gift Hampers", price: "from ₹499", icon: <Sparkles className="w-8 h-8 text-primary" /> }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <Card className={`rounded-3xl border-0 text-center p-8 h-full flex flex-col justify-center items-center gap-4 transition-transform hover:-translate-y-2 ${item.featured ? 'bg-secondary/40 shadow-md ring-1 ring-primary/20' : 'bg-card shadow-sm'}`}>
                  <div className="p-4 rounded-full bg-background shadow-sm mb-2">{item.icon}</div>
                  <h3 className="font-serif text-2xl font-medium">{item.name}</h3>
                  <p className="text-2xl text-primary font-light mb-4">{item.price}</p>
                  <Button onClick={() => scrollToSection('contact')} variant={item.featured ? "default" : "outline"} className={`rounded-full w-full ${item.featured ? 'bg-primary hover:bg-primary/90 text-white' : 'border-primary/30 text-foreground hover:bg-primary/10'}`}>
                    Order Now
                  </Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. About Section */}
      <section id="about" className="py-24 bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 relative w-full max-w-md mx-auto">
              <FadeIn className="relative z-10">
                <img src={photo1} alt="Handmade process" className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5] origin-bottom-left rotate-2" />
              </FadeIn>
              <FadeIn delay={200} className="absolute -bottom-10 -right-10 w-2/3 z-20">
                <img src={photo2} alt="Finished product" className="rounded-3xl shadow-2xl w-full object-cover aspect-square border-4 border-background origin-top-right -rotate-3" />
              </FadeIn>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/30 rounded-full blur-3xl z-0"></div>
            </div>
            
            <div className="flex-1 max-w-xl">
              <FadeIn delay={100}>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">The Story of Ruhaniq</h2>
                <div className="prose prose-lg prose-p:font-light prose-p:leading-relaxed text-foreground/80">
                  <p className="text-xl italic font-serif text-primary mb-6">
                    "We believe beautiful things should have a soul, and every piece we create carries a little piece of our heart."
                  </p>
                  <p className="mb-4">
                    Ruhaniq was born out of a deep love for making things by hand. Every ribbon tied, every stitch sewn, every candle poured &#8212; it's all done with intention, patience, and warmth.
                  </p>
                  <p>
                    In a world of mass-produced goods, we wanted to create a space that feels like stumbling upon a quiet, beautifully lit handmade studio at golden hour. A place where things are made slow, made well, and made just for you.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">Words from Our Customers</h2>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "This bouquet made my friend cry happy tears \u2728", author: "Zara, Mumbai" },
              { text: "My resin keychain is so beautiful, everyone asks where I got it!", author: "Aisha, Delhi" },
              { text: "The gift hamper for my mom's birthday was absolutely perfect", author: "Priya, Bangalore" }
            ].map((quote, i) => (
              <FadeIn key={i} delay={i * 150}>
                <Card className="bg-card border-0 rounded-3xl shadow-sm p-8 h-full relative">
                  <div className="absolute top-6 left-6 text-6xl font-serif text-primary/10">"</div>
                  <div className="relative z-10">
                    <p className="text-lg font-serif italic text-foreground/80 mb-6 mt-4">"{quote.text}"</p>
                    <p className="font-medium text-primary text-sm tracking-wide uppercase">&#8212; {quote.author}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact / Order Section */}
      <section id="contact" className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-5/12 bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="relative z-10">
                <h2 className="font-serif text-4xl font-medium mb-4">Let's create something beautiful together</h2>
                <p className="text-white/80 text-lg font-light mb-12">
                  Have a custom request or ready to place an order? Send us a message and we'll craft it with love.
                </p>
              </div>
              <div className="relative z-10 space-y-6">
                <a href="#" className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">@ruhaniq.house</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">WhatsApp Us</span>
                </a>
              </div>
            </div>
            
            <div className="md:w-7/12 p-12 bg-card">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 pl-1">Name</label>
                  <Input placeholder="Your beautiful name" className="rounded-2xl h-14 bg-background border-border/50 focus-visible:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 pl-1">Email or WhatsApp Number</label>
                  <Input placeholder="How should we reach you?" className="rounded-2xl h-14 bg-background border-border/50 focus-visible:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 pl-1">What are you looking for?</label>
                  <Input placeholder="E.g., Ribbon bouquet for a birthday" className="rounded-2xl h-14 bg-background border-border/50 focus-visible:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 pl-1">Message (Optional)</label>
                  <Textarea placeholder="Any specific colors, details, or feelings you want to capture..." className="rounded-2xl min-h-[120px] resize-none bg-background border-border/50 focus-visible:ring-primary/20 p-4" />
                </div>
                <Button className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-lg mt-4 shadow-sm text-white">
                  Send a Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-background py-16 border-t border-border/40">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
          <img src={logoImage} alt="Ruhaniq Logo" className="w-16 h-16 object-contain rounded-full mb-6" />
          <h2 className="font-serif text-3xl font-semibold tracking-widest text-foreground mb-8">RUHANIQ</h2>
          
          <div className="flex flex-col gap-2 font-serif text-xl italic text-foreground/70 mb-12">
            <p>Pretty things with a soul</p>
            <p>Nazakat in every detail</p>
            <p>Handcrafted with love and warmth</p>
          </div>
          
          <div className="flex gap-8 mb-12 text-sm font-medium uppercase tracking-widest text-foreground/60">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">Products</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
          </div>
          
          <div className="w-24 h-px bg-border/60 mb-8"></div>
          
          <p className="text-foreground/50 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Ruhaniq
          </p>
        </div>
      </footer>
    </div>
  );
}
