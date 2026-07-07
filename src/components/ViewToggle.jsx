const viewOptions = [
  {
    id: 'detail',
    label: 'Detail',
    description: 'Inspect one selected model',
  },
  {
    id: 'cards',
    label: 'Cards',
    description: 'Browse full model cards',
  },
  {
    id: 'compact',
    label: 'Compact',
    description: 'Scan model summary rows',
  },
];

function ViewToggle({ viewMode, onChangeView }) {
  return (
    <section className="view-toggle" aria-label="Choose view mode">
      <div className="section-heading">
        <p className="eyebrow">View Mode</p>
        <h2>Choose how to compare models</h2>
      </div>

      <div className="view-toggle-list">
        {viewOptions.map((option) => (
          <button
            className={
              option.id === viewMode
                ? 'view-toggle-button is-active'
                : 'view-toggle-button'
            }
            key={option.id}
            type="button"
            onClick={() => onChangeView(option.id)}
          >
            <span>{option.label}</span>
            <small>{option.description}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ViewToggle;
