function countByArchitecture(models, architectureType) {
  return models.filter((model) => model.architectureType === architectureType).length;
}

function countRuntimeModels(models) {
  return models.filter((model) => model.runtime).length;
}

function ModelSummary({ models }) {
  const totalModels = models.length;
  const encoderOnlyCount = countByArchitecture(models, 'Encoder-only');
  const decoderOnlyCount = countByArchitecture(models, 'Decoder-only');
  const encoderDecoderCount = countByArchitecture(models, 'Encoder-decoder');
  const runtimeModelCount = countRuntimeModels(models);

  return (
    <section className="model-summary" aria-label="Model inventory summary">
      <div className="summary-card">
        <span>{totalModels}</span>
        <p>Total models</p>
      </div>

      <div className="summary-card">
        <span>{encoderOnlyCount}</span>
        <p>Encoder-only</p>
      </div>

      <div className="summary-card">
        <span>{decoderOnlyCount}</span>
        <p>Decoder-only</p>
      </div>

      <div className="summary-card">
        <span>{encoderDecoderCount}</span>
        <p>Encoder-decoder</p>
      </div>

      <div className="summary-card">
        <span>{runtimeModelCount}</span>
        <p>Runtime profiles</p>
      </div>
    </section>
  );
}

export default ModelSummary;
