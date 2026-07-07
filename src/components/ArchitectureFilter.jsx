const architectureOptions = [
  'All',
  'Encoder-only',
  'Decoder-only',
  'Encoder-decoder',
];

function ArchitectureFilter({ selectedArchitecture, onChangeArchitecture }) {
  return (
    <section className="architecture-filter" aria-label="Filter by architecture">
      <div className="section-heading">
        <p className="eyebrow">Filter</p>
        <h2>Filter by architecture type</h2>
      </div>

      <div className="filter-button-list">
        {architectureOptions.map((architecture) => (
          <button
            className={
              architecture === selectedArchitecture
                ? 'filter-button is-active'
                : 'filter-button'
            }
            key={architecture}
            type="button"
            onClick={() => onChangeArchitecture(architecture)}
          >
            {architecture}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ArchitectureFilter;
