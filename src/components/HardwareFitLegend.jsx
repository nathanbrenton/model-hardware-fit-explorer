const fitLevels = [
  {
    category: 'Small',
    className: 'fit-small',
    description: 'CPU-friendly for demos and lightweight inference.',
  },
  {
    category: 'Medium',
    className: 'fit-medium',
    description: 'CPU-usable, but GPU can improve responsiveness.',
  },
  {
    category: 'Large',
    className: 'fit-large',
    description: 'GPU recommended for comfortable interactive use.',
  },
  {
    category: 'Very Large',
    className: 'fit-very-large',
    description: 'Requires serious RAM/VRAM planning and runtime tuning.',
  },
];

function HardwareFitLegend() {
  return (
    <section className="hardware-fit-legend" aria-label="Hardware fit legend">
      <div className="section-heading">
        <p className="eyebrow">Hardware Fit</p>
        <h2>Estimated inference sizing categories</h2>
      </div>

      <div className="fit-legend-grid">
        {fitLevels.map((level) => (
          <article className="fit-legend-item" key={level.category}>
            <span className={`compact-fit-badge ${level.className}`}>
              {level.category}
            </span>

            <p>{level.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HardwareFitLegend;
