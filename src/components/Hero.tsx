import { Button } from "@/components/ui/button";
import { ShoppingCart, Coffee } from "lucide-react";
import heroImage from "@/assets/coffee-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Coffee className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Premium Quality Coffee</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Nikmati Kopi <span className="text-accent">Premium</span> Pilihan
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Bubuk kopi pilihan dari biji kopi terbaik, diproses dengan sempurna untuk menghadirkan cita rasa autentik di setiap seduhan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
              <ShoppingCart className="w-5 h-5" />
              Pesan Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
