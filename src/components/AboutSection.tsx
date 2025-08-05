import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Clock, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cheesecake is handcrafted with passion and attention to detail"
    },
    {
      icon: Award,
      title: "Authentic Recipe",
      description: "Traditional Basque techniques perfected over time"
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Baked fresh every day using only the finest ingredients"
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "A labor of love bringing families together through food"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Our Story
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crafted by <span className="text-accent">Two</span>, Loved by Many
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a shared passion for authentic Basque cheesecakes, Burna By Two represents 
            the perfect fusion of traditional techniques and modern innovation. Our signature burnt 
            tops and creamy interiors have become the talk of the town.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                The Art of Burnt Perfection
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                What started as an experiment in our home kitchen has grown into a beloved local brand. 
                We discovered that the secret to perfect Basque cheesecake lies not just in the recipe, 
                but in the patience and care that goes into each bake.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Quality in Every Bite
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Using only premium ingredients and time-honored techniques, we ensure every slice 
                delivers that perfect contrast - a beautifully caramelized exterior giving way to 
                a luxuriously creamy center that melts in your mouth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-accent">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">100% Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">No Preservatives</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Handcrafted Daily</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-caramel rounded-2xl p-8 shadow-warm">
              <div className="text-center text-primary-foreground">
                <div className="text-4xl md:text-6xl font-bold font-serif mb-2">500+</div>
                <div className="text-lg mb-4">Happy Customers</div>
                <div className="text-sm opacity-90">
                  "The best Basque cheesecake in town! Perfectly burnt exterior and incredibly creamy inside."
                </div>
                <div className="text-xs mt-2 opacity-75">- Sarah M., Regular Customer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 bg-card/50 backdrop-blur-sm border-accent/20">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-caramel rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;