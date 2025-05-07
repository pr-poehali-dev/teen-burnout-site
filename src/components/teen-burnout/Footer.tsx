
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-[#403E43] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Flame" className="text-[#8B5CF6]" size={24} />
              <h3 className="text-xl font-bold">ПодростокБезВыгорания</h3>
            </div>
            <p className="text-white/70">
              Информационный ресурс для подростков, родителей и педагогов о профилактике и преодолении эмоционального выгорания.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Тесты на выгорание</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Статьи и исследования</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Для родителей</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Для учителей</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <p className="text-white/70 mb-4">Если у вас есть вопросы или предложения, свяжитесь с нами.</p>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Написать нам
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          © 2025 ПодростокБезВыгорания. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
