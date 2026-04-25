const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold text-slate-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-slate-300">{description}</p> : null}
    </div>
  );
};

export default SectionHeading;
