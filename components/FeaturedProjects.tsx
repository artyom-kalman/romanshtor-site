import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    image: "/images/gallery/qM5juQKKnIc.jpg",
    title: "Уютная гостиная",
    location: "Хабаровск, частный дом",
    story:
      "Задача — оформить гостиную с большими окнами. Использовали натуральные ткани с мягкой фактурой, многослойную композицию из портьер и римских штор.",
    tags: ["Римские шторы", "Портьеры", "Натуральные ткани"],
  },
  {
    image: "/images/gallery/AyEC5ehAJjw.jpg",
    title: "Светлая спальня",
    location: "Хабаровск, квартира",
    story:
      "Требовалось мягкое дневное освещение с возможностью полного затемнения. Решение — двойная система: прозрачные гардины и плотные римские шторы на подкладке блэкаут.",
    tags: ["Блэкаут", "Гардины", "Римские шторы"],
  },
  {
    image: "/images/gallery/AMbWfKnbqCE.jpg",
    title: "Элегантная столовая",
    location: "Хабаровск, загородный дом",
    story:
      "Проект выполнен совместно с дизайнером интерьера. Классические ламбрекены с современным кроем подчеркнули высоту потолков и поддержали общий стиль помещения.",
    tags: ["Ламбрекены", "Классический стиль", "Дизайн-проект"],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-muted mb-4">
              Проекты
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Избранные проекты
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Примеры выполненных работ с описанием задач и решений
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <div
                className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    {project.location}
                  </p>
                  <p className="text-lg text-muted leading-relaxed mb-6">
                    {project.story}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-16">
            <a
              href="#gallery"
              className="inline-flex items-center px-8 py-4 text-lg font-medium border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors"
            >
              Смотреть все работы
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
