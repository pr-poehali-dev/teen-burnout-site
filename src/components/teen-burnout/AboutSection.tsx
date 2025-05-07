
const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
