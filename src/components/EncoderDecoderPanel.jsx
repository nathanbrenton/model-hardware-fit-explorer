function ArchitectureBlock({ title, block }) {
  const statusLabel = block.present ? 'Present' : 'Not used';

  return (
    <section className={block.present ? 'architecture-block' : 'architecture-block is-muted'}>
      <div className="architecture-block-header">
        <h3>{title}</h3>
        <span>{statusLabel}</span>
      </div>

      <p>{block.summary}</p>
    </section>
  );
}

function EncoderDecoderPanel({ encoder, decoder }) {
  return (
    <section className="architecture-panel" aria-label="Encoder and decoder architecture">
      <ArchitectureBlock title="Encoder" block={encoder} />
      <ArchitectureBlock title="Decoder" block={decoder} />
    </section>
  );
}

export default EncoderDecoderPanel;
