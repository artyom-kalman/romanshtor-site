import Image from "next/image";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactSection from "@/components/ContactSection";
import AnimatedSection from "@/components/AnimatedSection";
import {
  business,
  projectsCountLabel,
  yearsCountLabel,
  yearsInBusiness,
  yearsWord,
} from "@/lib/business";

const MARQUEE_ITEMS = [
  "Римские шторы",
  "Австрийские",
  "Лондонские",
  "Портьеры и гардины",
  "Ламбрекены",
  "Жалюзи",
  "Шторы плиссе",
  "Покрывала и подушки",
];

const HeroSection = () => {
  const marqueeTrack = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const experienceLabel = yearsCountLabel();

  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-meta">
            <div className="hero-credential">
              <span className="eyebrow">{experienceLabel} на рынке ·</span>
              <span className="eyebrow">с {business.foundedYear}</span>
            </div>
            <div className="hero-credential">
              <span className="eyebrow">{projectsCountLabel()} проектов ·</span>
              <span className="eyebrow">{business.address.locality}</span>
            </div>
          </div>

          <h1 className="hero-h1">
            Римские<span className="word2">шторы</span>
          </h1>

          <div className="hero-sub">
            <p className="hero-lede">
              {experienceLabel} опыта и более {business.projectsCompleted}{" "}
              реализованных проектов.{" "}
              Текстильное оформление частных и коммерческих интерьеров на
              высоком дизайнерском и инженерном уровне.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn">
                Записаться на консультацию
              </a>
              <a href="#portfolio" className="btn btn--ghost">
                Смотреть работы
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/images/hero/gostinaya-uglovoy-divan.jpg"
            alt="Римские шторы и тюль в светлой гостиной — салон Римские Шторы, Хабаровск"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="hero-marquee">
        <div className="hero-marquee-track">
          {marqueeTrack.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const experienceYears = yearsInBusiness();
  const experienceLabel = yearsCountLabel();

  return (
  <section className="section" id="about">
    <div className="wrap about">
      <AnimatedSection className="about-text">
        <div className="section-eyebrow">
          <span className="eyebrow">О нас</span>
        </div>
        <h2 className="display-h2">
          {experienceLabel} в <em>текстильном</em> дизайне интерьеров
        </h2>
        <p>
          {experienceLabel} мы занимаемся текстильным оформлением интерьеров, используя
          свою дизайнерскую и производственную базы. За это время был накоплен
          колоссальный опыт, которым мы готовы делиться с каждым нашим клиентом.
        </p>
        <p>
          Уникальный авторский подход в работе с клиентами направлен на
          достижение главной цели: «Заказчик полностью доволен». Чуткое
          отношение к мелочам дает возможность отличать наши изделия от работ
          конкурентов.
        </p>
        <p className="muted">
          В нашем салоне собраны ткани со всего мира разнообразные по стилю и
          стоимости. Инженерное сопровождение проектов, арсенал профессиональных
          карнизов, таких как профильные и электроуправляемые, позволяет
          добиваться максимального результата не только с эстетической, но и
          технической стороны.
        </p>
        <p className="muted">
          Собственное производство с опытными мастерами и технологии,
          разработанные с учетом европейских традиций и российских особенностей,
          помогают создавать самые сложные проекты. Мы осуществляем полный цикл
          услуг: разработка проекта, пошив изделий, монтаж карнизных и
          солнцезащитных систем.
        </p>

        <div className="about-stats">
          <div className="about-stat">
            <div className="num">{experienceYears}</div>
            <div className="lbl">{yearsWord(experienceYears)} работы</div>
          </div>
          <div className="about-stat">
            <div className="num">{projectsCountLabel()}</div>
            <div className="lbl">проектов</div>
          </div>
          <div className="about-stat">
            <div className="num">∞</div>
            <div className="lbl">тканей в салоне</div>
          </div>
        </div>
      </AnimatedSection>

      <div className="about-image">
        <Image
          src="/images/featured/kabinet-ugolok-vid-more.jpg"
          alt="Текстильное оформление кабинета с видом на море — салон Римские Шторы, Хабаровск"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
        />
      </div>
    </div>
  </section>
  );
};

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
    <section className="section" id="services">
      <div className="wrap">
        <AnimatedSection>
          <div className="section-head">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow">Услуги</span>
              </div>
              <h2 className="display-h2">
                Что мы <em>предлагаем</em>
              </h2>
            </div>
            <p className="muted" style={{ maxWidth: "32ch", textAlign: "right" }}>
              Полный цикл — от замера и разработки проекта до пошива, монтажа
              карнизов и систем защиты.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article key={service.title} className="service">
                <span className="service-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
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
    <section className="section section-alt" id="process">
      <div className="wrap">
        <AnimatedSection>
          <div className="section-head">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow">Процесс</span>
              </div>
              <h2 className="display-h2">
                Как мы <em>работаем</em>
              </h2>
            </div>
          </div>

          <div className="process">
            {steps.map((step) => (
              <div key={step.number} className="step">
                <div className="step-num">{step.number}</div>
                <div className="step-dot" />
                <div className="step-title">{step.title}</div>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="process-cta">
            <a href="#contact" className="btn">
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
    <main>
      <HeroSection />
      <PortfolioGallery />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
