import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import PortfolioGallery from "@/components/PortfolioGallery";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
          РИМСКИЕ ШТОРЫ
        </h1>
        <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Текстильное оформление частных и коммерческих интерьеров на высоком
          дизайнерском и инженерном уровне
        </p>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            alt="Работы салона римские шторы"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
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
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">
            Контакты
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Свяжитесь с нами
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Адрес</h3>
              <p className="text-muted">г. Хабаровск, ул. Гамарника, д. 43а</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Телефоны</h3>
              <p className="text-muted">
                <a
                  href="tel:+74212454154"
                  className="hover:text-accent transition-colors"
                >
                  (4212) 45-41-54
                </a>
              </p>
              <p className="text-muted">
                <a
                  href="tel:+79141903086"
                  className="hover:text-accent transition-colors"
                >
                  +7 914 190 3086
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-muted">
                <a
                  href="mailto:romanshtor@rambler.ru"
                  className="hover:text-accent transition-colors"
                >
                  romanshtor@rambler.ru
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
              <p className="text-muted">
                <a
                  href="https://wa.me/79141903086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  +7 914 190 3086
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-bold mb-4">Как нас найти</h3>
          <div className="w-full h-100 rounded-lg overflow-hidden">
            <iframe
              src="https://yandex.com/map-widget/v1/?um=constructor%3Aa4a27257b0b4971a32170042c0f44e7106dcbc05b134bdca4a1de3ea0952276c&amp;source=constructor"
              width="100%"
              height="400"
              className="w-full h-full"
              title="Карта расположения салона Римские Шторы"
            />
          </div>
        </div>
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
                  (4212) 45-41-54
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
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioGallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
