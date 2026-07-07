function formatValue(value) {
  if (value === undefined || value === null || value === '') {
    return 'Not listed';
  }

  if (typeof value === 'number') {
    return value.toLocaleString();
  }

  return value;
}

function calculateHeadDimension(dModel, attentionHeads) {
  if (typeof dModel !== 'number' || typeof attentionHeads !== 'number') {
    return 'Not available';
  }

  if (attentionHeads === 0) {
    return 'Not applicable';
  }

  return dModel / attentionHeads;
}

function MetricItem({ label, value, note }) {
  return (
    <div className="metric-item">
      <dt>{label}</dt>
      <dd>{formatValue(value)}</dd>
      {note && <p>{note}</p>}
    </div>
  );
}

function ModelMetricsPanel({ model }) {
  const { sizing } = model;

  const encoderHeadDimension = calculateHeadDimension(
    sizing.dModel,
    sizing.encoderAttentionHeads,
  );

  const decoderHeadDimension = calculateHeadDimension(
    sizing.dModel,
    sizing.decoderAttentionHeads,
  );

  return (
    <section className="metrics-panel" aria-label="Model sizing metrics">
      <div className="metrics-panel-header">
        <div>
          <p className="eyebrow">Sizing Metrics</p>
          <h3>Architecture and hardware signals</h3>
        </div>
      </div>

      <dl className="metrics-grid">
        <MetricItem
          label="Parameters"
          value={sizing.parameterCount}
          note="Total learned weights, when known."
        />

        <MetricItem
          label="Context / positions"
          value={sizing.maxPositionEmbeddings}
          note="Maximum token positions or context window."
        />

        <MetricItem
          label="d_model"
          value={sizing.dModel}
          note="Main hidden/vector width."
        />

        <MetricItem
          label="Vocabulary"
          value={sizing.vocabSize}
          note="Number of token IDs the tokenizer/model can use."
        />

        <MetricItem
          label="Encoder layers"
          value={sizing.encoderLayers}
        />

        <MetricItem
          label="Decoder layers"
          value={sizing.decoderLayers}
        />

        <MetricItem
          label="Encoder heads"
          value={sizing.encoderAttentionHeads}
        />

        <MetricItem
          label="Decoder heads"
          value={sizing.decoderAttentionHeads}
        />

        <MetricItem
          label="Encoder head dim"
          value={encoderHeadDimension}
          note="Calculated as d_model ÷ encoder attention heads."
        />

        <MetricItem
          label="Decoder head dim"
          value={decoderHeadDimension}
          note="Calculated as d_model ÷ decoder attention heads."
        />

        <MetricItem
          label="Encoder FFN dim"
          value={sizing.encoderFfnDim}
        />

        <MetricItem
          label="Decoder FFN dim"
          value={sizing.decoderFfnDim}
        />

        <MetricItem
          label="Runtime weights"
          value={sizing.runtimeWeightSize}
        />

        <MetricItem
          label="Repo size"
          value={sizing.repoSize}
        />
      </dl>
    </section>
  );
}

export default ModelMetricsPanel;
