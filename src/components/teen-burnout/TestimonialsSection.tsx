
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  age: number;
  location: string;
  initial: string;
  bgColor: string;
}

const Testimonial = ({ quote, name, age, location, initial, bgColor }: TestimonialProps) => (
  <Card className={`${bgColor} border-none`}>
    <CardContent className="pt-6">
      <p className="italic text-[#555555] mb-4">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold">
          {initial}
        </div>
        <div>
          <p className="font-medium">{`${name}, ${age} лет`}</p>
          <p className="text-sm text-[#8A898C]">{location}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "\"Я думала, что со мной что-то не так, когда перестала радоваться вещам, которые раньше любила. После разговора с психологом я поняла, что столкнулась с выгоранием. Постепенно, шаг за шагом, я смогла вернуть баланс в свою жизнь.\"",
      name: "Мария",
      age: 17,
      location: "Москва",
      initial: "М",
      bgColor: "bg-[#F2FCE2]/50"
    },
    {
      quote: "\"Постоянное давление в школе и дома привело меня к полному истощению. Я стал раздражительным и потерял интерес ко всему. Помогли регулярные занятия спортом, ограничение времени в соцсетях и поддержка родителей.\"",
      name: "Артём",
      age: 16,
      location: "Санкт-Петербург",
      initial: "А",
      bgColor: "bg-[#E5DEFF]/30"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#403E43]">Истории выздоровления</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              age={testimonial.age}
              location={testimonial.location}
              initial={testimonial.initial}
              bgColor={testimonial.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
