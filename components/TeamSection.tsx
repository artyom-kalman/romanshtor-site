import AnimatedSection from "./AnimatedSection";

const teamMembers = [
  {
    name: "Имя уточняется",
    role: "Дизайнер интерьеров",
    description: "Разработка концепций и подбор тканей",
    initials: "Д",
  },
  {
    name: "Имя уточняется",
    role: "Швея-мастер",
    description: "Пошив штор и текстильных изделий",
    initials: "Ш",
  },
  {
    name: "Имя уточняется",
    role: "Монтажник",
    description: "Установка карнизов и солнцезащитных систем",
    initials: "М",
  },
  {
    name: "Имя уточняется",
    role: "Менеджер по работе с клиентами",
    description: "Сопровождение заказов от замера до монтажа",
    initials: "К",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-muted mb-4">
              Команда
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Наша команда
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Специалисты, которые работают над вашим проектом на каждом
              этапе — от замера до монтажа.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                {/* Placeholder avatar */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-accent">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted">{member.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
