
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-[#403E43] mb-4">
            Эмоциональное выгорание среди подростков
          </h2>
          <p className="text-lg text-[#8A898C] mb-6">
            Современные подростки сталкиваются с растущим давлением в школе, социальных сетях и дома. 
            Узнайте, как распознать признаки выгорания и помочь себе или близким.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
              Пройти тест на выгорание
            </Button>
            <Button variant="outline" className="border-[#8B5CF6] text-[#8B5CF6]">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
            alt="Подросток с признаками усталости" 
            className="rounded-lg shadow-lg w-full object-cover h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
