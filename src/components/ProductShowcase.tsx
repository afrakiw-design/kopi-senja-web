import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle } from "lucide-react";
import coffeeBeansImage from "@/assets/coffee-beans.jpg";
import coffeeBrewingImage from "@/assets/coffee-brewing.jpg";

const ProductShowcase = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                Best Seller
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Bubuk Kopi Premium
              </h2>
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <span className="text-muted-foreground ml-2">(4.9/5.0 dari 200+ ulasan)</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nikmati kesempurnaan dalam setiap cangkir dengan bubuk kopi premium kami. 
                Diproduksi dari biji kopi pilihan yang dipanggang dengan sempurna untuk 
                menghasilkan cita rasa yang kaya dan aroma yang menggugah selera.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "Berasal dari perkebunan berkualitas tinggi",
                "Dipanggang fresh untuk kesegaran maksimal",
                "Cocok untuk berbagai metode seduh",
                "Tanpa bahan pengawet dan pewarna buatan"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg">
                Beli Sekarang - Rp 89.000
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-2">
                Lihat Detail Produk
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={coffeeBeansImage}
                  alt="Premium Coffee Beans"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
                <div className="bg-card p-6 rounded-2xl border-2 hover:border-accent/50 transition-colors">
                  <h4 className="font-bold text-2xl mb-1">250g</h4>
                  <p className="text-muted-foreground">Ukuran Perfect</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-card p-6 rounded-2xl border-2 hover:border-accent/50 transition-colors">
                  <h4 className="font-bold text-2xl mb-1">Fresh</h4>
                  <p className="text-muted-foreground">Roasted Daily</p>
                </div>
                <img
                  src={coffeeBrewingImage}
                  alt="Coffee Brewing Process"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
