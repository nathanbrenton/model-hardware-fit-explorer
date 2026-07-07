function MetricHelp({ text }) {
  return (
    <span className="metric-help">
      <button
        aria-label={text}
        className="metric-help-button"
        type="button"
      >
        ?
      </button>

      <span className="metric-help-tooltip" role="tooltip">
        {text}
      </span>
    </span>
  );
}

export default MetricHelp;
