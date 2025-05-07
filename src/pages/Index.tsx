
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2FCE2] to-[#E5DEFF]">
      {/* Хедер */}
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

      {/* Главный баннер */}
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

      {/* О выгорании */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#403E43]">Что такое эмоциональное выгорание?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-[#555555] mb-6">
                Эмоциональное выгорание — это состояние физического и эмоционального истощения, возникающее в результате продолжительного стресса и высоких требований к себе.
              </p>
              <p className="text-lg text-[#555555] mb-6">
                У подростков выгорание часто связано с:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#555555]">
                <li>Учебными нагрузками и давлением в школе</li>
                <li>Высокими ожиданиями родителей</li>
                <li>Конкуренцией со сверстниками</li>
                <li>Информационной перегрузкой и давлением социальных сетей</li>
                <li>Неопределенностью будущего и страхом неудачи</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Подростки под давлением" 
                className="rounded-lg shadow-md max-h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Симптомы */}
      <section id="symptoms" className="py-16 bg-[#F6F7F8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#403E43]">Как распознать выгорание?</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#E5DEFF] p-3 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Battery" className="text-[#8B5CF6]" />
                </div>
                <CardTitle>Физическое истощение</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#555555]">
                  <li>• Постоянная усталость, недостаток энергии</li>
                  <li>• Проблемы со сном (бессонница или сонливость)</li>
                  <li>• Частые головные боли, проблемы с пищеварением</li>
                  <li>• Ослабленный иммунитет, частые болезни</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#E5DEFF] p-3 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Brain" className="text-[#8B5CF6]" />
                </div>
                <CardTitle>Эмоциональные признаки</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#555555]">
                  <li>• Чувство беспомощности, безнадежности</li>
                  <li>• Потеря мотивации и интереса</li>
                  <li>• Раздражительность, вспышки гнева</li>
                  <li>• Тревога, депрессивные состояния</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#E5DEFF] p-3 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-[#8B5CF6]" />
                </div>
                <CardTitle>Поведенческие изменения</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#555555]">
                  <li>• Избегание общения, изоляция</li>
                  <li>• Снижение успеваемости</li>
                  <li>• Прокрастинация, избегание обязанностей</li>
                  <li>• Зависимость от гаджетов, игр как способ избегания</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
              Пройти онлайн-диагностику
            </Button>
          </div>
        </div>
      </section>

      {/* Профилактика */}
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
              <div className="mb-6">
                <h3 className="flex items-center text-xl font-semibold text-[#403E43] mb-3">
                  <Icon name="Clock" className="text-[#8B5CF6] mr-2" size={20} />
                  Режим дня и отдых
                </h3>
                <p className="text-[#555555]">
                  Регулярный сон, режим питания и включение в расписание времени для отдыха помогают восстановить энергию и предотвратить истощение.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="flex items-center text-xl font-semibold text-[#403E43] mb-3">
                  <Icon name="Heart" className="text-[#8B5CF6] mr-2" size={20} />
                  Забота о физическом здоровье
                </h3>
                <p className="text-[#555555]">
                  Физическая активность, правильное питание и время на природе улучшают самочувствие и повышают устойчивость к стрессу.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="flex items-center text-xl font-semibold text-[#403E43] mb-3">
                  <Icon name="MessageSquare" className="text-[#8B5CF6] mr-2" size={20} />
                  Социальная поддержка
                </h3>
                <p className="text-[#555555]">
                  Общение с друзьями, семьей или психологом позволяет делиться переживаниями и получать эмоциональную поддержку.
                </p>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl font-semibold text-[#403E43] mb-3">
                  <Icon name="BatteryCharging" className="text-[#8B5CF6] mr-2" size={20} />
                  Управление стрессом
                </h3>
                <p className="text-[#555555]">
                  Техники релаксации, медитация и дыхательные упражнения помогают снизить уровень тревоги и восстановить эмоциональный баланс.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Помощь */}
      <section id="help" className="py-16 bg-[#E5DEFF]/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#403E43]">Куда обратиться за помощью</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" className="text-[#8B5CF6] mr-2" size={20} />
                  Телефоны доверия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#555555] mb-4">
                  Анонимная экстренная психологическая помощь от специалистов по телефону.
                </p>
                <p className="font-semibold">8-800-2000-122</p>
                <p className="text-sm text-[#8A898C]">Всероссийский телефон доверия для детей и подростков</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Building" className="text-[#8B5CF6] mr-2" size={20} />
                  Психологические центры
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#555555]">
                  Центры психологической помощи для подростков в вашем городе, где можно получить консультацию специалиста.
                </p>
                <Button variant="link" className="text-[#8B5CF6] p-0 mt-2">
                  Найти центр рядом
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="GraduationCap" className="text-[#8B5CF6] mr-2" size={20} />
                  Школьный психолог
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#555555]">
                  Школьные психологи могут оказать поддержку и помочь справиться с учебным стрессом и эмоциональными проблемами.
                </p>
                <Button variant="link" className="text-[#8B5CF6] p-0 mt-2">
                  Как подготовиться к разговору
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#403E43]">Истории выздоровления</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#F2FCE2]/50 border-none">
              <CardContent className="pt-6">
                <p className="italic text-[#555555] mb-4">
                  "Я думала, что со мной что-то не так, когда перестала радоваться вещам, которые раньше любила. После разговора с психологом я поняла, что столкнулась с выгоранием. Постепенно, шаг за шагом, я смогла вернуть баланс в свою жизнь."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold">
                    М
                  </div>
                  <div>
                    <p className="font-medium">Мария, 17 лет</p>
                    <p className="text-sm text-[#8A898C]">Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#E5DEFF]/30 border-none">
              <CardContent className="pt-6">
                <p className="italic text-[#555555] mb-4">
                  "Постоянное давление в школе и дома привело меня к полному истощению. Я стал раздражительным и потерял интерес ко всему. Помогли регулярные занятия спортом, ограничение времени в соцсетях и поддержка родителей."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold">
                    А
                  </div>
                  <div>
                    <p className="font-medium">Артём, 16 лет</p>
                    <p className="text-sm text-[#8A898C]">Санкт-Петербург</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
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

      {/* Футер */}
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
    </div>
  );
};

export default Index;
