import Image from "next/image";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactSection from "@/components/ContactSection";
import AnimatedSection from "@/components/AnimatedSection";
import FounderSection from "@/components/FounderSection";
import TeamSection from "@/components/TeamSection";
import FeaturedProjects from "@/components/FeaturedProjects";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-[calc(100dvh-4rem)] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/3_pL8NMeWWk_2.jpg"
          alt="Римские шторы"
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
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
          Салон текстильного дизайна в&nbsp;Хабаровске
        </h1>
        <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
          Оформление частных и коммерческих интерьеров. Полный цикл: проект, пошив, монтаж
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-medium bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Записаться на консультацию
          </a>
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 text-lg font-medium border-2 border-white/60 text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            Наши проекты
          </a>
        </div>
      </div>

      {/* Scroll-down chevron */}
      <a
        href="#founder"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Прокрутить вниз"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          className="w-8 h-8 opacity-70"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Подъемные шторы",
      items: ["Римские", "Австрийские", "Лондонские"],
      image: "/images/products/ET6y-QPr_Vo.jpg",
    },
    {
      title: "Традиционные драпировки",
      items: ["Портьеры", "Гардины", "Ламбрекены"],
      image: "/images/products/JXis_wVMyTw.jpg",
    },
    {
      title: "Солнцезащитные системы",
      items: ["Жалюзи", "Рулонные шторы", "Шторы плиссе"],
      image: "/images/products/plisse20mm_den_noch_.jpg",
    },
    {
      title: "Дополнительный текстиль",
      items: ["Покрывала", "Подушки", "Чехлы на мебель", "Столовое белье"],
      image: "/images/products/LD6wjQEpcGI.jpg",
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
                className="group border border-gray-200 rounded-lg overflow-hidden hover:border-accent transition-colors"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
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
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
          <path d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Дизайн",
      description: "Разработка проекта с вариантами тканей и образцами",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
          <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Примерка",
      description: "Презентация образцов тканей на объекте",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
          <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Оформление заказа",
      description: "Заключение договора и внесение задатка",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
          <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Исполнение",
      description: "Пошив, монтаж и доставка готовых изделий",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
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

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line - desktop only */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />

            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot - desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent text-white items-center justify-center z-10">
                    <span className="text-sm font-bold">{step.number}</span>
                  </div>

                  <div
                    className={`md:grid md:grid-cols-2 md:gap-16 items-center ${
                      index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* Content side */}
                    <div
                      className={`${
                        index % 2 === 0
                          ? "md:text-right md:pr-16"
                          : "md:text-left md:pl-16"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-4 mb-3 ${
                          index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {/* Mobile number badge */}
                        <div className="md:hidden w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold">{step.number}</span>
                        </div>
                        <div className="text-accent">{step.icon}</div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted leading-relaxed ml-14 md:ml-0">
                        {step.description}
                      </p>
                    </div>

                    {/* Empty side for spacing */}
                    <div />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-muted mb-6">
              Готовы обсудить ваш проект?
            </p>
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

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">РИМСКИЕ ШТОРЫ</h3>
            <p className="text-white/70 text-sm">
              Салон текстильного дизайна в Хабаровске
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <a
                  href="tel:+74212454154"
                  className="hover:text-white transition-colors"
                >
                  45-41-54
                </a>
              </p>
              <p>
                <a
                  href="tel:+79141903086"
                  className="hover:text-white transition-colors"
                >
                  +7 914 190 3086
                </a>
              </p>
              <p>
                <a
                  href="mailto:romanshtor@rambler.ru"
                  className="hover:text-white transition-colors"
                >
                  romanshtor@rambler.ru
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Юридическая информация</h4>
            <div className="space-y-1 text-sm text-white/70">
              <p>ИП Калашников Павел Геннадьевич</p>
              <p>ИНН 272106412600</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <FounderSection />
      <TeamSection />
      <FeaturedProjects />
      <ServicesSection />
      <ProcessSection />
      <PortfolioGallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
