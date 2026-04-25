import Container from '../shared/ui/Container';
import SectionHeading from '../shared/ui/SectionHeading';

const industries = [
  'Retail mağazalar və satış şəbəkələri',
  'Restoran, kafe və xidmət obyektləri',
  'Korporativ ofislər və biznes mərkəzləri',
  'Təhsil müəssisələri və kurs mərkəzləri',
  'Klinikalar və tibb mərkəzləri',
  'Logistika, anbar və istehsalat sahələri',
];

const IndustriesPage = () => {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Sahələr"
          title="Fərqli sahələr üçün uyğunlaşdırılmış texnoloji həllər"
          description="Hər sektorun əməliyyat modelinə uyğun kamera, POS, proqram təminatı və infrastruktur həlləri təqdim edirik."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry} className="card">
              <p className="font-medium text-slate-100">{industry}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustriesPage;
