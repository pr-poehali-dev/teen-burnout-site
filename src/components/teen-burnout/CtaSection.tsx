
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-[#8B5CF6]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Не игнорируй сигналы своего организма</h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Эмоциональное выгорание — это не признак слабости, а сигнал, что пора позаботиться о себе. Сделай первый шаг к восстановлению.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-[#8B5CF6] hover:bg-white/90">
            Получить консультацию
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Скачать руководство по самопомощи
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
