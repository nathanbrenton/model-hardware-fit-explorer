function getFitClassName(category) {
  return category.toLowerCase().replaceAll(' ', '-');
}

function CompactModelList({ models, selectedModelId, onSelectModel }) {
  return (
    <section className="compact-model-list" aria-label="Compact model list">
      <div className="compact-list-header">
        <span>Model</span>
        <span>Task</span>
        <span>Architecture</span>
        <span>Fit</span>
      </div>

      {models.map((model) => {
        const fitClassName = `fit-${getFitClassName(model.hardwareFit.category)}`;

        return (
          <button
            className={
              model.id === selectedModelId
                ? 'compact-model-row is-active'
                : 'compact-model-row'
            }
            key={model.id}
            type="button"
            onClick={() => onSelectModel(model.id)}
          >
            <span>
              <strong>{model.name}</strong>
              <small>{model.repo}</small>
            </span>

            <span>{model.task}</span>
            <span>{model.architectureType}</span>
            <span className={`compact-fit-badge ${fitClassName}`}>
              {model.hardwareFit.category}
            </span>
          </button>
        );
      })}
    </section>
  );
}

export default CompactModelList;
