
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface HelpCardProps {
  icon: string;
  title: string;
  description: string;
  actionText?: string;
  additionalInfo?: string;
}

const HelpCard = ({ icon, title, description, actionText, additionalInfo }: HelpCardProps) => (
  <Card className="hover:shadow-lg transition-shadow bg-white">
    <CardHeader>
      <CardTitle className="flex items-center">
        <Icon name={icon} className="text-[#8B5CF6] mr-2" size={20} />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-[#555555] mb-4">
        {description}
      </p>
      {additionalInfo && (
        <>
          <p className="font-semibold">{additionalInfo}</p>
          <p className="text-sm text-[#8A898C]">Всероссийский телефон доверия для детей и подростков</p>
        </>
      )}
      {actionText && (
        <Button variant="link" className="text-[#8B5CF6] p-0 mt-2">
          {actionText}
        </Button>
      )}
    </CardContent>
  </Card>
);

const HelpSection = () => {
  const helpCards = [
    {
      icon: "Phone",
      title: "Телефоны доверия",
      description: "Анонимная экстренная психологическая помощь от специалистов по телефону.",
      additionalInfo: "8-800-2000-122"
    },
    {
      icon: "Building",
      title: "Психологические центры",
      description: "Центры психологической помощи для подростков в вашем городе, где можно получить консультацию специалиста.",
      actionText: "Найти центр рядом"
    },
    {
      icon: "GraduationCap",
      title: "Школьный психолог",
      description: "Школьные психологи могут оказать поддержку и помочь справиться с учебным стрессом и эмоциональными проблемами.",
      actionText: "Как подготовиться к разговору"
    }
  ];

  return (
    <section id="help" className="py-16 bg-[#E5DEFF]/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#403E43]">Куда обратиться за помощью</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCards.map((card, index) => (
            <HelpCard 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              additionalInfo={card.additionalInfo}
              actionText={card.actionText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
