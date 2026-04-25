import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Container from '../shared/ui/Container';

const navItems = [
  { label: 'Ana səhifə', to: '/' },
  { label: 'Həllər', to: '/solutions' },
  { label: 'Sahələr', to: '/industries' },
  { label: 'Əlaqə', to: '/contact' },
];

const MarketingLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <Container className="flex h-20 items-center justify-between">
          <NavLink to="/" className="text-xl font-bold tracking-tight" onClick={closeMobileMenu}>
            Netex
          </NavLink>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a
            href="mailto:info@netex.az"
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500 md:inline-flex"
          >
            Konsultasiya al
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 p-2 text-slate-200 hover:bg-white/10 md:hidden"
            aria-label="Menyunu aç"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </Container>
        {isMobileMenuOpen ? (
          <Container className="pb-4 md:hidden">
            <nav className="grid gap-2 rounded-xl border border-white/10 bg-slate-900/90 p-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2.5 text-sm transition-colors ${
                      isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="mailto:info@netex.az"
                className="mt-1 inline-flex justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Konsultasiya al
              </a>
            </nav>
          </Container>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-8">
        <Container className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Netex. Bütün hüquqlar qorunur.</p>
          <p>netex.az | info@netex.az | +994 99 334 44 99</p>
        </Container>
      </footer>
    </div>
  );
};

export default MarketingLayout;
