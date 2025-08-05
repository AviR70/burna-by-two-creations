import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Clock, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Get in Touch
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Order Your Perfect <span className="text-accent">Basque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the perfect burnt cheesecake? Contact us to place your order 
            or for any special requirements.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp */}
          <Card className="text-center hover:shadow-warm transition-all duration-300 bg-background/80 backdrop-blur-sm border-accent/20">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground text-xl mb-3">WhatsApp Order</h3>
              <p className="text-muted-foreground mb-6">
                Quick and easy ordering through WhatsApp
              </p>
              <div className="space-y-2 mb-6">
                <div className="font-medium text-foreground">+91 8657775925</div>
                <div className="font-medium text-foreground">+91 8369192940</div>
              </div>
              <Button variant="glow" className="w-full bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Order on WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="text-center hover:shadow-warm transition-all duration-300 bg-background/80 backdrop-blur-sm border-accent/20">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-caramel rounded-full mb-6">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-xl mb-3">Call Us</h3>
              <p className="text-muted-foreground mb-6">
                Speak directly with our team for custom orders
              </p>
              <div className="space-y-2 mb-6">
                <div className="font-medium text-foreground">+91 8657775925</div>
                <div className="font-medium text-foreground">+91 8369192940</div>
              </div>
              <Button variant="hero" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </CardContent>
          </Card>

          {/* Instagram */}
          <Card className="text-center hover:shadow-warm transition-all duration-300 bg-background/80 backdrop-blur-sm border-accent/20">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground text-xl mb-3">Follow Us</h3>
              <p className="text-muted-foreground mb-6">
                See our latest creations and customer reviews
              </p>
              <div className="font-medium text-foreground mb-6">
                @burna_by_two
              </div>
              <Button variant="cream" className="w-full">
                <Instagram className="w-4 h-4 mr-2" />
                Follow on Instagram
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Operating Hours & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hours */}
          <Card className="bg-background/60 backdrop-blur-sm border-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-accent" />
                <h3 className="font-semibold text-foreground text-xl">Operating Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Daily</span>
                  <span className="font-medium text-foreground">10:00 AM - 12:00 AM</span>
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-sm text-muted-foreground">
                    *Please order 1-2 days in advance for half kg and 1 kg cakes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Info */}
          <Card className="bg-background/60 backdrop-blur-sm border-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="font-semibold text-foreground text-xl">Delivery Info</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Free Delivery</span>
                  <span className="font-medium text-foreground">Orders above ₹500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Time</span>
                  <span className="font-medium text-foreground">Same Day*</span>
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-sm text-muted-foreground">
                    *Delivery available within city limits
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-caramel rounded-2xl p-8 shadow-warm max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
              Ready to taste perfection?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Join hundreds of satisfied customers who trust us for their special moments
            </p>
            <Button variant="cream" size="lg">
              Place Your Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;