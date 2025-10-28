import { Sparkles, Heart, Package } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "100% Biji Kopi Pilihan",
    description: "Dipilih dengan cermat dari perkebunan terbaik untuk kualitas premium yang konsisten.",
  },
  {
    icon: Heart,
    title: "Proses Alami",
    description: "Diproses tanpa bahan kimia berbahaya, menjaga keaslian rasa dan aroma kopi.",
  },
  {
    icon: Package,
    title: "Kemasan Berkualitas",
    description: "Dikemas rapat untuk menjaga kesegaran dan aroma kopi lebih lama.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Mengapa Memilih <span className="text-accent">Kopi Kami?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komitmen kami adalah menghadirkan kopi berkualitas tinggi dengan rasa yang tak terlupakan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
