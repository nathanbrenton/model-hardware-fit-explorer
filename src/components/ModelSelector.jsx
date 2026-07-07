function ModelSelector({ models, selectedModelId, onSelectModel }) {
  return (
    <section className="model-selector" aria-label="Select a model">
      <div className="section-heading">
        <p className="eyebrow">Selected Model</p>
        <h2>Choose a model to inspect</h2>
      </div>

      <div className="model-selector-list">
        {models.map((model) => (
          <button
            className={
              model.id === selectedModelId
                ? 'model-selector-button is-active'
                : 'model-selector-button'
            }
            key={model.id}
            type="button"
            onClick={() => onSelectModel(model.id)}
          >
            <span>{model.name}</span>
            <small>{model.architectureType}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ModelSelector;
