
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Flame" className="text-[#8B5CF6]" size={28} />
          <h1 className="text-xl md:text-2xl font-bold text-[#403E43]">ПодростокБезВыгорания</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-[#403E43] hover:text-[#8B5CF6] transition-colors">О выгорании</a>
          <a href="#symptoms" className="text-[#403E43] hover:text-[#8B5CF6] transition-colors">Симптомы</a>
          <a href="#prevention" className="text-[#403E43] hover:text-[#8B5CF6] transition-colors">Профилактика</a>
          <a href="#help" className="text-[#403E43] hover:text-[#8B5CF6] transition-colors">Помощь</a>
        </nav>
        <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
          Получить поддержку
        </Button>
      </div>
    </header>
  );
};

export default Header;
