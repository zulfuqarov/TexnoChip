import Container from '../shared/ui/Container';
import Button from '../shared/ui/Button';
import SectionHeading from '../shared/ui/SectionHeading';

const ContactPage = () => {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Əlaqə"
          title="Layihənizi texniki komandamızla planlayaq"
          description="Kamera, POS, mobil tətbiq, web platforma və digər IT həlləri üçün sorğunuzu göndərin."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="card">
            <form className="grid gap-4">
              <input className="input" placeholder="Şirkət adı" />
              <input className="input" placeholder="Əlaqə şəxsi" />
              <input className="input" placeholder="Email" />
              <textarea className="input min-h-32" placeholder="Maraqlandığınız xidmət(lər)i və tələbinizi yazın" />
              <Button variant="primary" className="w-full">
                Sorğunu göndər
              </Button>
            </form>
          </div>
          <aside className="card space-y-3">
            <h3 className="text-xl font-semibold text-white">Əlaqə məlumatları</h3>
            <p className="text-slate-300">Email: info@netex.az</p>
            <p className="text-slate-300">Web: netex.az</p>
            <p className="text-slate-300">Telefon: +994 99 334 44 99</p>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;
