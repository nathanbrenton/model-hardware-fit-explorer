import MetricHelp from './MetricHelp.jsx';

const metricHelp = {
  parameters:
    'Approximate number of learned weights. More parameters usually means higher memory and compute requirements.',
  context:
    'Maximum number of token positions or runtime context tokens the model can handle.',
  dModel:
    'The main hidden/vector width of the transformer. Larger widths usually increase memory and compute per layer.',
  vocabulary:
    'Number of token IDs the tokenizer/model can represent.',
  layers:
    'Number of repeated transformer blocks. More layers usually increases model depth, memory use, and inference cost.',
  attentionHeads:
    'Parallel attention groups inside a transformer layer.',
  headDimension:
    'Usually calculated as d_model divided by the number of attention heads.',
  ffn:
    'The inner width of the feed-forward network inside each transformer block.',
  runtimeWeights:
    'Approximate model weight file size used at runtime.',
  repoSize:
    'Approximate size of the downloaded repository or local model folder.',
};

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

function MetricItem({ label, value, note, helpText }) {
  return (
    <div className="metric-item">
      <dt>
        <span>{label}</span>
        {helpText && <MetricHelp text={helpText} />}
      </dt>

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
          helpText={metricHelp.parameters}
          label="Parameters"
          note="Total learned weights, when known."
          value={sizing.parameterCount}
        />

        <MetricItem
          helpText={metricHelp.context}
          label="Context / positions"
          note="Maximum token positions or context window."
          value={sizing.maxPositionEmbeddings}
        />

        <MetricItem
          helpText={metricHelp.dModel}
          label="d_model"
          note="Main hidden/vector width."
          value={sizing.dModel}
        />

        <MetricItem
          helpText={metricHelp.vocabulary}
          label="Vocabulary"
          note="Number of token IDs the tokenizer/model can use."
          value={sizing.vocabSize}
        />

        <MetricItem
          helpText={metricHelp.layers}
          label="Encoder layers"
          value={sizing.encoderLayers}
        />

        <MetricItem
          helpText={metricHelp.layers}
          label="Decoder layers"
          value={sizing.decoderLayers}
        />

        <MetricItem
          helpText={metricHelp.attentionHeads}
          label="Encoder heads"
          value={sizing.encoderAttentionHeads}
        />

        <MetricItem
          helpText={metricHelp.attentionHeads}
          label="Decoder heads"
          value={sizing.decoderAttentionHeads}
        />

        <MetricItem
          helpText={metricHelp.headDimension}
          label="Encoder head dim"
          note="Calculated as d_model ÷ encoder attention heads."
          value={encoderHeadDimension}
        />

        <MetricItem
          helpText={metricHelp.headDimension}
          label="Decoder head dim"
          note="Calculated as d_model ÷ decoder attention heads."
          value={decoderHeadDimension}
        />

        <MetricItem
          helpText={metricHelp.ffn}
          label="Encoder FFN dim"
          value={sizing.encoderFfnDim}
        />

        <MetricItem
          helpText={metricHelp.ffn}
          label="Decoder FFN dim"
          value={sizing.decoderFfnDim}
        />

        <MetricItem
          helpText={metricHelp.runtimeWeights}
          label="Runtime weights"
          value={sizing.runtimeWeightSize}
        />

        <MetricItem
          helpText={metricHelp.repoSize}
          label="Repo size"
          value={sizing.repoSize}
        />
      </dl>
    </section>
  );
}

export default ModelMetricsPanel;
