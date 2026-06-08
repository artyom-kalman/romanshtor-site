import Image from "next/image";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactSection from "@/components/ContactSection";
import AnimatedSection from "@/components/AnimatedSection";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-[calc(100dvh-4rem)] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/3_pL8NMeWWk_2.jpg"
          alt="Купить римские шторы в Хабаровске — салон Римские Шторы"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 mb-8 text-sm font-medium text-accent border border-accent rounded-full bg-white/10 backdrop-blur-sm">
          20 лет опыта
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
          РИМСКИЕ ШТОРЫ
        </h1>
        <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
          Текстильное оформление частных и коммерческих интерьеров на высоком
          дизайнерском и инженерном уровне
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-medium bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Записаться на консультацию
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center px-8 py-4 text-lg font-medium border-2 border-white/60 text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            Смотреть работы
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted mb-4">
              О нас
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              20 лет в текстильном дизайне интерьеров
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                20 лет мы занимаемся текстильным оформлением интерьеров, используя
                свою дизайнерскую и производственную базы. За это время был
                накоплен колоссальный опыт, которым мы готовы делиться с каждым
                нашим клиентом.
              </p>
              <p>
                Уникальный авторский подход в работе с клиентами направлен на
                достижение главной цели : &quot;Заказчик полностью доволен&quot;.
                Чуткое отношение к мелочам дает возможность отличать наши изделия
                от работ конкурентов.
              </p>
              <p>
                В нашем салоне собраны ткани со всего мира разнообразные по стилю
                и стоимости. Инженерное сопровождение проектов, арсенал
                профессиональных карнизов, таких как профильные и
                электроуправляемые, позволяет добиваться максимального результата
                не только с эстетической, но и технической стороны.
              </p>
              <p>
                Собственное производство с опытными мастерами и технологии,
                разработанные с учетом европейских традиций и российских
                особенностей, помогают создавать самые сложные проекты.
              </p>
              <p>
                Мы осуществляем полный цикл услуг: разработка проекта, пошив
                изделий, монтаж карнизных и солнце защитных систем.
              </p>
            </div>
          </div>

          <div className="relative aspect-3/4 overflow-hidden rounded-lg">
            <Image
              src="/images/featured/2yGhM8p7mJA.jpg"
              alt="Пошив штор на заказ в Хабаровске — салон текстильного дизайна"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Подъемные шторы",
      items: ["Римские", "Австрийские", "Лондонские"],
    },
    {
      title: "Традиционные драпировки",
      items: ["Портьеры", "Гардины", "Ламбрекены"],
    },
    {
      title: "Солнцезащитные системы",
      items: ["Жалюзи", "Рулонные шторы", "Шторы плиссе"],
    },
    {
      title: "Дополнительный текстиль",
      items: ["Покрывала", "Подушки", "Чехлы на мебель", "Столовое белье"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-muted mb-4">
              Услуги
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Что мы предлагаем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2 text-muted">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="mr-2">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Получить консультацию
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Подготовка",
      description: "Выезд дизайнера на объект и проведение замеров",
    },
    {
      number: "02",
      title: "Дизайн",
      description: "Разработка проекта с вариантами тканей и образцами",
    },
    {
      number: "03",
      title: "Примерка",
      description: "Презентация образцов тканей на объекте",
    },
    {
      number: "04",
      title: "Оформление заказа",
      description: "Заключение договора и внесение задатка",
    },
    {
      number: "05",
      title: "Исполнение",
      description: "Пошив, монтаж и доставка готовых изделий",
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-muted mb-4">
              Процесс
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Как мы работаем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-4">
                  <div className="text-5xl font-bold text-accent/20">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Начать проект
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioGallery />
      <ContactSection />
    </main>
  );
}
