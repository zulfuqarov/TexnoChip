import { Link } from 'react-router-dom';

const baseClassName =
  'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200';

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-500',
  secondary: 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20',
  light: 'bg-white text-slate-900 hover:bg-slate-100',
};

const Button = ({ to, href, variant = 'primary', className = '', children }) => {
  const classes = `${baseClassName} ${variants[variant] ?? variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
};

export default Button;
