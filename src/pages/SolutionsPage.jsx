import Container from '../shared/ui/Container';
import SectionHeading from '../shared/ui/SectionHeading';

const solutionCards = [
  {
    title: 'Kamera Sistemləri və Texniki Dəstək',
    description: 'CCTV layihələndirmə, quraşdırma, uzaqdan izləmə və davamlı servis xidməti.',
  },
  {
    title: 'Kompüter və Avadanlıq Təmiri',
    description: 'Korporativ cihazlar üçün sürətli diaqnostika, təmir və performans optimizasiyası.',
  },
  {
    title: 'POS (Kassa) Sistemləri',
    description: 'Satış nöqtələri üçün kassa proqramları, cihaz inteqrasiyası və hesabat modulları.',
  },
  {
    title: 'Mobil Tətbiq İnkişafı (iOS/Android)',
    description: 'Biznes proseslərinə uyğun native və cross-platform mobil tətbiqlərin hazırlanması.',
  },
  {
    title: 'Web Sayt və Web Tətbiq İnkişafı',
    description: 'Brendinizə uyğun, performanslı və çevik admin paneli olan müasir web məhsullar.',
  },
  {
    title: 'Proqramlaşdırma və IT Konsaltinq',
    description: 'Müxtəlif biznes ehtiyacları üçün xüsusi proqram həlləri və texniki məsləhət xidməti.',
  },
];

const SolutionsPage = () => {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Həllər"
          title="Biznes yönümlü texnologiya həlləri portfeli"
          description="Hər xidmət real biznes nəticəsinə fokuslanır: sürət, sabitlik, təhlükəsizlik və ölçülənə bilən inkişaf."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {solutionCards.map((item) => (
            <article key={item.title} className="card">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SolutionsPage;
