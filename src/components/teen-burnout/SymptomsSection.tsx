
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SymptomCard = ({ 
  icon, 
  title, 
  symptoms 
}: { 
  icon: string; 
  title: string; 
  symptoms: string[] 
}) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="bg-[#E5DEFF] p-3 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <Icon name={icon} className="text-[#8B5CF6]" />
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-[#555555]">
        {symptoms.map((symptom, index) => (
          <li key={index}>• {symptom}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const SymptomsSection = () => {
  const symptomsData = [
    {
      icon: "Battery",
      title: "Физическое истощение",
      symptoms: [
        "Постоянная усталость, недостаток энергии",
        "Проблемы со сном (бессонница или сонливость)",
        "Частые головные боли, проблемы с пищеварением",
        "Ослабленный иммунитет, частые болезни"
      ]
    },
    {
      icon: "Brain",
      title: "Эмоциональные признаки",
      symptoms: [
        "Чувство беспомощности, безнадежности",
        "Потеря мотивации и интереса",
        "Раздражительность, вспышки гнева",
        "Тревога, депрессивные состояния"
      ]
    },
    {
      icon: "Users",
      title: "Поведенческие изменения",
      symptoms: [
        "Избегание общения, изоляция",
        "Снижение успеваемости",
        "Прокрастинация, избегание обязанностей",
        "Зависимость от гаджетов, игр как способ избегания"
      ]
    }
  ];

  return (
    <section id="symptoms" className="py-16 bg-[#F6F7F8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#403E43]">Как распознать выгорание?</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptomsData.map((data, index) => (
            <SymptomCard 
              key={index}
              icon={data.icon}
              title={data.title}
              symptoms={data.symptoms}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
            Пройти онлайн-диагностику
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
