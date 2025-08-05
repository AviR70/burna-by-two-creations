import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import heroImage from "@/assets/hero-premium-bakery.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Artisan Basque Cheesecakes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-caramel text-primary-foreground px-4 py-2 rounded-full mb-6 shadow-warm animate-fade-in">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Delightful Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            Where Every <span className="text-accent">Burnt Basque</span>
            <br />
            Tells a Story
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Handcrafted with passion, our signature Basque cheesecakes feature the perfect caramelized exterior and irresistibly creamy interior. Each slice is a masterpiece of burnt perfection.
          </p>

          {/* Pricing */}
          <div className="flex items-center gap-2 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="text-2xl font-bold text-accent">Starting from ₹149/-</span>
            <span className="text-muted-foreground">• Free delivery on orders above ₹500</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" className="group">
              Order Now
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="obsidian" size="xl">
              View Menu
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Handcrafted</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Signature Burnt Top</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;