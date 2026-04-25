import Container from '../shared/ui/Container';
import Button from '../shared/ui/Button';
import SectionHeading from '../shared/ui/SectionHeading';

const metrics = [
  { label: 'Tamamlanan layihə', value: '120+' },
  { label: 'Korporativ müştəri', value: '45+' },
  { label: 'SLA cavab müddəti', value: '< 30 dəq' },
];

const services = [
  'Kamera (CCTV) sistemlərinin quraşdırılması və texniki dəstəyi',
  'Kompüter və texniki avadanlıqların diaqnostikası və təmiri',
  'Kassa (POS) sistemlərinin hazırlanması və inteqrasiyası',
  'Mobil tətbiqlərin hazırlanması (iOS və Android)',
  'Web sayt və web tətbiqlərin hazırlanması',
  'Ümumi proqramlaşdırma və IT həlləri',
];

const HomePage = () => {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div className="hero-glow" />
        <Container className="relative">
          <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            Business IT Partner
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            Biznesiniz üçün müasir, etibarlı və ölçülənə bilən IT həlləri qururuq.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Netex kamera sistemlərindən proqram təminatına qədər bütün texnoloji ehtiyacları bir platformada qarşılayır.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/contact" variant="primary">
              Təklif al
            </Button>
            <Button to="/solutions" variant="secondary">
              Həlləri izləyin
            </Button>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="card">
                <p className="text-3xl font-bold text-white">{metric.value}</p>
                <p className="mt-1 text-sm text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Əsas xidmətlər"
            title="Tam spektr IT və texnologiya xidmətləri"
            description="Planlama, implementasiya və texniki dəstək mərhələlərini biznes yönümlü yanaşma ilə təqdim edirik."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="card">
                <p className="text-lg font-semibold text-white">{service}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
