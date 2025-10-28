import { Button } from "@/components/ui/button";
import { Coffee, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 mb-4">
            <Coffee className="w-10 h-10" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Mulai Hari Anda dengan Kopi Terbaik
          </h2>
          
          <p className="text-xl opacity-90 leading-relaxed">
            Rasakan perbedaan kualitas premium dalam setiap tegukan. 
            Pesan sekarang dan dapatkan pengalaman kopi yang tak terlupakan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg gap-2 shadow-xl hover:shadow-2xl"
            >
              Pesan Sekarang
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Hubungi Kami
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-sm opacity-75">
            <div>
              <div className="font-bold text-2xl">1000+</div>
              <div>Pelanggan Puas</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/30" />
            <div>
              <div className="font-bold text-2xl">4.9/5</div>
              <div>Rating Produk</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/30" />
            <div>
              <div className="font-bold text-2xl">100%</div>
              <div>Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
