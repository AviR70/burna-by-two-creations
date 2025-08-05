import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Info } from "lucide-react";

const MenuSection = () => {
  const menuItems = [
    {
      name: "Classic Vanilla Basque",
      price: { slice: 149, "500g": 499, "1kg": 999 },
      description: "Our signature vanilla burnt cheesecake with perfect caramelized top",
      popular: true
    },
    {
      name: "Dark Chocolate Basque",
      price: { slice: 149, "500g": 499, "1kg": 999 },
      description: "Rich dark chocolate meets burnt perfection"
    },
    {
      name: "Nutella Basque",
      price: { slice: 159, "500g": 569, "1kg": 1079 },
      description: "Indulgent Nutella flavored with signature burnt exterior"
    },
    {
      name: "Lotus Biscoff Basque",
      price: { slice: 169, "500g": 579, "1kg": 1089 },
      description: "Caramelized biscuit flavor with crunchy Biscoff pieces"
    },
    {
      name: "Blueberry Basque",
      price: { slice: 179, "500g": 589, "1kg": 1099 },
      description: "Fresh blueberry compote swirled through creamy cheesecake"
    },
    {
      name: "Pistachio Basque",
      price: { slice: 199, "500g": 599, "1kg": 1199 },
      description: "Premium pistachio flavor with crushed nuts"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Our Signature Menu
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Basque Style Cheesecakes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each cheesecake is carefully crafted with the finest ingredients, 
            baked to achieve that perfect burnt caramelized top that makes Basque cheesecakes legendary.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-background/80 backdrop-blur-sm border-accent/20"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  {item.popular && (
                    <Badge className="bg-accent text-accent-foreground">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Pricing */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Per Slice</span>
                    <span className="font-semibold text-accent">₹{item.price.slice}/-</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">500 gm</span>
                    <span className="font-semibold text-foreground">₹{item.price["500g"]}/-</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">1 kg</span>
                    <span className="font-semibold text-foreground">₹{item.price["1kg"]}/-</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="hero" size="sm" className="flex-1">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order
                  </Button>
                  <Button variant="cream" size="sm">
                    <Info className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Availability</h4>
              <p>*Above cakes are available in eggless options as well</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Pre-order</h4>
              <p>*Please order 1-2 days prior for half kg and 1 kg cakes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;