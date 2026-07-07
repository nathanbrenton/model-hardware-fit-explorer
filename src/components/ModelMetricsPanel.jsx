import MetricHelp from './MetricHelp.jsx';

const metricHelp = {
  parameters:
    'Approximate number of learned weights. More parameters usually means higher memory and compute requirements.',
  context:
    'Maximum number of token positions or runtime context tokens the model can handle.',
  hiddenWidth:
    'The main hidden/vector width of the transformer. Configs may call this d_model, hidden_size, dim, n_embd, or another architecture-specific name.',
  sourceField:
    'The original config field name used by this model family for the comparable dashboard metric.',
  vocabulary:
    'Number of token IDs the tokenizer/model can represent.',
  layers:
    'Number of repeated transformer blocks. More layers usually increases model depth, memory use, and inference cost.',
  attentionHeads:
    'Parallel attention groups inside a transformer layer.',
  headDimension:
    'Usually calculated as hidden width divided by the number of attention heads.',
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

function getHiddenWidthValue(sizing) {
  return sizing.hiddenWidth?.value ?? sizing.dModel;
}

function getHiddenWidthSourceField(sizing) {
  return sizing.hiddenWidth?.sourceField ?? 'd_model';
}

function calculateHeadDimension(hiddenWidth, attentionHeads) {
  if (typeof hiddenWidth !== 'number' || typeof attentionHeads !== 'number') {
    return 'Not available';
  }

  if (attentionHeads === 0) {
    return 'Not applicable';
  }

  return hiddenWidth / attentionHeads;
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

function MetricSection({ title, children, defaultOpen = false }) {
  return (
    <details className="metric-section" open={defaultOpen}>
      <summary>{title}</summary>

      <dl className="metrics-grid">{children}</dl>
    </details>
  );
}

function ModelMetricsPanel({ model }) {
  const { sizing } = model;
  const hiddenWidth = getHiddenWidthValue(sizing);
  const hiddenWidthSourceField = getHiddenWidthSourceField(sizing);

  const encoderHeadDimension = calculateHeadDimension(
    hiddenWidth,
    sizing.encoderAttentionHeads,
  );

  const decoderHeadDimension = calculateHeadDimension(
    hiddenWidth,
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

      <MetricSection title="Core sizing" defaultOpen>
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
          helpText={metricHelp.hiddenWidth}
          label="Hidden width"
          note="Comparable width metric across model families."
          value={hiddenWidth}
        />

        <MetricItem
          helpText={metricHelp.sourceField}
          label="Width source field"
          note="Original config naming convention."
          value={hiddenWidthSourceField}
        />

        <MetricItem
          helpText={metricHelp.vocabulary}
          label="Vocabulary"
          note="Number of token IDs the tokenizer/model can use."
          value={sizing.vocabSize}
        />
      </MetricSection>

      <MetricSection title="Layers">
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
      </MetricSection>

      <MetricSection title="Attention">
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
          note="Calculated as hidden width ÷ encoder attention heads."
          value={encoderHeadDimension}
        />

        <MetricItem
          helpText={metricHelp.headDimension}
          label="Decoder head dim"
          note="Calculated as hidden width ÷ decoder attention heads."
          value={decoderHeadDimension}
        />
      </MetricSection>

      <MetricSection title="Feed-forward">
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
      </MetricSection>

      <MetricSection title="Storage">
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
      </MetricSection>
    </section>
  );
}

export default ModelMetricsPanel;
