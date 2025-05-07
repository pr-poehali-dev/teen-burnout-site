
import Icon from "@/components/ui/icon";

interface PreventionItemProps {
  icon: string;
  title: string;
  description: string;
}

const PreventionItem = ({ icon, title, description }: PreventionItemProps) => (
  <div className="mb-6">
    <h3 className="flex items-center text-xl font-semibold text-[#403E43] mb-3">
      <Icon name={icon} className="text-[#8B5CF6] mr-2" size={20} />
      {title}
    </h3>
    <p className="text-[#555555]">
      {description}
    </p>
  </div>
);

const PreventionSection = () => {
  const preventionItems = [
    {
      icon: "Clock",
      title: "Режим дня и отдых",
      description: "Регулярный сон, режим питания и включение в расписание времени для отдыха помогают восстановить энергию и предотвратить истощение."
    },
    {
      icon: "Heart",
      title: "Забота о физическом здоровье",
      description: "Физическая активность, правильное питание и время на природе улучшают самочувствие и повышают устойчивость к стрессу."
    },
    {
      icon: "MessageSquare",
      title: "Социальная поддержка",
      description: "Общение с друзьями, семьей или психологом позволяет делиться переживаниями и получать эмоциональную поддержку."
    },
    {
      icon: "BatteryCharging",
      title: "Управление стрессом",
      description: "Техники релаксации, медитация и дыхательные упражнения помогают снизить уровень тревоги и восстановить эмоциональный баланс."
    }
  ];

  return (
    <section id="prevention" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#403E43]">Профилактика выгорания</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <img 
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
            alt="Техники профилактики выгорания" 
            className="rounded-lg shadow-lg h-[400px] object-cover w-full"
          />
          
          <div>
            {preventionItems.map((item, index) => (
              <PreventionItem 
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreventionSection;
