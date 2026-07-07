function ModelCard({ model }) {
  return (
    <article className="model-card">
      <div className="model-card-header">
        <div>
          <p className="eyebrow">Featured Model</p>
          <h2>{model.name}</h2>
          <p className="model-repo">{model.repo}</p>
        </div>

        <span className="fit-badge">{model.hardwareFit.category}</span>
      </div>

      <dl className="model-facts">
        <div>
          <dt>Task</dt>
          <dd>{model.task}</dd>
        </div>

        <div>
          <dt>Architecture</dt>
          <dd>{model.architectureType}</dd>
        </div>

        <div>
          <dt>Model class</dt>
          <dd>{model.modelClass}</dd>
        </div>

        <div>
          <dt>Repo size</dt>
          <dd>{model.sizing.repoSize}</dd>
        </div>
      </dl>

      <p className="hardware-summary">{model.hardwareFit.summary}</p>
    </article>
  );
}

export default ModelCard;
