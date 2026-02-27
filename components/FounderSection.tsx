"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 20, suffix: "+", label: "лет опыта" },
  { value: 1000, suffix: "+", label: "проектов" },
  { value: 500, suffix: "+", label: "довольных клиентов" },
  { value: 1, suffix: "", label: "собственное производство", prefix: "" },
];

export default function FounderSection() {
  return (
    <section id="founder" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
              <Image
                src="/images/featured/2yGhM8p7mJA.jpg"
                alt="Салон текстильного дизайна — атмосфера творчества"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Story */}
            <div>
              <p className="text-sm uppercase tracking-widest text-accent mb-4">
                О нас
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                Павел и Лидия Калашниковы
              </h2>
              <p className="text-lg text-muted mb-8">
                Основатели салона текстильного дизайна
              </p>

              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  20 лет мы занимаемся текстильным оформлением интерьеров,
                  используя собственную дизайнерскую и производственную базу.
                  За это время накоплен большой опыт работы с частными и
                  коммерческими объектами.
                </p>
                <p>
                  В салоне представлены ткани со всего мира, разнообразные по
                  стилю и стоимости. Профессиональные карнизные системы —
                  профильные и электроуправляемые — позволяют реализовать проекты
                  любой сложности.
                </p>
                <p>
                  Собственное производство и опытные мастера обеспечивают полный
                  цикл: от разработки проекта до пошива и монтажа.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="mt-2 text-sm text-muted uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
