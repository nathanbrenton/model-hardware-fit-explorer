import EncoderDecoderPanel from './EncoderDecoderPanel.jsx';

function getFitClassName(category) {
  return category.toLowerCase().replaceAll(' ', '-');
}

function RuntimePanel({ runtime }) {
  if (!runtime) {
    return null;
  }

  return (
    <section className="runtime-panel" aria-label="Runtime information">
      <div className="runtime-panel-header">
        <h3>Runtime</h3>
        <span>{runtime.format}</span>
      </div>

      <dl className="runtime-facts">
        <div>
          <dt>Quantization</dt>
          <dd>{runtime.quantization}</dd>
        </div>

        <div>
          <dt>Precision</dt>
          <dd>{runtime.quantizationBits}</dd>
        </div>

        <div>
          <dt>Context</dt>
          <dd>{runtime.contextWindow.toLocaleString()} tokens</dd>
        </div>
      </dl>

      <p className="runtime-file">{runtime.fileName}</p>

      <div className="runtime-loaders" aria-label="Supported local loaders">
        {runtime.loaders.map((loader) => (
          <span key={loader}>{loader}</span>
        ))}
      </div>

      <p className="runtime-notes">{runtime.notes}</p>
    </section>
  );
}

function ModelCard({ model }) {
  const fitClassName = `fit-${getFitClassName(model.hardwareFit.category)}`;

  return (
    <article className={`model-card ${fitClassName}`}>
      <div className="model-card-header">
        <div>
          <p className="eyebrow">Featured Model</p>
          <h2>{model.name}</h2>
          <p className="model-repo">{model.repo}</p>
        </div>

        <span className={`fit-badge ${fitClassName}`}>
          {model.hardwareFit.category}
        </span>
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

      <RuntimePanel runtime={model.runtime} />

      <EncoderDecoderPanel encoder={model.encoder} decoder={model.decoder} />

      <p className="hardware-summary">{model.hardwareFit.summary}</p>
    </article>
  );
}

export default ModelCard;
